import { Card, CardMedia, CardContent, Typography, Box, Grid} from '@mui/material';
import { menuCardStyle, menuCardContentStyle } from '../../../mui-styles/POS/Menustyles';

export default function MenuCard({product,handleOrder}) {

  const {image,description,price,name} = product

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={menuCardStyle}>
          <CardMedia
            component="img"
            height="230"
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
              <Typography sx={{fontFamily: "'Roboto', sans-serif",fontSize:'1.1rem'}} gutterBottom component="div">
                <sup style={{fontWeight:'bold'}}>$</sup>{price}
              </Typography>
            </Box>
            <button onClick={handleOrder} className="btn add-order">Add to Order</button>
          </CardContent>
      </Card>
    </Grid>
  );
}