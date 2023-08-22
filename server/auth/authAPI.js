import { Router } from "express";
import handleSignup, { handleLogin } from "./authController";

const router = Router();

router.post("/signup", handleLogin);
router.post("/login", handleSignup);

export { router as authRouter };
