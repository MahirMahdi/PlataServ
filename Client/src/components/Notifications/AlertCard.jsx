import { Box, Card, CardContent, Typography } from "@mui/material"
import { alertCardStyle, contentNameStyle } from "../../mui-styles/NotificationsStyles"

export default function AlertCard({type, items}){

    const expiry = {
        message: 'Expiring in 3 days!',
        buttons:[
            {
                name: 'Apply Discount',
                className: 'alert1'
            },
            {
                name: 'Donate Food Bank',
                className: 'alert2'
            },
            // {
            //     name: 'Leave it',
            //     className: 'alert3'
            // }
        ]
    }

    const count = {
        message: 'New Supplies needed!',
        buttons:[
            {
                name: 'PAR Order',
                className: 'alert1'
            },
            {
                name: 'Custom Order',
                className: 'alert2'
            }
        ]

    }
    return(
        <Card sx={alertCardStyle}>
            <CardContent sx={{display:'grid',rowGap:'2rem'}}>
                <Typography variant="h6">{type === 'expiry'? expiry.message : count.message}</Typography>
                <Box>
                    <Typography variant="body1">Name - <span style={contentNameStyle}>Total Count(Remaining)</span></Typography>
                    <Typography variant="body1">Mustard - <span style={contentNameStyle}>10</span></Typography>
                </Box>
            </CardContent>
            <CardContent sx={{display:'grid',rowGap:'1rem',justifyItems:'center'}}>
                {type === 'expiry'?
                    expiry.buttons.map(button => (
                        <button className={`btn ${button.className}`}>{button.name}</button>
                    ))
                    
                    :count.buttons.map(button => (
                        <button className={`btn ${button.className}`}>{button.name}</button>
                    ))
                }
            </CardContent>
        </Card>
    )
}