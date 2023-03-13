import { Snackbar, Alert } from "@mui/material";

export default function POSAlert({error,open, setOpen, success}){
    return(
        <Snackbar sx={{ width: 'fit-content', textAlign:'center'}} autoHideDuration={750} open={open} onClose={()=>{setOpen(false)}}>
            {!error? 
                <Alert severity="success">
                    {success}
                </Alert>
                :
                <Alert severity="error">
                    {error}
                </Alert>
            }
        </Snackbar>
    )
}