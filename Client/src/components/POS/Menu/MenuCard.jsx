import { Card, CardMedia, CardContent, Typography, Box, Grid} from '@mui/material';
import { menuCardStyle, menuCardContentStyle } from '../../../mui-styles/POS/Menustyles';

export default function MenuCard({product,handleOrder}) {

  const {image,description,price,name, discount_period} = product

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={menuCardStyle}>
      {discount_period && <div className='discount-tag'><p>10% OFF</p></div>}
          <CardMedia
            component="img"
            height="230"
            sx={{position:'relative', display:'inline-block'}}
            image={image}
            alt={name}
          />
          <CardContent sx={menuCardContentStyle}>
            <Box sx={{display:'grid',rowGap:'.25rem'}}>
              <Typography sx={{fontFamily: "'Roboto', sans-serif",fontSize:'1.25rem'}} gutterBottom component="div">
                {name}
              </Typography>
              <Typography sx={{fontSize:'.9rem'}} variant="body1" color="text.secondary">
              {description}
              </Typography>
              {discount_period?
                  <div style={{fontFamily: "'Roboto', sans-serif",fontSize:'1.1rem'}}>
                    <sup style={{fontWeight:'bold'}}>$</sup>{(price - (price * .1).toFixed(2))}
                    <strike style={{fontSize:'.85rem'}}>${price}</strike>
                  </div>
                  
                :<div style={{fontFamily: "'Roboto', sans-serif",fontSize:'1.1rem'}}><sup style={{fontWeight:'bold'}}>$</sup>{price}</div>}
            </Box>
            <button onClick={handleOrder} className="btn add-order">Add to Order</button>
          </CardContent>
      </Card>
    </Grid>
  );
}