import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";

export const register = async (req, res) => {
  const { name, email, password, secret } = req.body;

  if (!name) {
    return res.json({
      error: "User required",
    });
  }
  const exist = await User.findOne({ email });
  if (exist) {
    return res.json({
      error: "Email is taken",
    });
  }

  if (!password || password.length < 4) {
    return res.json({
      error: "Password required and must be 4 characters long",
    });
  }

  if (!secret) {
    return res.json({
      error: "Answer required",
    });
  }

  const hashedPassword = await hashPassword(password);
  const user = new User({
    name,
    email,
    password: hashedPassword, // Assign the hashed password
    secret,
  });

  try {
    await user.save();
    console.log("Successfully Registered => ", user);
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log("Registration Failed => ", err);
    return res.json({ error: "Failed, Try again ..." });
  }
};

//export default register;

export const login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong Password",
      });
    }
    //...token making ...
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      error: "Error. Try again. ",
    });
  }
};

//export default login ;

export const currentUser = async (req, res) => {
  try {
    //console.log(req.headers);
    //console.log(req.user);
    // console.log(req.auth);
    const user = await User.findById(req.auth._id);
    //res.json(user);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const forgotPassword = async (req, res) => {
  // console.log("Received request at /forgot-password endpoint"); // Log endpoint access
  // console.log(req.body); // Log the received data
  const { email, newPassword, secret } = req.body;
  if (!newPassword || !newPassword < 4) {
    return res.json({
      error: "New password is required and should be min 4 characters long.",
    });
  }
  if (!secret) {
    return res.json({
      error: "Secret is required",
    });
  }
  const user = await User.findOne({ email, secret });
  if (!user) {
    return res.json({
      error: "We cant verify you with those details ",
    });
  }
  try {
    const hashed = await hashPassword(newPassword);
    await User.findByIdAndUpdate(user._id, { password: hashed });
    return res.json({
      success: "Congrats! Now you can login with your new password.",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      error: "Somthing went wrong, Try again.",
    });
  }
};
