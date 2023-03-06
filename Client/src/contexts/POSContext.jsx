import { createContext } from "react";
import axios from '../api/api';

export const POSContext = createContext();

export default function POSProvider({children}){

    // to avoid repetition these functions are passed throught this context.

    function addToOrder(id, price){

        // product_id is set as orders property because data structure is much simpler this way. 
        // If make each order an object and insert all objects in an array, the data structure becomes very complex and it's harder to get and send data.

        const orders = JSON.parse(localStorage.getItem("orders"))

        localStorage.setItem("orders",JSON.stringify(!orders? {[id] : 1} : orders[id]? {...orders, [id]: orders[id] + 1}: {...orders, [id]: 1} ))

        calculateSubTotal('add',price)
    }

    function removeOrder(id){

        const order = JSON.parse(localStorage.getItem("orders"))

        delete order[id];

        localStorage.setItem("orders",JSON.stringify(order))

        
    }

    function removeFromOrder(id,price){

        const orders = JSON.parse(localStorage.getItem("orders"))

        if(Object.keys(JSON.parse(localStorage.getItem("orders"))))

        orders[id] === 1? removeOrder(id): localStorage.setItem("orders",JSON.stringify({...orders, [id]: orders[id] - 1}))

        if(Object.keys(JSON.parse(localStorage.getItem("orders"))).length === 0) localStorage.removeItem("orders")

        calculateSubTotal('remove',price)
    }

    function calculateSubTotal(type,price){

        let prevValue = parseFloat(localStorage.getItem("subtotal"))

        type === 'add'?
        localStorage.setItem("subtotal", prevValue? (prevValue + price).toFixed(2) : price):
        localStorage.setItem("subtotal",(prevValue - price).toFixed(2))
    }

    function updateProductDetails(arr,orders,productDetails,setProductDetails){
        arr?.map(product => {
            const {name, product_id, ...rest} = product
            const obj = {name: name, product_id: product_id, quantity: orders[product_id]}

            productDetails.some(detail => detail.product_id === obj.product_id)? setProductDetails(prev=> prev.filter(value => value.product_id !== obj.product_id).concat([obj])) : setProductDetails(prev => [...prev, obj])
        })
    }

    return(
        <POSContext.Provider value={{add: addToOrder,remove: removeFromOrder, updateProductDetails: updateProductDetails}}>
            {children}
        </POSContext.Provider>
    )
}