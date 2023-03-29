import { Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function AddOn({count,handleAdd,handleRemove}){

    return(
        <Box sx={{display:'flex', width:'5rem'}}>
            <button onClick={handleAdd} className="btn add-on"><AddIcon sx={{fontSize:10}}/></button>
            <div className="add-on-value">{count}</div>
            <button onClick={handleRemove} className="btn add-on"><RemoveIcon sx={{fontSize:10}}/></button>
        </Box>
    );
}