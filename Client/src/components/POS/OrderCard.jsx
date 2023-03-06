import AddOn from "../../components/POS/AddOn";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function OrderCard({product,handleAdd,handleRemove,count}){
    const {name,price,image} = product
    return(
        <Card sx={{display:'flex',width:{xs:'16.5rem',sm:'30rem',md:'32.5em',lg:'37.5rem'},height:{xs:'6.5rem',sm:'6rem',md:'7.5rem'},backgroundColor:'white'}}>
            <CardMedia component="img" image={image} sx={{padding:'.5rem',width:{xs:'5.5rem',sm:'5rem',md:'6.5rem'}}}/>
            <CardContent sx={{display:'flex',width:{xs:'11rem',sm:'25em',md:'26rem',lg:'37.5rem',padding:'0',overflow:'hidden'}}}>
                <Box sx={{height:{xs:'5.5rem',sm:'6rem',md:'7.5rem'},padding:{xs:'.5rem'},display:'grid',justifyContent:'space-between'}}>
                    <Typography sx={{fontSize:{xs:'.9rem',sm:'1.25rem'},fontWeight:'400'}}>{name}</Typography>
                    <AddOn count={count} handleAdd={handleAdd} handleRemove={handleRemove}/>
                </Box>
                <Typography variant="h6" sx={{width:{xs:'3.5rem',sm:'5rem'},fontSize:{xs:'.75rem',sm:'1.1rem'},fontWeight:'500',textAlign:'center',padding:'1rem 0'}}><sup style={{fontWeight:'bolder'}}>$</sup>{price}</Typography>
            </CardContent>
        </Card>
    )
}