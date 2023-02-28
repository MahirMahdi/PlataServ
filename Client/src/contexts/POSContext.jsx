import { createContext, useState } from "react";
import axios from '../api/api';

export const POSContext = createContext();

export default function POSProvider({children}){

    const [orders, setOrders] = useState(JSON.parse(window.localStorage.getItem("orders")))
    const [subTotal, setSubtotal] = useState(JSON.parse(window.localStorage.getItem("subtotal")))

    function addToOrder(id, price){

        window.localStorage.setItem("orders",JSON.stringify(!orders? {[id] : 1} : orders[id]? {...orders, [id]: orders[id] + 1}: {...orders, [id]: 1} ))
       
        setOrders(JSON.parse(window.localStorage.getItem("orders")))

        calculateSubTotal('add',price)
    }

    function removeOrder(id){

        delete orders[id];

        window.localStorage.setItem("orders",JSON.stringify(orders))

        setOrders(JSON.parse(window.localStorage.getItem("orders")))
        
    }

    function removeFromOrder(id,price){

        if(Object.keys(JSON.parse(window.localStorage.getItem("orders"))))

        orders[id] === 1? removeOrder(id): window.localStorage.setItem("orders",JSON.stringify({...orders, [id]: orders[id] - 1}))

        if(Object.keys(JSON.parse(window.localStorage.getItem("orders"))).length === 0) window.localStorage.removeItem("orders")

        setOrders(JSON.parse(window.localStorage.getItem("orders")))

        calculateSubTotal('remove',price)
    }

    function calculateSubTotal(type,price){

        let prevValue = parseFloat(window.localStorage.getItem("subtotal"))

        type === 'add'?
        window.localStorage.setItem("subtotal", prevValue? (prevValue + price).toFixed(2) : price):
        window.localStorage.setItem("subtotal",(prevValue - price).toFixed(2))

        setSubtotal(JSON.parse(window.localStorage.getItem("subtotal")))
    }

    async function updateInventory(data){
        axios.put('/inventory',data)
    }

    return(
        <POSContext.Provider value={{subtotal: [subTotal, setSubtotal], order:[orders,setOrders],add: addToOrder,remove: removeFromOrder, updateInventory: updateInventory}}>
            {children}
        </POSContext.Provider>
    )
}