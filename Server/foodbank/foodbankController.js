import Alert from '../alert/alert.js';
import Inventory from '../inventory/inventory.js';
import FoodBank from './foodbank.js';

export default async function createFoodBankDonation(req,res){
    try {
        const {_id, item} = req.body;

        await FoodBank.insertMany(item);

        await Inventory.deleteOne({_id: item._id});

        await Alert.deleteOne({_id: _id});
    } catch (error) {
        
    }
}