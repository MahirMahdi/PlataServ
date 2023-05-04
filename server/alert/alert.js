import mongoose from "mongoose";
import { InventorySchema } from "../inventory/inventory.js";

const AlertSchema = new mongoose.Schema(
  {
    alert_tag: String,
    item: {
      type: Object.assign({}, InventorySchema.obj),
    },
  },
  { timestamps: true }
);

const Alert = mongoose.model("Alert", AlertSchema);

export default Alert;
