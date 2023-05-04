import Product from "../products/product.js";
import Inventory from "../inventory/inventory.js";
import Alert from "../alert/alert.js";

export default async function applyDiscount(req, res) {
  try {
    const { _id, item } = req.body;

    await Product.updateMany(
      { ingredients: { $elemMatch: { name: item.name } } },
      { $set: { discount_period: item.expiry_date } }
    );

    await Inventory.updateOne(
      { _id: item._id },
      { $set: { alert_status: "checked" } }
    );

    await Alert.deleteOne({ _id: _id });

    res.json({ message: "Applied discount successfully!" });
  } catch (error) {
    console.log(error);
  }
}
