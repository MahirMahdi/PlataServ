import mongoose from "mongoose";
import { InventorySchema } from "../inventory/inventory.js";

const {expiry_date, ...rest} = InventorySchema.obj

const Waste = mongoose.model("Waste",rest)

export default Waste