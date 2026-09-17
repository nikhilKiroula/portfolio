import express from "express";
import OpenAI from "openai";
import portfolioContext from "../data/portfolioContext.js";

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY,
  baseURL: process.env.AI_BASE_URL,
});

// Handle AI chat requests from the portfolio frontend.
router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    // Reject empty messages before sending them to the AI provider.
    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "A valid message is required.",
      });
    }

    let stream;

    const MAX_RETRIES = 3;

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        stream = await openai.responses.create({
          model: process.env.AI_MODEL,
          reasoning: {
            effort: "low",
          },
          stream: true,
          input: [
            {
              role: "system",
              content: portfolioContext,
            },
            {
              role: "user",
              content: message.trim(),
            },
          ],
        });

        // Request succeeded.
        break;
      } catch (error) {
        const status = error?.status;

        // Only retry temporary rate/server errors.
        const isRetryable =
          status === 429 ||
          status === 500 ||
          status === 502 ||
          status === 503;

        // Don't retry non-temporary errors.
        if (!isRetryable || attempt === MAX_RETRIES) {
          throw error;
        }

        const retryAfter = error?.headers?.get?.("retry-after");

        let delay;

        if (retryAfter) {
          const seconds = Number(retryAfter);

          delay = Number.isFinite(seconds)
            ? seconds * 1000
            : Math.min(1000 * 2 ** attempt, 8000);
        } else {
          // Exponential backoff with jitter.
          delay =
            Math.min(1000 * 2 ** attempt, 8000) +
            Math.random() * 500;
        }

        console.warn(
          `AI request failed with ${status}. Retrying in ${Math.round(delay)}ms...`,
        );

        await sleep(delay);
      }
    }

    if (!stream) {
      throw new Error("AI stream could not be created.");
    }
    // Tell the browser that the response will arrive as SSE events.
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const event of stream) {

      // Send generated text to the frontend progressively.
      if (event.type === "response.output_text.delta") {
        res.write(
          `data: ${JSON.stringify({
            delta: event.delta,
          })}\n\n`,
        );
      }
    }

    // Tell the frontend that generation is complete.
    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("AI chat error:", error);

    // If streaming has already started, don't try to send a JSON response.
    if (res.headersSent) {
      res.end();
      return;
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong while processing your request.",
    });
  }
});

export default router;