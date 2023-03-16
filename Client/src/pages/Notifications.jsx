import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Shared/Sidebar";
import { headerBoxStyle, itemsBoxStyle, mainBoxStyle } from "../mui-styles/SharedStyles";
import AlertCard from "../components/Notifications/AlertCard";
import axios from "../api/api";
import { useEffect } from "react";
import { useState } from "react";

export default function Notifications(){

    const [alerts, setAlerts] = useState();

    const getAlerts = async() => {
        const response = await axios.get('/alerts');
        setAlerts(response.data.alerts);
    }

    const applyDiscount = async(alert) => {
        const response = await axios.post('/discount',alert);
        console.log(response);
    }

    const donateFoodBank = async(alert) => {
        const response = await axios.post('/foodbank',alert);
    }

    useEffect(()=>{
        getAlerts();
    },[applyDiscount,donateFoodBank])

    return(
        <Box sx={{width:'100vw',display:'flex'}}> 
            <Sidebar/>
            <Box sx={mainBoxStyle}>
                <Box sx={{marginTop:'1.5rem'}}>
                    <Typography sx={{paddingTop:'1rem'}} variant="h4">Notifications</Typography>
                    <Box sx={headerBoxStyle}>
                        <Typography variant="h5">Alerts</Typography>
                    </Box>
                    <Box sx={itemsBoxStyle}>
                        {alerts? 
                            alerts.map(alert => (
                                <AlertCard key={alert._id} type={alert.alert_tag} items={alert.items} alertDate={alert.createdAt} applyDiscount={()=> applyDiscount(alert)} donateFoodBank={()=> donateFoodBank(alert)}/>
                            ))
                            :<Typography variant="h5">Empty</Typography>}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}