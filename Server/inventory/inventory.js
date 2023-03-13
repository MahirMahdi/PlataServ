import mongoose from "mongoose"

export const InventorySchema = new mongoose.Schema({
    name: String,
    unit_price: Number,
    unit: String,
    unit_count: Number,
    total_unit: Number,
    total_count: Number,
    expiry_date: Date
},{timestamps:true})

const Inventory = mongoose.model("Inventory", InventorySchema)

export default Inventory
