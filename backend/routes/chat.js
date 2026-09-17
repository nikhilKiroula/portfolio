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

    const response = await openai.responses.create({
      model: process.env.AI_MODEL,
      
      // Use lower reasoning effort for faster, simpler portfolio queries.
      reasoning: {
        effort: "low",
      },

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

    res.json({
      success: true,
      message: response.output_text,
    });
  } catch (error) {
    console.error("AI chat error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while processing your request.",
    });
  }
});

export default router;