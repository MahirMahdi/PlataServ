import { Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

export default function Chip({name,remove}){
    return(
        <Box sx={{width:'fit-content',padding:'0 1em', height:'2rem',borderRadius:'15px',display:'flex',alignItems:'center',justifyItems:'space-between',backgroundColor:'#182747',color:'white',fontFamily: "'PT Sans', sans-serif",overflow:'hidden'}}>
            <p>{name}</p>
            <CloseIcon fontSize="inherit" color="white" sx={{cursor:'pointer'}} onClick={remove}/>
        </Box>
    )
}