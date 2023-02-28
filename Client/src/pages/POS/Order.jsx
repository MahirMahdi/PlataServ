import { all_products } from "../../data/data"
import { Box, Typography, RadioGroup, Radio, FormControlLabel, Button } from "@mui/material";
import Sidebar from "../../components/POS/Sidebar";
import OrderCard from "../../components/POS/OrderCard";
import { useEffect, useState } from "react";
import { uid } from "uid";
import usePOS from "../../hooks/usePOS";


const mainBox = {position:'absolute',display:'grid',justifyContent:'center',width:{xs:'85vw',sm:'90vw',md:'82.5vw',lg:'85vw'},minHeight:'100vh',right:'0',backgroundColor:'#e4e9eb'}
const headerBox = {width:{xs:'17rem',sm:'32.5rem',md:'35rem',lg:'40rem'},height:{xs:'5rem',sm:'6rem',md:'7.5rem'},borderRadius:'10px',backgroundColor:'#C84B31',display:'grid',justifyContent:'center',placeItems:'center',color:'white'}
const itemsBox = {width:{xs:'17rem',sm:'32.5rem',md:'35rem',lg:'40rem'},borderRadius:'10px',backgroundColor:'white',display:'grid',justifyContent:'center',placeItems:'center',padding:{xs:'.35rem 0', sm:'1.25rem 0', md:'1.25rem 0',margin:'auto',rowGap:'1rem'}}
const orderInfoBox = {width:{xs:'17rem',sm:'32.5rem',md:'35rem',lg:'40rem'},borderRadius:'10px',backgroundColor:'white',display:'grid',justifyContent:{xs:'center',sm:'flex-start'},placeItems:'center',padding:{xs:'.35rem', sm:'1.25rem', md:'1.25rem 1.75rem',margin:'auto',rowGap:'1rem'}}
const calculationBox = {border:'1px solid #e4e9eb',padding:{xs:'1.25rem .25rem',md:'.5rem'},paddingRight:'0',display:'grid',rowGap:'1rem'}
const calculationBoxItem = {display:'flex',justifyContent:'space-between', width:'15rem'}
const customerInfoBox = {border:'1px solid #e4e9eb',padding:{xs:'1.25rem .25rem',md:'.5rem'},paddingRight:'0',display:'grid',rowGap:'1rem'}

export default function Order(){

    const {remove, order, add, subtotal} = usePOS();
    const [method, setMethod] = useState();
    const [point, setPoint] = useState();
    const [destination, setDestination] = useState();
    const [name, setName] = useState()
    const [subTotal, setSubtotal] = subtotal
    const [orders] = order
    const [orderId, setOrderId] = useState(uid(5))
    const [ingredients, setIngredients] = useState(all_products.map(products=> products.data.filter(product=>  orders?.hasOwnProperty(product.product_id) === true).map((product,i)=>(product.ingredients.map(ingredient=> ingredient)))))

    function handleDestination(e){
        setDestination(e.target.value);
    };

    function handleOrderPoint(e){
        setPoint(e.target.value);
    };

    function handlePayment(e){
        setMethod(e.target.value);
    };


    function handleName(e){
        setName(e.target.value)
    }

    function doNothing(){
        return;
    }

    useEffect(()=>{
        orders? all_products.map(products=> products.data.filter(product=>  orders?.hasOwnProperty(product.product_id) === true).map((product,i)=>{
            product.ingredients.map(ingredient=> {
                ingredients.includes(ingredient) === false? setIngredients(prev=> [...prev, ingredient]) : doNothing()
            })
        })) : doNothing()

        console.log(ingredients);
    },[orders])

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
                        {orders? all_products.map(products=> products.data.filter(product=>  orders?.hasOwnProperty(product.product_id) === true).map((product,i)=>(
                            <OrderCard key={i} product={product} handleAdd={()=>{add(product.product_id, product.price)}} handleRemove={()=>{remove(product.product_id, product.price)}} count={orders[product.product_id]}/>
                        ))): <Typography variant="h5">Empty</Typography>}
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
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={handlePayment}
                                    sx={{width:'8rem'}}
                                >
                                    <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                                    <FormControlLabel value="card" control={<Radio />} label="Card" />
                                </RadioGroup>
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight:'600'}}>Order Point:</Typography>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={handleOrderPoint}
                                    sx={{width:'8rem'}}
                                >
                                    <FormControlLabel value="cash" control={<Radio />} label="Counter" />
                                    <FormControlLabel value="card" control={<Radio />} label="Uber eats" />
                                    <FormControlLabel value="mobile" control={<Radio />} label="Mobile" />
                                </RadioGroup>
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight:'600'}}>Destination:</Typography>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={handleDestination}
                                    sx={{width:'8rem'}}
                                >
                                    <FormControlLabel value="cash" control={<Radio />} label="Delivery" />
                                    <FormControlLabel value="card" control={<Radio />} label="Take Out" />
                                    <FormControlLabel value="mobile" control={<Radio />} label="Eat In" />
                                </RadioGroup>
                            </Box>
                        </Box>
                        <Button disabled={method && name && point && destination? false : true} variant="contained" sx={{width:'10rem',marginBottom:{xs:'.75rem',sm:'0'},backgroundColor:'#182747'}}>Confirm Order</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
