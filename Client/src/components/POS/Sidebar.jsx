import plataserv from '../../assets/plataserv.png';
import { Divider, CardMedia, Box, Link, Typography } from "@mui/material";
import order from '../../assets/order.png';
import menu from '../../assets/menu.png';
import dashboard from '../../assets/dashboard.png';
import admin from '../../assets/admin.png';
import { memo } from 'react';


//style
const sidebarBox = {width:{xs:'15vw',sm:'10vw',md:'17.5vw',lg:'15vw'},height:'100vh',backgroundColor:'#182747',position:'fixed',borderTopRightRadius:'7.5px',borderBottomRightRadius:'7.5px'}
const title_logo = {display:'flex',alignItems:'center',justifyContent:'space-evenly',padding:'1rem 0'}
const logo = {width:{xs:'2.5rem',sm:'2.9rem',lg:'3.25rem'},cursor:'pointer'}
const title = {fontFamily: "'Merriweather Sans', sans-serif",color:'white',fontSize:{md:'1rem',lg:'1.5rem'},cursor:'pointer',width:'max-content'}
const itemName = {fontFamily:"'Roboto', sans-serif",color:'white',fontSize:{md:'.9rem',lg:'1.25rem'},cursor:'pointer',width:'max-content'}
const sidebarItem = {width:{xs:'15vw',sm:'10vw',md:'17.5vw',lg:'15vw'},'&:hover':{backgroundColor: '#C84B31',transition: 'ease-in-out 350ms'},display:'flex',alignItems:'center',justifyContent:{xs:'center',md:'flex-start'},padding:{xs:'1.25rem 0',md:'1.5rem 1.25rem'},columnGap:{md:'1rem'},textDecoration:'none'}
const ItemLogo = {width:{xs:'2rem',sm:'2.25rem', md:'2.75rem'}}

function Sidebar(){
    return(
        <Box sx={sidebarBox}>
            <Box sx={title_logo}>
                <CardMedia component="img" sx={logo} image={plataserv} alt='logo'/>
                <Typography sx={title} className='title'>PlataServ</Typography>
            </Box>
            <Divider sx={{backgroundColor:'white'}}/>
            <Box sx={{marginTop:'1.5rem'}}>
                <Link href='/' sx={sidebarItem}>
                    <CardMedia component="img" sx={ItemLogo} image={menu} alt='menu'/>
                    <Typography sx={itemName} className='item-name'>Menu</Typography>
                    </Link>
                <Link href='/order' sx={sidebarItem}>
                    <CardMedia component="img" sx={ItemLogo} image={order} alt='order'/>
                    <Typography sx={itemName} className='item-name'>Order</Typography>
                </Link>
                <Link href='/dashboard' sx={sidebarItem}>
                    <CardMedia component="img" sx={{width:{xs:'1.75rem',sm:'2rem',md:'2.25rem'}}} image={dashboard} alt='dashboard'/>
                    <Typography sx={itemName} className='item-name'>Dashboard</Typography>
                </Link>
                <Link href='/admin' sx={sidebarItem}>
                    <CardMedia component="img" sx={ItemLogo} image={admin} alt='admin'/>
                    <Typography sx={itemName} className='item-name'>Admin</Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default memo(Sidebar)