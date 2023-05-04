import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  type: String,
  product_id: String,
  name: String,
  price: Number,
  description: String,
  ingredients: [
    {
      name: String,
      unit_name: String,
      pack_price: Number,
      units_in_a_pack: Number,
      expiry_period: Number,
    },
  ],
  image: String,
  discount_period: Date,
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
