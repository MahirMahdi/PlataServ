import Alert from "../alert/alert.js";
import Inventory from "./inventory.js";

export default async function createInventory(req, res) {
  try {
    const type = req.params.type;
    const supplies = req.body;
    const supplies_restructured = supplies.map((supply) => {
      const { expiry_period, ...rest } = supply;

      const currentDate = new Date();
      const expiry_date = new Date(
        currentDate.setDate(currentDate.getDate() + expiry_period)
      );

      const newSupply = Object.assign({ expiry_date: expiry_date }, rest);

      return newSupply;
    });
    if (type === "alert")
      await Alert.deleteOne({
        alert_tag: "count",
        "item.name": supplies[0].name,
      });
    await Inventory.insertMany(supplies_restructured);
    res.json({ success: "Ordered successfully!" });
  } catch (error) {
    res.json({ error: "Error" });
  }
}

export async function updateInventory(req, res) {
  try {
    const ingredients = req.body.ingredients;

    const filters = ingredients.map((ingredient) => ({
      $and: [
        { name: ingredient.name },
        { total_units: { $gte: ingredient.quantity } },
        { expiry_date: { $gt: new Date() } },
      ],
    }));

    // to remove duplicate ingredients
    const pipeline = [
      {
        $match: {
          name: {
            $in: ingredients.map((ingredient) => ingredient.name),
          },
          total_units: { $gt: 0 },
          expiry_date: { $gt: new Date() },
        },
      },
      { $group: { _id: "$name", document: { $first: "$$ROOT" } } },
      { $replaceRoot: { newRoot: "$document" } },
    ];

    const count = await Inventory.aggregate(pipeline);

    if (count.length !== ingredients.length)
      res.json({ error: "Ingredient unavailable" });
    else {
      const updates = ingredients.map((ingredient) => ({
        $inc: {
          total_units: -ingredient.quantity,
          total_packs: -(ingredient.quantity / ingredient.units_in_a_pack),
        },
      }));

      const bulkUpdate = filters.map((filter, index) => ({
        updateOne: {
          filter,
          update: updates[index],
        },
      }));

      const options = { new: true, sort: { expiry_date: 1 } };

      Inventory.bulkWrite(bulkUpdate, options, function (err, result) {
        if (!err && result.nMatched > 0) {
          res.json({ success: "Order confirmed!" });
        } else {
          res.json({ error: "Ingredient unavailable" });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function inventoryReport(req, res) {
  try {
    const reports = await Inventory.find({ total_units: { $gt: 0 } });
    res.json({ reports: reports });
  } catch (error) {
    console.log(error);
  }
}
