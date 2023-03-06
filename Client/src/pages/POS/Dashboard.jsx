import { Box, Typography } from "@mui/material"
import Sidebar from "../../components/POS/Sidebar"
import DashboardCard from "../../components/POS/DashboardCard"


const mainBox = {position:'absolute',display:'grid',justifyContent:'center',width:{xs:'85vw',sm:'90vw',md:'82.5vw',lg:'85vw'},minHeight:'100vh',right:'0',backgroundColor:'#e4e9eb'}
const headerBox = {width:{xs:'18.5rem',sm:'32.5rem',md:'35rem',lg:'40rem'},height:{xs:'5rem',sm:'6rem',md:'7.5rem'},borderRadius:'10px',backgroundColor:'#C84B31',display:'grid',justifyContent:'center',placeItems:'center',color:'white'}
const itemsBox = {width:{xs:'18.5rem',sm:'32.5rem',md:'35rem',lg:'40rem'},borderRadius:'10px',backgroundColor:'white',display:'grid',justifyContent:'center',placeItems:'center',padding:{xs:'.35rem 0', sm:'1.25rem 0', md:'1.25rem 0',margin:'auto',rowGap:'4rem'}}



export default function Dashboard(){

    const dashboardDetails = JSON.parse(localStorage.getItem('dashboard'))

    return(
        <>
            <Box sx={{width:'100vw',display:'flex'}}> 
                <Sidebar/>
                <Box sx={mainBox}>
                    <Box sx={{marginTop:'1.5rem'}}>
                        <Typography sx={{paddingTop:'1rem'}} variant="h4">Dashboard</Typography>
                        <Box sx={headerBox}>
                            <Typography variant="h5">Queue</Typography>
                        </Box>
                        <Box sx={itemsBox}>
                            {dashboardDetails? dashboardDetails.map((detail,i)=>(
                                <DashboardCard key={i} name={detail.customerName} orderId={detail.orderId}
                                paymentMethod={detail.paymentMethod} orderPoint={detail.orderPoint} destination={detail.destination}
                                 totalPrice={detail.totalPrice} products={detail.products} timestamp={detail.timestamp} i={i}/>
                            )):<Typography variant="h5">Empty</Typography>}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div>
            </div>
        </>
    )
}