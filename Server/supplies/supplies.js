import mongoose from "mongoose";
import { InventorySchema } from "../inventory/inventory";

const {expiry_date, ...rest} = InventorySchema

const SuppliesSchema = new mongoose.Schema({
    type: rest
})

const Supplies = mongoose.model("Supplies",SuppliesSchema)

export default Supplies
