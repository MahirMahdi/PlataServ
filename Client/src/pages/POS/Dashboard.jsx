import { Box, Typography } from "@mui/material"
import Sidebar from "../../components/POS/Sidebar"
import DashboardCard from "../../components/POS/DashboardCard"
import { headerBoxStyle, itemsBoxStyle, mainBoxStyle } from "../../mui-styles/SharedStyles"

export default function Dashboard(){

    const dashboardDetails = JSON.parse(localStorage.getItem('dashboard'))

    return(
        <>
            <Box sx={{width:'100vw',display:'flex'}}> 
                <Sidebar/>
                <Box sx={mainBoxStyle}>
                    <Box sx={{marginTop:'1.5rem'}}>
                        <Typography sx={{paddingTop:'1rem'}} variant="h4">Dashboard</Typography>
                        <Box sx={headerBoxStyle}>
                            <Typography variant="h5">Queue</Typography>
                        </Box>
                        <Box sx={itemsBoxStyle}>
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