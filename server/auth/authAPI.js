import { Router } from "express";
import handleSignup, { handleLogin } from "./authController.js";

const router = Router();

router.post("/signup", handleSignup);
router.post("/login", handleLogin);

export { router as authRouter };
