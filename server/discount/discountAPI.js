import express from "express";
import applyDiscount from "./discountController.js";

const router = express.Router();

router.post("/discount", applyDiscount);

export { router as discountRouter };
