import Alert from "./alert.js";

export default async function sendAlert(type,items){
    try {
        const alert = {
            alert_tag: type,
            items: items
        }
        await Alert.create(alert)
        
    } catch (error) {
        console.log(error);
    }
}