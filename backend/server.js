import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.js";
import contactRouter from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 2000;

// Allow the frontend to communicate with this backend.
// Allow requests from the configured frontend origin.
const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-ruddy-seven-59.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

// Parse incoming JSON request bodies.
app.use(express.json());

// Mount the AI chat API under /api/chat.
app.use("/api/chat", chatRouter);

// Mount the contact form API.
app.use("/api/contact", contactRouter);

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "AI backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`AI backend running on http://localhost:${PORT}`);
});