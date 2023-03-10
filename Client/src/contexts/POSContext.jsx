import { createContext } from "react";

export const POSContext = createContext();

export default function POSProvider({children}){

    // to avoid repetition these functions are passed throught this context.

    const addToOrder = (id, price) => {

        // product_id is set as orders property because data structure is much simpler this way. 
        // If each order is an object and all the objects are in an array, the data structure becomes very complex and it's harder to query data.

        const orders = JSON.parse(localStorage.getItem("orders"))
        
        let order

        if (!orders) order = {[id] : 1}

        else if(orders[id]) order = {...orders, [id]: orders[id] + 1}

        else order = {...orders, [id]: 1}

        localStorage.setItem("orders", JSON.stringify(order))

        calculateSubTotal('add',price)
    }

    const removeOrder = (id) => {

        const order = JSON.parse(localStorage.getItem("orders"))

        delete order[id];

        localStorage.setItem("orders",JSON.stringify(order))

        
    }

    const removeFromOrder = (id,price) => {

        const orders = JSON.parse(localStorage.getItem("orders"))

        if (orders[id] === 1) removeOrder(id)
        
        else localStorage.setItem("orders",JSON.stringify({...orders, [id]: orders[id] - 1}))

        if (!Object.keys(JSON.parse(localStorage.getItem("orders"))).lengtconst) localStorage.removeItem("orders")

        calculateSubTotal('remove',price)
    }

    const calculateSubTotal = (type,price) => {

        const prevValue = parseFloat(localStorage.getItem("subtotal"))

        let newValue 

        if (type === 'add' && prevValue) newValue = (prevValue + price).toFixed(2)

        else if (type === 'add' && !prevValue) newValue = price
        
        else newValue = (prevValue - price).toFixed(2)

        localStorage.setItem("subtotal", newValue)
    }

    return(
        <POSContext.Provider value={{add: addToOrder,remove: removeFromOrder}}>
            {children}
        </POSContext.Provider>
    )
}