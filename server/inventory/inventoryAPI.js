import express from "express";
import createInventory, { updateInventory } from "./inventoryController.js";
import { totalCountTracker } from "./inventoryTracker.js";
import { inventoryReport } from "./inventoryController.js";

const router = express.Router();

router.post("/inventory/:type", createInventory);
router.put("/inventory", totalCountTracker, updateInventory);
router.get("/report/inventory", inventoryReport);

export { router as inventoryRouter };
