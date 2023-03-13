import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import Sidebar from "../components/Shared/Sidebar"
import { headerBoxStyle, itemsBoxStyle, mainBoxStyle } from "../mui-styles/SharedStyles"
import { dashboardCardStyle, contentNameStyle } from "../mui-styles/POS/DashboardStyles"
import { alertCardStyle } from "../mui-styles/NotificationsStyles"

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
                        <Card sx={alertCardStyle}>
                            <CardContent sx={{display:'grid',rowGap:'2rem'}}>
                                <Typography variant="h6">Expiring in 3 days!</Typography>
                                <Box>
                                    <Typography variant="body1">Name - <span style={contentNameStyle}>Remaining</span></Typography>
                                    <Typography variant="body1">Mustard - <span style={contentNameStyle}>10</span></Typography>
                                </Box>
                            </CardContent>
                            <CardContent sx={{display:'grid',rowGap:'1rem'}}>
                                <button className="btn discount">Apply Discount</button>
                                <button className="btn food-bank">Donate Food Bank</button>
                                <button className="btn leave">Leave it</button>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}