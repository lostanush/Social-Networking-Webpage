import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const MONGODB = process.env.MONGODB_URI || "your-default-mongodb-uri";

// Database connection
mongoose
  .connect(MONGODB)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error =>", err));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection Error: ${err.message}`);
});

// Middleware
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// Routes
app.post("/api/register", (req, res) => {
  console.log("Register Endpoint =>", req.body);
  res.send("User registered");
});

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
