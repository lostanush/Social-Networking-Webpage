import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password, secret } = req.body;

  if (!name) return res.status(400).send("Username required");
  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email is taken");
  if (!password || password.length < 4)
    return res
      .status(400)
      .send("Password required and must be 4 characters long");

  if (!secret) return res.status(400).send("Answer required");

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
    return res.status(400).send("Failed, Try again ...");
  }
};

//export default register;

export const login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("No user found");
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send("Wrong Password");
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
    return res.status(400).send("Error. Try again. ");
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
 