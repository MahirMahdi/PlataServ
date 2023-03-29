import { Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { chipStyle } from "../../mui-styles/adminStyles";

export default function Chip({name,remove}){

    return(
        <Box sx={chipStyle}>
            <p>{name}</p>
            <CloseIcon fontSize="inherit" color="white" sx={{cursor:'pointer'}} onClick={remove}/>
        </Box>
    );
}