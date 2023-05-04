import mongoose from "mongoose";
import { InventorySchema } from "../inventory/inventory.js";

const { expiry_date, ...rest } = InventorySchema.obj;

const WasteSchema = new mongoose.Schema(rest, { timestamps: true });

const Waste = mongoose.model("Waste", WasteSchema);

export default Waste;
