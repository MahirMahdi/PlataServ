import User from "./auth.js";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";

export default async function handleSignup(req, res) {
  try {
    const user_data = req.body;
    const { email, password, username, role } = user_data;

    const check_if_user_exists = await User.findOne({ email: email });

    if (check_if_user_exists) {
      return res
        .status(401)
        .json({ message: "User with this email already exists." });
    }

    const user = {
      username: username,
      email: email,
      password: hashPassword(password),
      role: role,
    };
    await User.create(user);

    return res.status(201).json({
      message: "Your account has been successfully created.",
    });
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function handleLogin(req, res) {
  try {
    const user_data = req.body;
    const { email, password, role } = user_data;

    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      return res
        .status(401)
        .json({ message: "User with this email doesn't exist." });
    }

    if (!findUser.role.includes(role[0])) {
      return res
        .status(401)
        .json({ message: `You are not authorized to access as a ${role[0]}` });
    }

    const check_password = comparePassword(password, findUser.password);

    if (check_password === false) {
      return res.status(401).json({ message: "Invalid password." });
    }

    const payload = { email: email, role: role, username: findUser.username };

    const one_day = 86400000; // one day in ms
    const one_hour = 3600000; // one hour in ms

    const refresh_token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: one_day,
    });

    const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: one_hour,
    });

    res.cookie("jwt", refresh_token, {
      maxAge: one_day,
      secure: true,
      httpOnly: true,
      sameSite: "none",
    });

    return res.status(201).json({
      user: payload,
      accessToken: access_token,
      message: "Successfully logged in.",
    });
  } catch (error) {
    return res.status(401).json({ message: `User unavailable` });
  }
}

export async function refreshToken(req, res) {
  try {
    const cookies = req.cookies;

    if (cookies?.jwt) {
      const verify = jwt.verify(cookies.jwt, process.env.REFRESH_TOKEN_SECRET);
      const { email, role, username } = verify;

      if (email) {
        const user_data = await User.findOne({ email: verify.email });

        if (user_data) {
          const payload = { username: username, role: role, email: email };

          const one_day = 86400000; // one day in ms
          const one_hour = 3600000; // one hour in ms

          const refresh_token = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: one_day }
          );

          const access_token = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: one_hour }
          );

          res.cookie("jwt", refresh_token, {
            maxAge: one_day,
            secure: true,
            httpOnly: true,
            sameSite: "none",
          });

          return res.status(201).json({
            user: payload,
            accessToken: access_token,
            message: "Successfully refreshed token.",
          });
        } else {
          return res.status(401).json({ message: "User does not exist" });
        }
      }
    } else {
      return res.status(401).json({ message: "Unauthorized token" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Token unavailable" });
  }
}

export async function handleLogout(req, res) {
  try {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
      return res.status(204).json("Token unavailable");
    }

    res.clearCookie("jwt", {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    });

    return res.status(200).json({ message: "Logged out succesfully!" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}
