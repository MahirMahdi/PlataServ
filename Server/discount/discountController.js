import Product from "../products/product.js";
import Inventory from '../inventory/inventory.js';
import Alert from '../alert/alert.js';

export default async function applyDiscount(req,res){
    try {

        const {_id,items} = req.body;
        const items_name = items.map(item => item.name);
        const items_id = items.map(item => item._id);
        const discount_date= items.length > 1? items.reduce((acc,curr)=> acc.expiry_date > curr.expiry_date? acc.expiry_date : curr.expiry_date) : items[0].expiry_date;

        await Product.updateMany(
            {ingredients:{$elemMatch:{name: {$in : items_name}}}},
            {$set: {discount_period: discount_date}}
        )

        await Inventory.updateMany(
            {_id: {$in : items_id}},
            {$set: {alert_status: 'checked'}}
        );

        await Alert.deleteOne({_id: _id});

    } catch (error) {
        
    }
}