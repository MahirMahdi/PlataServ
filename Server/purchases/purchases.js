import mongoose from "mongoose";
import { InventorySchema } from "../inventory/inventory";

const {expiry_date, ...rest} = InventorySchema;

const PurchasesSchema = new mongoose.Schema({
    type: rest
});

const Purchases = mongoose.model("Supplies",PurchasesSchema);

export default Purchases;
