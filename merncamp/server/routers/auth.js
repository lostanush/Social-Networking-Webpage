import express from "express";
import register from "../components/auth.js";
const router = express.Router();

router.post("/register", register);

export default router;
 