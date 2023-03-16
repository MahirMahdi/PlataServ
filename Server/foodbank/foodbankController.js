import Alert from '../alert/alert.js';
import Inventory from '../inventory/inventory.js';
import FoodBank from './foodbank.js';

export default async function createFoodBankDonation(req,res){
    try {
        const {_id, items} = req.body;
        const items_id = items.map(item => item._id);

        await FoodBank.create({items:items});

        await Inventory.deleteMany({_id:{$in: items_id}});

        await Alert.deleteOne({_id: _id});
    } catch (error) {
        
    }
}