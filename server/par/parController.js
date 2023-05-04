import Purchases from "../purchases/purchases.js";
import FoodBank from "../foodbank/foodbank.js";
import Waste from "../waste/waste.js";

export default async function getPAROrder(req, res) {
  const alerts = req.body;

  const filter = alerts?.map((alert) => alert.item.name);

  if (filter.length !== 0) {
    const par = await PARBuilder(filter);
    res.json({ par: par });
  }
}

async function PARBuilder(filters) {
  const par_of_all_items = filters.map(async (filter) => {
    const purchases = await Purchases.find({ name: filter });
    const wastes = await Waste.find({ name: filter });
    const foodbank = await FoodBank.find({ name: filter });

    const purchases_total_packs = purchases.reduce(
      (acc, curr) => acc + curr.total_packs,
      0
    );
    const wastes_total_packs = wastes.reduce(
      (acc, curr) => acc + curr.total_packs,
      0
    );
    const foodbank_total_packs = foodbank.reduce(
      (acc, curr) => acc + curr.total_packs,
      0
    );

    const {
      name,
      pack_price,
      unit_name,
      units_in_a_pack,
      expiry_date,
      createdAt,
    } = purchases[0];

    const expiry_period_diff_in_ms =
      new Date(expiry_date).getTime() - new Date(createdAt).getTime();
    const expiry_period_diff_in_days =
      Math.floor(expiry_period_diff_in_ms / (1000 * 60 * 60 * 24)) + 1;

    const par_value = Math.round(
      (purchases_total_packs - wastes_total_packs - foodbank_total_packs) /
        purchases.length
    );

    const par_of_each_item = {
      name: name,
      pack_price: pack_price,
      unit_name: unit_name,
      units_in_a_pack: units_in_a_pack,
      total_packs: par_value < 1 ? 1 : par_value,
      expiry_period: expiry_period_diff_in_days,
    };

    return par_of_each_item;
  });

  return Promise.all(par_of_all_items);
}
