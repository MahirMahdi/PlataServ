import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    type: String,
    product_id: String,
    name: String,
    price: Number,
    description: String,
    ingredients:[{
        name: String,
        unit: String,
        unit_price: Number,
        unit_count: Number,
        expiry_period: Number
    }],
    image: String
})

const Product = mongoose.model("Product", ProductSchema)

export default Product