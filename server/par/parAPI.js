import express from "express";
import getPAROrder from "./parController.js";

const router = express.Router();

router.post("/par", getPAROrder);

export { router as parRouter };
