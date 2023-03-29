import { Box, Typography } from "@mui/material";

export default function Missing(){
    
    return(
        <Box sx={{display:'grid',placeItems:'center',textAlign:"center" ,height:'100vh', margin:'auto'}}>
            <Box>
                <Typography variant="h3">404</Typography>
                <Typography variant="body1">Sorry, we were unable to find that page.</Typography>
            </Box>
        </Box>
    );
}