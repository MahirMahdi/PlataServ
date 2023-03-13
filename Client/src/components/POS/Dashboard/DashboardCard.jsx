import { Typography, Card, CardContent, Box} from "@mui/material";
import { dashboardCardContentStyle, dashboardCardStyle, contentStyle, contentNameStyle } from "../../../mui-styles/POS/DashboardStyles";

function DashboardContent({name, value}){
    return(
        <Typography variant="body1" sx={contentStyle}><span style={contentNameStyle}>{name}</span>: {value}</Typography>
    )
}

export default function DashboardCard({id, name, orderId, totalPrice, paymentMethod, orderPoint, destination, products, timestamp, completeOrder}){
    const dashboardDetails = [
    {
        contentName: 'Customer Name',
        contentValue: name
    },
    {
        contentName: 'Order no.',
        contentValue: orderId
    },
    {
        contentName: 'Total Price',
        contentValue: `$${totalPrice}`
    },
    {
        contentName: 'Payment Method',
        contentValue: paymentMethod
    },
    {
        contentName: 'Order Point',
        contentValue: orderPoint
    },
    {
        contentName: 'Destination',
        contentValue: destination
    },
]
   
    function timer(startTime,id){
        let intervalId;
        
        startTime && id?
        intervalId = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000)
            document.getElementById(`${id}`)? 
            document.getElementById(`${id}`).innerText = `${elapsedTime} seconds`
            : null
        }, 1000)
        : null
    }

    return(
        <Card sx={dashboardCardStyle}>
            <CardContent>
                {dashboardDetails.map((detail, i) => (
                    <DashboardContent key={i} name={detail.contentName} value={detail.contentValue}/>
                ))}
                <Typography variant="body1" sx={contentNameStyle}>Ordered Items:</Typography>
                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                    {products.map((product,i) => (
                        <Typography key={i} variant="body1">{product.name} <span style={contentNameStyle}>x{product.quantity}</span></Typography>
                    ))}
                </Box>
            </CardContent>
            <CardContent sx={dashboardCardContentStyle}>
                <p style={{fontWeight:'bold'}}>Timer</p>
                <p id={`${id}`}>{timer(timestamp,id)}</p>
                <button className="btn done" onClick={completeOrder}>Done</button>
            </CardContent> 
        </Card>
    )
}


{/* <Typography variant="body1" sx={typographyStyle}><p style={{fontWeight:'bold'}}>Customer Name</p>:{name}</Typography>
                <Typography variant="body1" sx={typographyStyle}>Order no.: {orderId}</Typography>
                <Typography variant="body1" sx={typographyStyle}>Total Price: {totalPrice}</Typography>
                <Typography variant="body1" sx={typographyStyle}>Payment Method: {paymentMethod}</Typography>
                <Typography variant="body1" sx={typographyStyle}>Order Point: {orderPoint}</Typography>
                <Typography variant="body1" sx={typographyStyle}>Destination: {destination}</Typography> */}