import Inventory from "./inventory.js";
import sendAlert from "../alert/alertController.js";
import sendToWaste from "../waste/wasteController.js";

export default async function expiryTracker() {
  const present_day = new Date().toISOString();
  const date = new Date();
  date.setDate(date.getDate() + 2);
  const three_days_before_expiry_date = date.toISOString();

  const ingredients_with_three_days_expiry_period = await Inventory.find({
    expiry_date: {
      $lte: three_days_before_expiry_date,
      $gt: new Date(),
    },
    total_units: {
      $gt: 0,
    },
    alert_status: { $exists: false },
  });

  const expired_inventories = await Inventory.find({
    expiry_date: {
      $lte: present_day,
    },
    total_units: {
      $gt: 0,
    },
  });

  const extra_inventory_filters = ingredients_with_three_days_expiry_period.map(
    (ingredient) => ({
      $and: [
        { name: ingredient.name },
        { expiry_date: { $gt: three_days_before_expiry_date } },
      ],
    })
  );

  const ingredients_with_three_days_expiry_period_and_extra_inventory =
    await Inventory.find({ $or: extra_inventory_filters });

  const ingredients_with_three_days_expiry_period_but_without_extra_inventory =
    ingredients_with_three_days_expiry_period.filter(
      (ingredient) =>
        !ingredients_with_three_days_expiry_period_and_extra_inventory.some(
          (extraInventory) => extraInventory.name === ingredient.name
        )
    );

  if (
    ingredients_with_three_days_expiry_period_but_without_extra_inventory.length !==
    0
  )
    sendAlert(
      "expiry",
      ingredients_with_three_days_expiry_period_but_without_extra_inventory
    );

  if (expired_inventories.length !== 0) sendToWaste(expired_inventories);

  await Inventory.deleteMany({ total_units: 0 });
}

export async function totalCountTracker(req, res, next) {
  try {
    const ingredients = req.body.ingredients;

    const unavailable_ingredients_filters = ingredients.map((ingredient) => ({
      $and: [
        { name: ingredient.name },
        { total_units: { $type: "number", $eq: 0 } },
      ],
    }));

    const unavailable_ingredients = await Inventory.find({
      $or: unavailable_ingredients_filters,
    });

    if (unavailable_ingredients.length !== 0)
      await Inventory.deleteMany({ $or: unavailable_ingredients });

    const alerted_ingredients_filters = ingredients.map((ingredient) => ({
      $and: [
        { name: ingredient.name },
        { total_packs: { $type: "number", $lte: 1 } },
      ],
    }));

    const extra_inventory_filters = ingredients.map((ingredient) => ({
      $and: [
        { name: ingredient.name },
        { total_packs: { $type: "number", $gt: 1 } },
        { expiry_date: { $gt: new Date() } },
      ],
    }));

    const alerted_ingredients = await Inventory.find({
      $or: alerted_ingredients_filters,
    });

    const alerted_ingredients_with_extra_inventory = await Inventory.find({
      $or: extra_inventory_filters,
    });

    const alerted_ingredients_without_extra_inventory =
      alerted_ingredients.filter(
        (ingredient) =>
          !alerted_ingredients_with_extra_inventory.some(
            (extraIngredient) => extraIngredient.name === ingredient.name
          )
      );

    if (alerted_ingredients_without_extra_inventory.length !== 0)
      sendAlert("count", alerted_ingredients_without_extra_inventory);

    return next();
  } catch (error) {
    console.log(error);
  }
}
