import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
  {
    details: [
      {
        product_type: String,
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    customer_name: String,
    total_price: Number,
    total_quantity: Number,
    time: Number,
    payment_method: String,
    order_id: String,
    order_point: String,
    destination: String,
  },
  { timestamps: true }
);

const Sales = mongoose.model("Sales", SalesSchema);

export default Sales;
