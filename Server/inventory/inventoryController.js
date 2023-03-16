import Inventory from './inventory.js';

export default async function createInventory(req,res){
    try {
        const supplies = req.body;
        await Inventory.create(supplies);
        res.json({success:"Ordered successfully!"});
    } catch (error) {
        res.json({error: 'Error'});
    }
}

export async function updateInventory(req, res){
    try{
        const ingredients = req.body.ingredients;

        const filters = ingredients.map(ingredient => ({
            $and: [
              { name: ingredient.name },
              { total_packs: { $type: 'number', $gt: 0 }},
              { expiry_date: {$gt: new Date().toISOString()}}
            ]
          }));
        
        // to remove duplicate ingredients
        const pipeline = [
          { $match: {
            name: {
              $in: ingredients.map((ingredient) => ingredient.name),
            },
            total_packs: { $type: 'number', $gt: 0 },
            expiry_date: {$gt: new Date()}
            }
          },
          { $group: { _id: "$name", document: { $first: "$$ROOT" } } },
          { $replaceRoot: { newRoot: "$document" } }
        ];

        const count = await Inventory.aggregate(pipeline);

        if (count !== ingredients.length) res.json({error:"Ingredient unavailable"});

        else {
            const updates = ingredients.map(ingredient => ({
                $inc: {
                  total_units: -ingredient.quantity,
                  total_packs: -(ingredient.quantity / ingredient.units_in_a_pack)
                }
              }));

              const bulkUpdate = filters.map((filter, index) => ({
                updateOne: {
                  filter,
                  update: updates[index],
                }
              }));
              
            const options = {new: true, sort: {expiry_date: 1}} ;

            Inventory.bulkWrite(bulkUpdate,options);
            res.json({success: "Inventory updated!"});
        }
    } catch(error) {
        console.log(error);
    }
}