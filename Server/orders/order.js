import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    details:[{
        product_type: String,
        name: String,
        quantity: Number
    }],
    total_price: Number,
    total_quantity: Number,
    time: Number,
    payment_method: String,
    order_id: String,
    order_point: String,
    destination: String
},{timestamps:true})

const Order = mongoose.model("Order", OrderSchema)

export default Order