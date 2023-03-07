import { Box, Typography, Alert, Snackbar } from "@mui/material";
import Sidebar from "../../components/POS/Sidebar";
import OrderCard from "../../components/POS/OrderCard";
import { useEffect, useState } from "react";
import { uid } from "uid";
import usePOS from "../../hooks/usePOS";
import axios from '../../api/api'
import Radio from "../../components/POS/Radio";
import { mainBoxStyle, headerBoxStyle, itemsBoxStyle} from "../../mui-styles/SharedStyles";
import { orderInfoBoxStyle, calculationBoxStyle, calculationBoxItemStyle, customerInfoBoxStyle, radioBoxStyle, buttonBoxStyle } from '../../mui-styles/POS/OrderStyles'


const orderId = uid(5)

export default function Order(){
    
    const [open, setOpen] = useState(false)
    const { remove, add } = usePOS();
    const [payment, setPayment] = useState();
    const [point, setPoint] = useState();
    const [destination, setDestination] = useState();
    const [name, setName] = useState()
    const [subTotal, setSubtotal] = useState(JSON.parse(window.localStorage.getItem("subtotal")))
    const [orders, setOrders] = useState(JSON.parse(window.localStorage.getItem("orders")))
    const [ingredients, setIngredients] = useState()
    const [orderProducts, setOrderProducts] = useState([])
    const [dashboardDetails, setDashboardDetails] = useState(null)

    const paymentMethod = {values:['Cash', 'Card'], method:function handlePayment(e){
        setPayment(e.target.value)
    }}

    const orderPoint = {values:['Counter', 'Uber eats', 'Mobile'], method:function handleOrderPoint(e){
        setPoint(e.target.value)
    }}

    const destinations = {values:['Eat In', 'Delivery', 'Take Out'], method:function handleDestination(e){
        setDestination(e.target.value);
    }}

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleProducts = (type, product_id, product,price) => {
        // product increament or decreament based on type and calculate subtotal
        type === 'add'? add(product_id, product,price) : remove(product_id, product,price)
        setOrders(JSON.parse(localStorage.getItem("orders")))
        setSubtotal(JSON.parse(localStorage.getItem("subtotal")))
    }

    const getOrderProductsDetails = async() => {
        try {
            const response = await axios.post('/orderProducts',{orders: orders})
            setIngredients(response.data.ingredientsDetails)
            setOrderProducts(response.data.productsDetails)
        } catch (error) {
            console.log(error);
        }
    }

    const confirmOrder = () => {
        // remove order from local storage
        saveDashboardDetails()
        updateInventory()
        removeOrderDetails()
        setOpen(true)
    }

    const saveDashboardDetails = () => {
        //for persistent details
        const dashboard = JSON.parse(localStorage.getItem("dashboard"))
        localStorage.setItem("dashboard", JSON.stringify(!dashboard? [dashboardDetails] : [...dashboard, dashboardDetails]))
    }

    const updateInventory = async() => {
        const response = await axios.put('/inventory',{ingredients: ingredients})
    }

    const removeOrderDetails = () => {
        localStorage.removeItem("orders")
        localStorage.removeItem("subtotal")
        setOrders(null)
        setSubtotal(null)
    }

    useEffect(()=>{
        getOrderProductsDetails()
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
    },[orders,name,payment,point,destination])

    return(
        <Box sx={{width:'100vw',display:'flex'}}>
            <Sidebar/>
            <Box sx={mainBoxStyle}>
                <Box sx={{marginTop:'1.5rem'}}>
                    <Typography sx={{paddingTop:'1rem'}} variant="h4">Order</Typography>
                    <Box sx={headerBoxStyle}>
                        <Typography variant="h5">Bill</Typography>
                    </Box>
                    <Box sx={itemsBoxStyle}>
                        {orders? orderProducts.map((product,i)=>(
                            <OrderCard key={i} product={product} handleAdd={()=>{handleProducts('add',product.product_id, product.price)}} handleRemove={()=>{handleProducts('remove',product.product_id, product.price)}} count={orders[product.product_id]}/>
                            
                        )):<Typography variant="h5">Empty</Typography>}
                    </Box>
                    <Snackbar open={open} onClose={()=>{setOpen(false)}}>
                        <Alert severity="success" sx={{ width: '10rem' }}>
                            Order confirmed!
                        </Alert>
                    </Snackbar>
                    <Box sx={orderInfoBoxStyle}>
                        <Box sx={calculationBoxStyle}>
                            <Box sx={calculationBoxItemStyle}>
                                <Typography>Subtotal</Typography>
                                <Typography>${subTotal}</Typography>
                            </Box>
                            <Box sx={calculationBoxItemStyle}>
                                <Typography>Tax</Typography>
                                <Typography>${(.1 * subTotal).toFixed(2)}</Typography>
                            </Box>
                            <Box sx={calculationBoxItemStyle}>
                                <Typography>Total</Typography>
                                <Typography>${((.1 * subTotal) + subTotal).toFixed(2)}</Typography>
                            </Box>
                        </Box>
                        <Box sx={customerInfoBoxStyle}>
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
                                <Box sx={radioBoxStyle}>
                                    {paymentMethod.values.map((value,i)=>(
                                        <Radio key={i} id={value} value={value} method={paymentMethod.method} isSelected={payment === value}/>
                                    ))}
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight:'600'}}>Order Point:</Typography>
                                <Box sx={radioBoxStyle}>
                                    {orderPoint.values.map((value,i)=>(
                                        <Radio  key={i} id={value} value={value} method={orderPoint.method} isSelected={point === value}/>
                                    ))}
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight:'600'}}>Destination:</Typography>
                                <Box sx={radioBoxStyle}>
                                    {destinations.values.map((value,i)=>(
                                        <Radio  key={i} id={value} value={value} method={destinations.method} isSelected={destination === value}/>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={buttonBoxStyle}>
                            <button className="btn confirm-order" onClick={confirmOrder}>Confirm Order</button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
