import mongoose from "mongoose";
import { InventorySchema } from "../inventory/inventory.js";

const PurchasesSchema = new mongoose.Schema(InventorySchema.obj, {
  timestamps: true,
});

const Purchases = mongoose.model("Purchases", PurchasesSchema);

export default Purchases;
