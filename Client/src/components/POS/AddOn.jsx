import { Box,IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

    //style
    const btn = {width:{xs:'1rem', md:'1.25rem'},height:{xs:'1rem', md:'1.25rem'},borderRadius:'3.5px',border:'none',textAlign:'center',backgroundColor:'#182747',color:'white','&:hover':{backgroundColor: '#C84B31',transition: 'ease-in-out 350ms'}}
    const value = {width:'2rem',textAlign:'center',fontSize:'.9rem',fontFamily: "'PT Sans', sans-serif"}

export default function AddOn({count,handleAdd,handleRemove}){

    return(
        <Box sx={{display:'flex', width:'5rem',overflow:'hidden'}}>
            <IconButton onClick={handleAdd} sx={btn}><AddIcon sx={{fontSize:15}}/></IconButton>
            <div style={value}>{count}</div>
            <IconButton onClick={handleRemove} sx={btn}><RemoveIcon sx={{fontSize:15}}/></IconButton>
        </Box>
    )
}