import Inventory from './inventory.js'

export default async function createInventory(req,res){

    const supplies = req.body

    try {
        await Inventory.create(supplies)
        res.json({success:"Ordered successfully!"})
    } catch (error) {
        res.json({error: 'Error'})
    }
}

export async function updateInventory(req, res){
    try{
        const ingredients = req.body.ingredients

        console.log(ingredients);

        const filters = ingredients.map(ingredient => ({
            $and: [
              { name: ingredient.name },
              { total_count: { $type: 'number', $gt: 0 }},
              { expiry_date: {$gt: new Date().toISOString()}}
            ]
          }));

        const count = await Inventory.countDocuments({ $or: filters })

        if (count !== ingredients.length) res.json({error:"Ingredient unavailable"})

        else {
            const updates = ingredients.map(ingredient => ({
                $inc: {
                  total_count: -ingredient.quantity,
                  total_unit: -(ingredient.quantity / ingredient.unit_count)
                }
              }))

              const bulkUpdate = filters.map((filter, index) => ({
                updateOne: {
                  filter,
                  update: updates[index],
                }
              }));
              
            const options = {new: true, sort: {expiry_date: 1}} 

            Inventory.bulkWrite(bulkUpdate,options)
            res.json({success: "Inventory updated!"})
        }
    } catch(error) {
        console.log(error);
    }
}