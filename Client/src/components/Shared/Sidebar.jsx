import plataserv from '../../assets/plataserv.png';
import { Divider, CardMedia, Box, Link, Typography } from "@mui/material";
import order from '../../assets/order.png';
import menu from '../../assets/menu.png';
import dashboard from '../../assets/dashboard.png';
import admin from '../../assets/admin.png';
import notification from '../../assets/notifications.png';
import { memo } from 'react';
import { ItemLogoStyle, itemNameStyle, logoStyle, sidebarBoxStyle, sidebarItemStyle, titleLogoStyle, titleStyle } from '../../mui-styles/SharedStyles';


function Sidebar(){

    return(
        <Box sx={sidebarBoxStyle}>
            <Box sx={titleLogoStyle}>
                <CardMedia component="img" sx={logoStyle} image={plataserv} alt='logo'/>
                <Typography sx={titleStyle} className='title'>PlataServ</Typography>
            </Box>
            <Divider sx={{backgroundColor:'white'}}/>
            <Box sx={{marginTop:'1.5rem'}}>
                <Link href='/' sx={sidebarItemStyle}>
                    <CardMedia component="img" sx={ItemLogoStyle} image={menu} alt='menu'/>
                    <Typography sx={itemNameStyle} className='item-name'>Menu</Typography>
                    </Link>
                <Link href='/order' sx={sidebarItemStyle}>
                    <CardMedia component="img" sx={ItemLogoStyle} image={order} alt='order'/>
                    <Typography sx={itemNameStyle} className='item-name'>Order</Typography>
                </Link>
                <Link href='/dashboard' sx={sidebarItemStyle}>
                    <CardMedia component="img" sx={{width:{xs:'1.75rem',sm:'2rem',md:'2.25rem'}}} image={dashboard} alt='dashboard'/>
                    <Typography sx={itemNameStyle} className='item-name'>Dashboard</Typography>
                </Link>
                <Link href='/admin' sx={sidebarItemStyle}>
                    <CardMedia component="img" sx={ItemLogoStyle} image={admin} alt='admin'/>
                    <Typography sx={itemNameStyle} className='item-name'>Admin</Typography>
                </Link>
                <Link href='/notifications' sx={sidebarItemStyle}>
                    <CardMedia component="img" sx={ItemLogoStyle} image={notification} alt='notification'/>
                    <Typography sx={itemNameStyle} className='item-name'>Notifications</Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default memo(Sidebar)