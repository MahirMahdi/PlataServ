import { Box, Card, CardContent, Typography } from "@mui/material"
import Sidebar from "../components/Shared/Sidebar"
import { headerBoxStyle, itemsBoxStyle, mainBoxStyle } from "../mui-styles/SharedStyles"
import AlertCard from "../components/Notifications/AlertCard"

export default function Notifications(){

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
                        <AlertCard type={'expiry'}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}