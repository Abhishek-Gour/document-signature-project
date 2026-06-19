import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/signatureApp");

// Routes
import authRoutes from "./routes/auth.js";
import docRoutes from "./routes/document.js";

app.use("/api/auth", authRoutes);
app.use("/api/docs", docRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
