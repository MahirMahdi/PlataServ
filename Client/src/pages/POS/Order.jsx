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
    const [subTotal, setSubtotal] = useState(JSON.parse(localStorage.getItem("subtotal")))
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")))
    const [productIngredients, setProductIngredients] = useState()
    const [allProducts, setAllProducts] = useState([])
    const [dashboardDetails, setDashboardDetails] = useState(null)
    const [dashboardProducts, setDashboardProducts] = useState()

    // these objects are created for avoiding repetition.
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

    const getAllProducts = async() => {
        const response = await axios.get('/products')
        setAllProducts(response.data.products)
    }

    useEffect(()=>{
        getAllProducts()
    },[orders])

    const dashboardProductsDetails = () => {
        const filteredProducts = allProducts.filter(products => orders?.hasOwnProperty(products.product_id))
        const dashboardProducts = filteredProducts.map(product => {return {...product, ['quantity']: orders[product.product_id]}})
        setDashboardProducts(dashboardProducts.map(product => {
            const {name, type, ...rest} = product
            return {name: name, product_type: type, quantity: orders[product.product_id]}
        }))
    }

    const ingredientsDetails = () => {
        const filteredProducts = allProducts.filter(products => orders?.hasOwnProperty(products.product_id))
        let allingredients = []    
        filteredProducts.map(product => {
            const {ingredients, ...rest} = product;
            ingredients.map(ingredient => {
                const {name, unit_count, ...others} = ingredient
                allingredients.push({name: name, unit_count: unit_count, quantity: orders[product.product_id]})
            })
        })
        setProductIngredients(allingredients)
    }

    useEffect(()=>{
        dashboardProductsDetails()
        ingredientsDetails()
    },[orders,allProducts])

    const confirmOrder = () => {
        saveDashboardDetails()
        updateInventory()
        removeOrderDetails()
        setOpen(true)
    }

    const saveDashboardDetails = () => {
        //saved to localstorage for persistent details
        const dashboard = JSON.parse(localStorage.getItem("dashboard"))
        localStorage.setItem("dashboard", JSON.stringify(!dashboard? [dashboardDetails] : [...dashboard, dashboardDetails]))
    }

    const updateInventory = async() => {
        await axios.put('/inventory',{ingredients: productIngredients})
    }

    const removeOrderDetails = () => {
        localStorage.removeItem("orders")
        localStorage.removeItem("subtotal")
        setOrders(null)
        setSubtotal(null)
        setPayment(null)
        setPoint(null)
        setDestination(null)
    }

    useEffect(()=>{
        // timestamp is for measuring service of time.
        setDashboardDetails({
            customerName: name,
            details: dashboardProducts,
            total_price: Number(((.1 * subTotal) + subTotal).toFixed(2)),
            timestamp: Date.now(),
            order_id: orderId,
            payment_method: payment,
            order_point: point,
            destination: destination,
            total_quantity: orders && Object.values(orders).reduce((a,b) => {return a + b})
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
                        {orders? allProducts?.filter(products => orders.hasOwnProperty(products.product_id)).map((product,i) => (
                            <OrderCard key={i} product={product} handleAdd={()=>{handleProducts('add',product.product_id, product.price)}} handleRemove={()=>{handleProducts('remove',product.product_id, product.price)}} count={orders[product.product_id]}/>
                        )):<Typography variant="h5">Empty</Typography>}
                    </Box>
                    <Snackbar sx={{ width: '12.5rem', textAlign:'center'}} open={open} onClose={()=>{setOpen(false)}}>
                        <Alert severity="success">
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
