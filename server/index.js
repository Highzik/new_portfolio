import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
})