import AddOn from "./AddOn";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { orderCardStyle, orderCardMediaStyle, orderCardContentStyle, orderCardContentNameBoxStyle, orderCardProductNameStyle, orderCardProductPriceStyle } from "../../../mui-styles/POS/OrderStyles";

export default function OrderCard({product,handleAdd,handleRemove,count}){
    const {name,price,image} = product
    return(
        <Card sx={orderCardStyle}>
            <CardMedia component="img" image={image} sx={orderCardMediaStyle}/>
            <CardContent sx={orderCardContentStyle}>
                <Box sx={orderCardContentNameBoxStyle}>
                    <Typography sx={orderCardProductNameStyle}>{name}</Typography>
                    <AddOn count={count} handleAdd={handleAdd} handleRemove={handleRemove}/>
                </Box>
                <Typography variant="h6" sx={orderCardProductPriceStyle}><sup style={{fontWeight:'bolder'}}>$</sup>{price}</Typography>
            </CardContent>
        </Card>
    )
}