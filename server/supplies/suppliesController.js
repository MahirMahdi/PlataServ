import Product from "../products/product.js";

export default async function getSupplies(req, res) {
  // removing duplicate ingredients and sending them for ordering new supplies.
  try {
    let supplies = [];

    const all_ingredients = await Product.aggregate([
      {
        $match: {},
      },
      {
        $unwind: "$ingredients",
      },
      {
        $replaceRoot: { newRoot: "$ingredients" },
      },
    ]);

    all_ingredients.map((ingredient) => {
      if (!supplies.some((supply) => supply.name === ingredient.name)) {
        supplies.push(ingredient);
      }
    });

    res.json({ supplies: supplies });
  } catch (error) {
    res.json({ error });
  }
}
