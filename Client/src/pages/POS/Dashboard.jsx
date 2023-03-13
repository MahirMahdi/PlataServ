import { useState } from "react"
import { Box, Typography } from "@mui/material"
import Sidebar from "../../components/Shared/Sidebar"
import DashboardCard from "../../components/POS/Dashboard/DashboardCard"
import { headerBoxStyle, itemsBoxStyle, mainBoxStyle } from "../../mui-styles/SharedStyles"
import axios from '../../api/api'
import Alert from '../../components/Shared/Alert'

export default function Dashboard(){

    const [dashboardDetails, setDashboardDetails] = useState(JSON.parse(localStorage.getItem('dashboard')))
    const [open, setOpen] = useState(false)

    const postOrderDetails = async(order_id) => {
        // these data are needed for sales report
        const orderDetails = dashboardDetails.filter(detail => detail.order_id === order_id)[0]
        const elapsedTime =  Math.round(((Date.now() - orderDetails.timestamp)/1000))

        delete orderDetails.customerName
        delete orderDetails.timestamp

        orderDetails.time = elapsedTime
        const response = await axios.post('/order',{orderDetails: orderDetails})

        if (dashboardDetails.length === 1) localStorage.removeItem('dashboard')

        else localStorage.setItem('dashboard',JSON.stringify(dashboardDetails.filter(detail => detail.order_id !== order_id)))

        setDashboardDetails(JSON.parse(localStorage.getItem('dashboard')))

        setOpen(true)
    }

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
                        <Alert open={open} setOpen={setOpen} error={null} success={'Order completed!'}/>
                        <Box sx={itemsBoxStyle}>
                            {dashboardDetails? dashboardDetails.map((detail,i)=>(
                                <DashboardCard key={i} name={detail.customerName} orderId={detail.order_id}
                                paymentMethod={detail.payment_method} orderPoint={detail.order_point} destination={detail.destination}
                                 totalPrice={detail.total_price} products={detail.details} timestamp={detail.timestamp} completeOrder={()=> postOrderDetails(detail.order_id)} id={detail.order_id || 'none'}/>
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