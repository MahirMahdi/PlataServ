import User from "./auth.js";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";

export default async function handleSignup(req, res) {
  const user_data = req.body;
  const { email, password, username, role } = user_data;

  const check_if_user_exists = await User.findOne({ email: email });

  if (check_if_user_exists) {
    return res
      .status(401)
      .json({ message: "User with this email already exists." });
  }

  try {
    const user = {
      username: username,
      email: email,
      password: hashPassword(password),
      role: role,
    };
    await User.create(user);
    const one_day = 86400; // one day in ms
    const one_hour = 300; //one hour in ms

    const refresh_token = jwt.sign(
      { email: email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: one_day }
    );

    const access_token = jwt.sign(
      { email: email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: one_hour }
    );

    res.cookie("jwt", refresh_token, {
      maxAge: one_day,
      secure: false,
      httpOnly: true,
    });

    return res.status(201).json({
      ...user_data,
      accessToken: access_token,
      message: "Your account has been successfully created.",
    });
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function handleLogin() {
  return;
}
