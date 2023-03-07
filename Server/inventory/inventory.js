import mongoose from "mongoose"

const InventorySchema = new mongoose.Schema({
    name: String,
    unit_price: Number,
    unit: String,
    unit_count: Number,
    total_unit:{
        type: Number,
        set: function(value) {
            if (typeof value === 'number') {
              return parseFloat(value.toFixed(2));
            }
            return value;
          }
    },
    total_count: Number,
    expiry_date: Date
},{timestamps:true})

const Inventory = mongoose.model("Inventory", InventorySchema)

export default Inventory
