import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { readdirSync } from "fs";

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
// readdirSync("./routers").map(
//   (r) => app.use("/api", require(`./routers/${r}`)).default
// );
readdirSync("./routers").map(async (r) => {
  const { default: router } = await import(`./routers/${r}`);
  app.use("/api", router);
});

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
