import mongoose from "mongoose";
import { InventorySchema } from "../inventory/inventory.js";

const schema = Object.assign({}, InventorySchema.obj)

delete schema.expiry_date

const PurchasesSchema = new mongoose.Schema(schema, {
    timestamps:true
})

const Purchases = mongoose.model("Purchases",PurchasesSchema);

export default Purchases;
