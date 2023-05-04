import express from "express";
import bankingInformationChart, { cashReport } from "./financeController.js";

const router = express.Router();

router.post("/chart/bank-info", bankingInformationChart);
router.post("/report/cash", cashReport);

export { router as financeRouter };
