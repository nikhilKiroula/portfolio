import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// Allow the frontend to communicate with this backend
app.use(cors());

// Parse incoming JSON request bodies.
app.use(express.json());

app.get("/api/health", (req, res)=>{
    res.json({
        success:true,
        message:"AI backend is running",
    });
});

app.listen(PORT, ()=>{
    console.log(`AI backend running on http://localhost:${PORT}`);
});