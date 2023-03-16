import mongoose from "mongoose";

export const InventorySchema = new mongoose.Schema({
    name: String,
    pack_price: Number,
    unit_name: String,
    units_in_a_pack: Number,
    total_packs: Number,
    total_units: Number,
    expiry_date: Date,
    alert_status: String
},{timestamps:true});

const Inventory = mongoose.model("Inventory", InventorySchema);

export default Inventory;
