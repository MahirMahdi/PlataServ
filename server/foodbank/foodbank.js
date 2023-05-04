import mongoose from "mongoose";
import { InventorySchema } from "../inventory/inventory.js";

const FoodBankSchema = new mongoose.Schema(InventorySchema.obj, {
  timestamps: true,
});

const FoodBank = mongoose.model("FoodBank", FoodBankSchema);

export default FoodBank;
