import { Box, Typography } from "@mui/material";

export default function Unauthorized(){
    
    return(
        <Box sx={{display:'grid',placeItems:'center',textAlign:"center" ,height:'100vh', margin:'auto'}}>
            <Box>
                <Typography variant="h3">403 FORBIDDEN</Typography>
                <Typography variant="body1">Sorry, you're not authorized to go to this page.</Typography>
            </Box>
        </Box>
    );
}