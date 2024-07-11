import express from "express";
import {
  register,
  login,
  currentUser,
  forgotPassword,
} from "../components/auth.js";

const router = express.Router();

//middleware
import { requireSignin } from "../middleware/auth.js";

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotPassword);

export default router;
