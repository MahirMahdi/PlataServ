import { Box,IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

    //style
    const btn = {width:'1.25rem',height:'1.25rem',borderRadius:'3.5px',border:'none',textAlign:'center',backgroundColor:'#182747',color:'white','&:hover':{backgroundColor: '#C84B31',transition: 'ease-in-out 350ms'}}
    const value = {width:'2rem',textAlign:'center',fontSize:'.9rem',fontFamily: "'PT Sans', sans-serif"}

export default function AddOn({count,handleAdd,handleRemove}){

    return(
        <Box sx={{display:'flex', width:'5rem',overflow:'hidden'}}>
            <button onClick={handleAdd} className="btn add-on"><AddIcon sx={{fontSize:10}}/></button>
            <div className="add-on-value">{count}</div>
            <button onClick={handleRemove} className="btn add-on"><RemoveIcon sx={{fontSize:10}}/></button>
        </Box>
    )
}