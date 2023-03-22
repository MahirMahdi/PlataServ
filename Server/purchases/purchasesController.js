import Purchases from "./purchases.js";
import Alert from "../alert/alert.js";

export default async function createPurchase(req,res){
    try {
        const type = req.params.type
        const supplies = req.body;
        const supplies_restructured = supplies.map(supply => {
          const {expiry_period, ...rest} = supply;

          const currentDate = new Date();
          const expiry_date = new Date(currentDate.setDate(currentDate.getDate() + expiry_period));

          const newSupply = Object.assign({expiry_date: expiry_date}, rest);

          return newSupply;
        })

        if (type === 'alert') await Alert.deleteOne({alert_tag: 'count', name: supplies[0].name});

        await Purchases.insertMany(supplies_restructured);
        res.status(200).json({message: 'Purchase details saved!'});

    } catch (error) {
        console.log(error);
    }
};