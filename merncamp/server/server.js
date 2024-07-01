import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const morgan = require("morgan");
require("dotenv").config();

//db
mongoose
  .connect(process.env.MONGODB, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error => ", err));

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://localhost/3000"],
  })
);

app.post("/api/user", (req, res) => {
  console.log("Register Endpoint =>", req.body);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
