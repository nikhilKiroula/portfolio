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

    const stream = await openai.responses.create({
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

    // Tell the browser that the response will arrive as SSE events.
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const event of stream) {
      // Capture usage information when the response is completed.
      // This is only for verifying Groq prompt-cache usage.
      if (event.type === "response.completed") {
        const usage = event.response?.usage;

        console.log("AI USAGE:", {
          inputTokens: usage?.input_tokens,
          cachedTokens: usage?.input_tokens_details?.cached_tokens,
          outputTokens: usage?.output_tokens,
          totalTokens: usage?.total_tokens,
        });
      }

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