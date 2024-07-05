import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";

const register = async (req, res) => {
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

export default register;
