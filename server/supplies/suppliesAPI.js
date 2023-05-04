import express from "express";
import getSupplies from "./suppliesController.js";

const router = express.Router();

router.get("/supplies", getSupplies);

export { router as suppliesRouter };
