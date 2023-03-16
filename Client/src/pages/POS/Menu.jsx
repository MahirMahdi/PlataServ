import { useState, useEffect } from 'react';
import MenuCard from '../../components/POS/Menu/MenuCard';
import Sidebar from '../../components/Shared/Sidebar';
import Tabs from '../../components/POS/Menu/Tabs';
import { Categories } from '../../data/data';
import { Box, Grid, Typography } from '@mui/material';
import usePOS from '../../hooks/usePOS';
import Loading from '../../components/Shared/Loading';
import axios from '../../api/api';
import { mainBoxStyle } from '../../mui-styles/SharedStyles';
import { productsBoxStyle } from '../../mui-styles/POS/Menustyles';
import Alert from '../../components/Shared/Alert'

export default function Menu(){

    const [category, setCategory] = useState('Burger')
    const [open, setOpen] = useState(false)
    const [allProducts, setAllProducts] = useState([])
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
    },[])

    return(
        <>
        {allProducts? 
            <Box sx={{width:'100vw',display:'flex'}}>
                <Sidebar/>
                <Box sx={mainBoxStyle}>
                    <Typography sx={{paddingTop:'1rem'}} variant="h5">Categories</Typography>
                    <Tabs handleClick={handleCategory} tab_state={category} categories={Categories}/>
                    <Alert open={open} setOpen={setOpen} error={null} success={'Added to order!'}/>
                    <Typography sx={{padding:'1.5rem 0'}} variant="h5">Menu</Typography>
                    <Box sx={productsBoxStyle}>
                        <Grid container spacing={4}>
                            {allProducts.filter((product)=> product.type === category.toLowerCase()).map((data,index) => (
                                <MenuCard key={index} handleOrder={()=>{ add(data.product_id, data.price); setOpen(true)}} product={data}/>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box> :
            <Loading/>
            }
        </>
        )
    }