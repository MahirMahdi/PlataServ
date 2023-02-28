import { Card, CardMedia, CardContent, Typography, Box, Grid} from '@mui/material';

//style
const btn = {width:'7.5rem',height:'2.5rem',backgroundColor:'#C84B31',border:'none',borderRadius:'5px',color:'white',textAlign:'center',fontFamily: "'Roboto', sans-serif",fontSize:'1rem'}

export default function MenuCard({product,handleOrder}) {

  const {image,description,price,name} = product
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, height:{xs:425, md:475, lg:425}}}>
          <CardMedia
            component="img"
            height="230"
            image={image}
            alt={name}
          />
          <CardContent sx={{height:{xs:200,md:250, lg:200},display:'grid',rowGap:'.75rem'}}>
            <Box sx={{display:'grid',rowGap:'.25rem'}}>
              <Typography sx={{fontFamily: "'Roboto', sans-serif",fontSize:'1.25rem'}} gutterBottom component="div">
                {name}
              </Typography>
              <Typography sx={{fontSize:'.9rem'}} variant="body1" color="text.secondary">
              {description}
              </Typography>
              <Typography sx={{fontFamily: "'Roboto', sans-serif",fontSize:'1.1rem'}} gutterBottom component="div">
                <sup style={{fontWeight:'bold'}}>$</sup>{price}
              </Typography>
            </Box>
            <button onClick={handleOrder} style={btn}>Add to Order</button>
          </CardContent>
      </Card>
    </Grid>
  );
}