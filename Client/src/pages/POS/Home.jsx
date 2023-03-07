import { useState, useEffect } from 'react';
import MenuCard from '../../components/POS/MenuCard';
import Sidebar from '../../components/POS/Sidebar';
import Tabs from '../../components/POS/Tabs';
import { Categories } from '../../data/data';
import { Box, Grid, Typography, Alert, Snackbar } from '@mui/material';
import usePOS from '../../hooks/usePOS';
import Loading from '../../components/POS/Loading';
import axios from '../../api/api';
import { mainBoxStyle } from '../../mui-styles/SharedStyles';
import { productsBoxStyle } from '../../mui-styles/POS/HomeStyles';

export default function Home(){

    const [category, setCategory] = useState('Burger')
    const [open, setOpen] = useState(false)
    const [productData, setProductData] = useState(null)
    const {add} = usePOS()

    const handleCategory = (value) => { 
        setCategory(value)
    }

    const getSpecificCategoryProducts = async() => {
        const response = await axios.get(`/product/${category}`)
        setProductData(response.data.products)
    }

    useEffect(()=>{
        getSpecificCategoryProducts()
    },[category])

    return(
        <>
        {productData? 
            <Box sx={{width:'100vw',display:'flex'}}>
                <Sidebar/>
                <Box sx={mainBoxStyle}>
                    <Typography sx={{paddingTop:'1rem'}} variant="h5">Categories</Typography>
                    <Tabs handleClick={handleCategory} tab_state={category} categories={Categories}/>
                    <Snackbar open={open} onClose={()=>{setOpen(false)}}>
                        <Alert severity="success" sx={{ width: '10rem' }}>
                            Added to order!
                        </Alert>
                    </Snackbar>
                    <Typography sx={{padding:'2rem'}} variant="h5">Menu</Typography>
                    <Box sx={productsBoxStyle}>
                        <Grid container spacing={4}>
                            {productData?.map((data,index)=>(
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