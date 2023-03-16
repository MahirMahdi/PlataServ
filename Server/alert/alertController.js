import Alert from "./alert.js";

export default async function sendAlert(type,ingredients){
    try {
        const alert = {
            alert_tag: type,
            items: ingredients
        };

        const existing_document_items = await Alert.find({
            alert_tag: type, 
            items: {$elemMatch: {name: {$in: ingredients.map(ingredient => ingredient.name)},
            expiry_date: ingredients.map(ingredient => ingredient.expiry_date)}}
        });

        const all_items = existing_document_items.reduce((acc, curr) => {
            return acc.concat(curr.items);
          },[]);

        if(all_items.length === 0) await Alert.create(alert);

        else{ 
            const unmatched_items = ingredients.filter(item => !all_items.some(filterItem => filterItem.name === item.name));
            if(unmatched_items.length !== 0) await Alert.create({alert_tag: type, items: unmatched_items});
        }

    } catch (error) {
        console.log(error);
    }
}

export async function getAlerts(req,res){
    try {
        const alerts = await Alert.find({})
        res.json({alerts:alerts})
    } catch (error) {
        console.log(error);
    }
}