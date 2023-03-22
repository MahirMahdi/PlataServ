import plataserv from '../../assets/plataserv.png';
import { Divider, CardMedia, Box, Link, Typography } from "@mui/material";
import order from '../../assets/order.png';
import menu from '../../assets/menu.png';
import dashboard from '../../assets/dashboard.png';
import admin from '../../assets/admin.png';
import notification from '../../assets/notifications.png';
import { memo } from 'react';
import useAuth from '../../hooks/useAuth';
import { ItemLogoStyle, itemNameStyle, logoStyle, sidebarBoxStyle, sidebarItemStyle, titleLogoStyle, titleStyle } from '../../mui-styles/SharedStyles';


// function Sidebar(){

//     const [user] = useAuth()
//     const role = user.user.user_metadata.role

//     return(
//         <Box sx={sidebarBoxStyle}>
//             <Box sx={titleLogoStyle}>
//                 <CardMedia component="img" sx={logoStyle} image={plataserv} alt='logo'/>
//                 <Typography sx={titleStyle} className='title'>PlataServ</Typography>
//             </Box>
//             <Divider sx={{backgroundColor:'white'}}/>
//                 {['Cashier'].includes(role) &&
//                     <Box sx={{marginTop:'1.5rem'}}>
//                         <Link href='/menu' sx={sidebarItemStyle}>
//                             <CardMedia component="img" sx={ItemLogoStyle} image={menu} alt='menu'/>
//                             <Typography sx={itemNameStyle} className='item-name'>Menu</Typography>
//                         </Link>
//                         <Link href='/order' sx={sidebarItemStyle}>
//                             <CardMedia component="img" sx={ItemLogoStyle} image={order} alt='order'/>
//                             <Typography sx={itemNameStyle} className='item-name'>Order</Typography>
//                         </Link>
//                         <Link href='/dashboard' sx={sidebarItemStyle}>
//                             <CardMedia component="img" sx={{width:{xs:'1.75rem',sm:'2rem',md:'2.25rem'}}} image={dashboard} alt='dashboard'/>
//                             <Typography sx={itemNameStyle} className='item-name'>Dashboard</Typography>
//                         </Link>
//                     </Box>
//                 }
//                 {['Manager'].includes(role) &&
//                     <Box sx={{marginTop:'1.5rem'}}>
//                         <Link href='/admin' sx={sidebarItemStyle}>
//                             <CardMedia component="img" sx={ItemLogoStyle} image={admin} alt='admin'/>
//                             <Typography sx={itemNameStyle} className='item-name'>Admin</Typography>
//                         </Link>
//                         <Link href='/notifications' sx={sidebarItemStyle}>
//                             <CardMedia component="img" sx={ItemLogoStyle} image={notification} alt='notification'/>
//                             <Typography sx={itemNameStyle} className='item-name'>Notifications</Typography>
//                         </Link>
//                     </Box>
//                 }

//                 {['Supervisor'].includes(role) &&
//                     <Box sx={{marginTop:'1.5rem'}}>
//                         <Link href='/admin' sx={sidebarItemStyle}>
//                             <CardMedia component="img" sx={ItemLogoStyle} image={admin} alt='admin'/>
//                             <Typography sx={itemNameStyle} className='item-name'>Admin</Typography>
//                         </Link>
//                         <Link href='/notifications' sx={sidebarItemStyle}>
//                             <CardMedia component="img" sx={ItemLogoStyle} image={notification} alt='notification'/>
//                             <Typography sx={itemNameStyle} className='item-name'>Notifications</Typography>
//                         </Link>
//                     </Box>
//                 }
//         </Box>
//     )
// }

// export default memo(Sidebar)

import * as React from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NewItem from '../jj';

const drawerWidth = {xs:'15vw',sm:'10vw',md:'17.5vw',lg:'15vw'};

export default function Sidebar() {
        const [user] = useAuth()
    const role = user.user.user_metadata.role
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{backgroundColor:"#00171f",height:'5rem',display:'flex',justifyContent:'center', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <CardMedia component="img" image={plataserv} sx={logoStyle}/>
          <Typography variant="h6" noWrap component="div">
            PlataServ
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        PaperProps={{
            sx: {
              backgroundColor: "#00171f",
              color: "red",
            }
          }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            {['Cashier'].includes(role) &&
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
                        <CardMedia component="img" sx={ItemLogoStyle} image={dashboard} alt='dashboard'/>
                        <Typography sx={itemNameStyle} className='item-name'>Dashboard</Typography>
                    </Link>
                    <NewItem/>
                </Box>
            }
            {['Manager'].includes(role) &&
                <Box sx={{marginTop:'1.5rem'}}>
                    <Link href='/admin' sx={sidebarItemStyle}>
                        <CardMedia component="img" sx={ItemLogoStyle} image={admin} alt='admin'/>
                        <Typography sx={itemNameStyle} className='item-name'>Admin</Typography>
                    </Link>
                    <Link href='/notifications' sx={sidebarItemStyle}>
                        <CardMedia component="img" sx={ItemLogoStyle} image={notification} alt='notification'/>
                        <Typography sx={itemNameStyle} className='item-name'>Notifications</Typography>
                    </Link>
                </Box>
            }

            {['Supervisor'].includes(role) &&
                <Box sx={{marginTop:'1.5rem'}}>
                    <Link href='/admin' sx={sidebarItemStyle}>
                        <CardMedia component="img" sx={ItemLogoStyle} image={admin} alt='admin'/>
                        <Typography sx={itemNameStyle} className='item-name'>Admin</Typography>
                    </Link>
                    <Link href='/notifications' sx={sidebarItemStyle}>
                        <CardMedia component="img" sx={ItemLogoStyle} image={notification} alt='notification'/>
                        <Typography sx={itemNameStyle} className='item-name'>Notifications</Typography>
                    </Link>
                </Box>
            }
        </Box>
      </Drawer>
    </Box>
  );
}

