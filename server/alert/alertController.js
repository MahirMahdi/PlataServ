import Alert from "./alert.js";

export default async function sendAlert(type, ingredients) {
  try {
    const alert = ingredients.map((ingredient) => {
      return { alert_tag: type, item: ingredient };
    });

    const existing_document = await Alert.find({
      alert_tag: type,
      "item.name": { $in: ingredients.map((ingredient) => ingredient.name) },
      "item.expiry_date": {
        $in: ingredients.map((ingredient) => ingredient.expiry_date),
      },
    });

    if (existing_document.length === 0) await Alert.insertMany(alert);
    else {
      const unmatched_items = ingredients.filter(
        (item) =>
          !existing_document.some(
            (filterItem) => filterItem.item.name === item.name
          )
      );
      if (unmatched_items.length !== 0) {
        const newAlert = unmatched_items.map((item) => {
          return { alert_tag: type, item: item };
        });
        await Alert.insertMany(newAlert);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAlerts(req, res) {
  try {
    const alerts = await Alert.find({});
    res.json({ alerts: alerts });
  } catch (error) {
    console.log(error);
  }
}
