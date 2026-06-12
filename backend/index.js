import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5501;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
    mongoose.connect(uri);
    console.log("MongoDB connected successfully.");
});