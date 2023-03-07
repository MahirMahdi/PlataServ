import { Typography, Card, CardContent, Box} from "@mui/material";
import { dashboardCardContentStyle, dashboardCardStyle } from "../../mui-styles/POS/DashboardStyles";

function timer(startTime,i){
    // const display = ;
    let intervalId;
    
    startTime? intervalId = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000)
        document.getElementById(`display${i}`).innerText = `${elapsedTime} seconds`;
      }, 1000): document.getElementById(`display${i}`).innerText = '0 second';
}

export default function DashboardCard({i, name, orderId, totalPrice, paymentMethod, orderPoint, destination, products, timestamp}){
    return(
        <Card sx={dashboardCardStyle}>
            <CardContent>
                <Typography variant="body1">Customer Name:{name}</Typography>
                <Typography variant="body1">Order no.: {orderId}</Typography>
                <Typography variant="body1">Total Price: {totalPrice}</Typography>
                <Typography variant="body1">Payment Method: {paymentMethod}</Typography>
                <Typography variant="body1">Order Point: {orderPoint}</Typography>
                <Typography variant="body1">Destination: {destination}</Typography>
                {/* <Box sx={{display:'flex', rowGap:'1rem'}}>
                    {products.map(product => (
                        <Typography variant="body1">{product.name} x{product.quantity}</Typography>
                    ))}
                </Box> */}
            </CardContent>
            <CardContent sx={dashboardCardContentStyle}>
                <p style={{fontWeight:'bold'}}>Timer</p>
                <p id={`display${i}`}>{timer(timestamp,i)}</p>
                <button className="btn done">Done</button>
            </CardContent> 
        </Card>
    )
}