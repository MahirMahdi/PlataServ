import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/POS/Sidebar";
import OrderCard from "../../components/POS/OrderCard";
import { useEffect, useState } from "react";
import { uid } from "uid";
import usePOS from "../../hooks/usePOS";
import axios from '../../api/api'
import Radio from "../../components/POS/Radio";


const mainBox = {position:'absolute',display:'grid',justifyContent:'center',width:{xs:'85vw',sm:'90vw',md:'82.5vw',lg:'85vw'},minHeight:'100vh',right:'0',backgroundColor:'#e4e9eb'}
const headerBox = {width:{xs:'17rem',sm:'32.5rem',md:'35rem',lg:'40rem'},height:{xs:'5rem',sm:'6rem',md:'7.5rem'},borderRadius:'10px',backgroundColor:'#C84B31',display:'grid',justifyContent:'center',placeItems:'center',color:'white'}
const itemsBox = {width:{xs:'17rem',sm:'32.5rem',md:'35rem',lg:'40rem'},borderRadius:'10px',backgroundColor:'white',display:'grid',justifyContent:'center',placeItems:'center',padding:{xs:'.35rem 0', sm:'1.25rem 0', md:'1.25rem 0',margin:'auto',rowGap:'1rem'}}
const orderInfoBox = {width:{xs:'17rem',sm:'32.5rem',md:'35rem',lg:'40rem'},borderRadius:'10px',backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:{xs:'center',sm:'flex-start'},padding:{xs:'.35rem', sm:'1.25rem', md:'1.25rem 1.75rem',margin:'auto',rowGap:'1rem'}}
const calculationBox = {border:'1px solid #e4e9eb',padding:{xs:'1.25rem .25rem',md:'.5rem'},paddingRight:'0',display:'grid',rowGap:'1rem',width:'15rem'}
const calculationBoxItem = {display:'flex',justifyContent:'space-between'}
const customerInfoBox = {border:'1px solid #e4e9eb',padding:{xs:'1.25rem .25rem',md:'.5rem'},paddingRight:'0',display:'grid',rowGap:'1rem',width:'15rem'}
const radioBox = {width:'6rem',marginTop:'1rem', display:'flex', rowGap:'1.25rem',flexDirection:'column',fontFamily: "'PT Sans', sans-serif",fontSize:'1.1rem',alignItems:'center',justifyContent:'center'}

const orderId = uid(5)

export default function Order(){

    const {remove, add, updateProductDetails} = usePOS();
    const [payment, setPayment] = useState();
    const [point, setPoint] = useState();
    const [destination, setDestination] = useState();
    const [name, setName] = useState()
    const [subTotal, setSubtotal] = useState(JSON.parse(window.localStorage.getItem("subtotal")))
    const [orders, setOrders] = useState(JSON.parse(window.localStorage.getItem("orders")))
    const [ingredients, setIngredients] = useState()
    const [orderProducts, setOrderProducts] = useState([])
    const [dashboardDetails, setDashboardDetails] = useState(null)
    const [productDetails, setProductDetails] = useState([])

    const paymentMethod = {values:['Cash', 'Card'], method:function handlePayment(e){
        setPayment(e.target.value)
    }}

    const orderPoint = {values:['Counter', 'Uber eats', 'Mobile'], method:function handleOrderPoint(e){
        setPoint(e.target.value)
    }}

    const destinations = {values:['Eat In', 'Delivery', 'Take Out'], method:function handleDestination(e){
        setDestination(e.target.value);
    }}

    function handleName(e){
        setName(e.target.value)
    }

    function handleProducts(type, product_id, product,price){
        // product increament or decreament based on type and calculate subtotal
        type === 'add'? add(product_id, product,price) : remove(product_id, product,price)
        setOrders(JSON.parse(localStorage.getItem("orders")))
        setSubtotal(JSON.parse(localStorage.getItem("subtotal")))
    }

    async function getOrderProducts(){
        try {
            const response = await axios.post('/orderProducts',{orders: orders})
            const products = response.data.products
            // updateProductDetails(products, orders, productDetails, setProductDetails)
            setOrderProducts(products)
        } catch (error) {
            console.log(error);
        }
    }

    async function confirmOrder(){
        // save dashboard details in local storage for persistent details
        // update inventory
        // remove order from local storage
        // start timer
        const dashboard = JSON.parse(localStorage.getItem("dashboard"))
        localStorage.setItem("dashboard", JSON.stringify(!dashboard? [dashboardDetails] : [...dashboard, dashboardDetails]))
    }

    useEffect(()=>{
        getOrderProducts()
    },[orders])

    useEffect(()=>{
        setDashboardDetails({
            customerName: name,
            productDetails: orders,
            totalPrice: ((.1 * subTotal) + subTotal).toFixed(2),
            timestamp: Date.now(),
            orderId: orderId,
            paymentMethod: payment,
            orderPoint: point,
            destination: destination
        })

        console.log(orders);
    },[orders,name,payment,point,destination])
    return(
        <Box sx={{width:'100vw',display:'flex'}}>
            <Sidebar/>
            <Box sx={mainBox}>
                <Box sx={{marginTop:'1.5rem'}}>
                    <Typography sx={{paddingTop:'1rem'}} variant="h4">Order</Typography>
                    <Box sx={headerBox}>
                        <Typography variant="h5">Bill</Typography>
                    </Box>
                    <Box sx={itemsBox}>
                        {orders? orderProducts.map((product,i)=>(
                            <OrderCard key={i} product={product} handleAdd={()=>{handleProducts('add',product.product_id, product.price)}} handleRemove={()=>{handleProducts('remove',product.product_id, product.price)}} count={orders[product.product_id]}/>
                            
                        )):<Typography variant="h5">Empty</Typography>}
                    </Box>
                    <Box sx={orderInfoBox}>
                        <Box sx={calculationBox}>
                            <Box sx={calculationBoxItem}>
                                <Typography>Subtotal</Typography>
                                <Typography>${subTotal}</Typography>
                            </Box>
                            <Box sx={calculationBoxItem}>
                                <Typography>Tax</Typography>
                                <Typography>${(.1 * subTotal).toFixed(2)}</Typography>
                            </Box>
                            <Box sx={calculationBoxItem}>
                                <Typography>Total</Typography>
                                <Typography>${((.1 * subTotal) + subTotal).toFixed(2)}</Typography>
                            </Box>
                        </Box>
                        <Box sx={customerInfoBox}>
                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                <Typography>Order no.</Typography>
                                <Typography>#{orderId}</Typography>
                            </Box>
                            <Box sx={{display:'flex',width:'14.25rem'}}>
                                <Typography>Customer Name</Typography>
                                <input onChange={handleName} required={true} style={{borderRadius:'5px',border:'1px solid #e4e9eb',outline:'none'}} type="text" placeholder="Customer Name" />
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight:'600'}}>Payment Method:</Typography>
                                <Box sx={radioBox}>
                                    {paymentMethod.values.map((value,i)=>(
                                        <Radio key={i} id={value} value={value} method={paymentMethod.method} isSelected={payment === value}/>
                                    ))}
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight:'600'}}>Order Point:</Typography>
                                <Box sx={radioBox}>
                                    {orderPoint.values.map((value,i)=>(
                                        <Radio  key={i} id={value} value={value} method={orderPoint.method} isSelected={point === value}/>
                                    ))}
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight:'600'}}>Destination:</Typography>
                                <Box sx={radioBox}>
                                    {destinations.values.map((value,i)=>(
                                        <Radio  key={i} id={value} value={value} method={destinations.method} isSelected={destination === value}/>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{width:{xs:'16.3rem',sm:'30rem',md:'31.5rem',lg:'36.5rem'}, margin:'.5rem 0',display:'grid',placeItems:'center'}}>
                            <button className="btn confirm-order" onClick={confirmOrder}>Confirm Order</button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
