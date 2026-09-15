import express from "express";
import { Resend } from "resend";

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

// Handle contact form submissions.
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate all required fields before sending the email.
    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Send the visitor's message to your email address.
    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: ["nikhilkiroula7@gmail.com"],
      replyTo: email.trim(),
      subject: `Portfolio Contact: ${subject.trim()}`,
      text: `
Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send your message.",
      });
    }

    res.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

export default router;