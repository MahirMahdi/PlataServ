import Inventory from './inventory.js'


export default async function createInventory(req,res){

    const supplies = req.body

    try {
        await Inventory.create(supplies)
        res.json({message:"Inventory created successfully!"})
    } catch (error) {
        res.json(error)
    }
}

export async function updateInventory(req, res){
    try{
        const ingredients = req.body.ingredients
        const updates = ingredients.map(ingredient => {
            return {filter: {name: ingredient.name, total_count:{$gt: 0}}, update:{$inc:{total_count: -ingredient.quantity, total_unit: -(ingredient.quantity/ingredient.unit_count)}}}
        })
        const bulkUpdate = updates.map(({ filter, update }) => ({
            updateOne: {
              filter,
              update,
            }
          }));
        const options = {new: true, sort: {expiry_date: 1}} 
        Inventory.bulkWrite(bulkUpdate,options)
    } catch(error) {
        res.json({error})
    }
}