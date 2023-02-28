import { useState } from 'react';
import MenuCard from '../../components/POS/MenuCard';
import Sidebar from '../../components/POS/Sidebar';
import Tab from '../../components/POS/Tab';
import '../../css/POS/Home.css';
import { Categories, all_products, defaultProductData } from '../../data/data';
import { Box, Grid, Typography, Alert, Snackbar } from '@mui/material';
import usePOS from '../../hooks/usePOS';
import Loading from '../../components/POS/Loading';
import axios from '../../api/api';

export default function Home(){

    const [category, setCategory] = useState('Burger')
    const [open, setOpen] = useState(false)
    const [productData, setProductData] = useState(defaultProductData)
    const {add} = usePOS()

    async function handleCategory(value){
        setCategory(value)
        const type = value.toLowerCase()
        const data = all_products.filter(product=> product.type === type)[0].data
        setProductData(data)
    }

    async function getProducts(){
        await axios.get('/product',{type: category.toLowerCase()})
    }

    return(
        <>
        {productData? 
            <Box sx={{width:'100vw',display:'flex'}}>
            <Sidebar/>
            <Box sx={{position:'absolute',display:'grid', placeItems:'center',justifyContent:'space-around',width:{xs:'85vw',sm:'90vw',md:'82.5vw',lg:'85vw'},right:'0',backgroundColor:'#e4e9eb'}}>
                <Typography sx={{paddingTop:'1rem'}} variant="h5">Categories</Typography>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:{xs:'17rem',sm:'32.5rem',md:'40rem',lg:'60rem'},height:{xs:'7rem',sm:'9.5rem',md:'11rem'},borderRadius:'10px'}}>
                    {Categories.map((val,index)=>(
                        <Tab key={index} handleClick={()=>{handleCategory(val.name)}} name={val.name} image={val.image} tab_state={category}/>
                    ))}
                </Box>
                <Snackbar open={open} autoHideDuration={400} onClose={()=>{setOpen(false)}}>
                    <Alert severity="success" sx={{ width: '10rem' }}>
                        Added to order!
                    </Alert>
                </Snackbar>
                <Typography sx={{padding:'2rem'}} variant="h5">Menu</Typography>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-around',width:{xs:'17rem',sm:'32.5rem',md:'40rem',lg:'60rem'},borderRadius:'10px',marginBottom:'2.5rem'}}>
                    <Grid container spacing={4}>
                        {productData.map((data,index)=>(
                            <MenuCard key={index} handleOrder={()=>{ add(data.product_id, data.price); setOpen(true)}} product={data}/>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box> :
            <Loading/>
    }</>
    )
}