import Inventory from '../models/inventory.js'


export default async function createInventory(req,res){

    const supplies = req.body

    try {
        await Inventory.create(supplies)
        res.json({message:"Inventory created successfully!"})
    } catch (error) {
        res.json(error)
    }
}

export async function updateInventory(){
    
    const ingredients = req.body

    try{
        ingredients.map(ingredient=>{
            const {name,unit_count,quantity} = ingredient
            
            const filter = {name: name}
            const update = {$inc: {total_count: -quantity, total_unit: -(quantity/unit_count).toFixed(2)}}
            const options = {new: true, sort: {expiry_date: 1}} 
    
            Inventory.findOneAndUpdate(filter,update,options)
        })
        res.json({message:'Inventory updated successfully!'})
    } catch(error) {
        res.json({error})
    }
}