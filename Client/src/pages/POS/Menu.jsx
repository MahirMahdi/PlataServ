import { useState, useEffect } from 'react';
import MenuCard from '../../components/POS/Menu/MenuCard';
import Tabs from '../../components/POS/Menu/Tabs';
import { Categories } from '../../data/data';
import { Box, Grid, Typography } from '@mui/material';
import usePOS from '../../hooks/usePOS';
import Loading from '../../components/Shared/Loading';
import axios from '../../api/api';
import { mainBoxStyle } from '../../mui-styles/SharedStyles';
import { productsBoxStyle } from '../../mui-styles/POS/Menustyles';
import Alert from '../../components/Shared/Alert'
import useAuth from '../../hooks/useAuth';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Menu(){

    const [category, setCategory] = useState('Burger')
    const [open, setOpen] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [user, setUser] = useAuth()
    const {add} = usePOS()

    const handleCategory = (value) => { 
        setCategory(value)
    }

    const getAllProducts = async() => {
        const response = await axios.get('/products')
        setAllProducts(response.data.products)
    }

    useEffect(()=>{
        getAllProducts()
        console.log(user);
    },[])

    return(
        <>
        <Sidebar/>
        {allProducts? 
                <Box sx={mainBoxStyle}>
                    <Typography variant="h5">Categories</Typography>
                    <Tabs handleClick={handleCategory} tab_state={category} categories={Categories}/>
                    <Alert open={open} setOpen={setOpen} error={null} success={'Added to order!'}/>
                    <Typography sx={{padding:'1.5rem 0'}} variant="h5">Menu</Typography>
                    <Box sx={productsBoxStyle}>
                        <Grid container spacing={4}>
                            {allProducts.filter((product)=> product.type === category.toLowerCase()).map((data,index) => (
                                <MenuCard key={index} handleOrder={()=>{ add(data.product_id, data.discount_period, data.price); setOpen(true)}} product={data}/>
                            ))}
                        </Grid>
                    </Box>
                </Box> :
            <Loading/>
            }
        </>
        )
    }