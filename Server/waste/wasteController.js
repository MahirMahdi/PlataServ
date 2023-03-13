import Waste from "./waste.js";
import Inventory from "../inventory/inventory.js";

export default async function sendToWaste(items){

    try {
        const items_in_waste_structure = items.map(item => {
            const { _id, expiry_date, ...itemObject } = item.toObject();
            return itemObject;
        })
        const items_ids = items.map(item => item._id)
        await Waste.create(items_in_waste_structure)
        await Inventory.deleteMany({_id:{$in: items_ids}})
    } catch (error) {
        console.log(error);
    }
}