import { Box, Card, CardContent, Typography } from "@mui/material"
import { alertCardStyle, contentNameStyle } from "../../mui-styles/NotificationsStyles"

export default function AlertCard({type, items, donateFoodBank, applyDiscount, parOrder, customOrder, alertDate}){


    const diff_in_ms = new Date().getTime() - new Date(alertDate).getTime()
    const diff_in_days = Math.floor(diff_in_ms / 86400000);

    const expiry = {
        message: diff_in_days > 0? `Expiring in ${diff_in_days} days!`: 'Expiring in less than a day!',
        buttons:[
            {
                name: 'Apply Discount',
                className: 'alert1',
                method: applyDiscount
            },
            {
                name: 'Donate Food Bank',
                className: 'alert2',
                method: donateFoodBank
            }
        ]
    }

    const count = {
        message: 'New Supplies needed!',
        buttons:[
            {
                name: 'PAR Order',
                className: 'alert1',
                method: parOrder
            },
            {
                name: 'Custom Order',
                className: 'alert2',
                method: customOrder
            }
        ]

    }
    return(
        <Card sx={alertCardStyle}>
            <CardContent sx={{display:'grid',rowGap:'2rem'}}>
                <Typography variant="h6">{type === 'expiry'? expiry.message : count.message}</Typography>
                <Box>
                    <Typography variant="body1">Name - <span style={contentNameStyle}>Total Count(Remaining)</span></Typography>
                    {items && items.map((item,i) => (
                        <Typography key={i} variant="body1">{item.name} - <span style={contentNameStyle}>{item.total_units}</span></Typography>
                    ))}
                </Box>
            </CardContent>
            <CardContent sx={{display:'grid',rowGap:'1rem',justifyItems:'center'}}>
                {type === 'expiry'?
                    expiry.buttons.map((button,i) => (
                        <button onClick={button.method} key={i} className={`btn ${button.className}`}>{button.name}</button>
                    ))
                    
                    :count.buttons.map((button,i)=> (
                        <button onClick={button.method} key={i} className={`btn ${button.className}`}>{button.name}</button>
                    ))
                }
            </CardContent>
        </Card>
    )
}