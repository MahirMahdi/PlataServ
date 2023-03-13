import Inventory from "./inventory.js";
import sendAlert from "../alert/alertController.js";
import sendToWaste from "../waste/wasteController.js";

export default async function expiryTracker(){
    
    const present_day = new Date().toISOString()
    const date = new Date()
    date.setDate(date.getDate() + 2)
    const three_days_before_expiry_date = date.toISOString()

    const inventories_with_three_days_expiry_period = await Inventory.find({expiry_date: {$lte: three_days_before_expiry_date}})
    const expired_inventories = await Inventory.find({expiry_date: {$lte: present_day}, total_count: {$gt: 0}})

    if (inventories_with_three_days_expiry_period.length !== 0) sendAlert('expiry', inventories_with_three_days_expiry_period)

    if (expired_inventories.length !== 0) sendToWaste(expired_inventories)
}

export async function totalCountTracker(req,res,next){
    try {
        const ingredients = req.body.ingredients

        const unavailable_ingredients = ingredients.map(ingredient => ({
            $and: [
              { name: ingredient.name },
              { total_count: { $type: 'number', $eq: 0 } }
            ]
          }));

    
        if(unavailable_ingredients.length !== 0) await Inventory.deleteMany({$or: unavailable_ingredients})
        
        

        // console.log(deleted);
        
        const filters = ingredients.map(ingredient => ({
            $and: [
              { name: ingredient.name },
              { total_unit: { $type: 'number', $eq: 1 } }
            ]
        }));

        const ingredients_alert = await Inventory.find({$or: filters})

        if(ingredients_alert.length !== 0) sendAlert('count', ingredients_alert)

        return next()

    } catch (error) {
        console.log(error);
    }
}