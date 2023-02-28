import { Box, Typography } from "@mui/material"
import Sidebar from "../../components/POS/Sidebar"


const mainBox = {position:'absolute',display:'grid',justifyContent:'center',width:{xs:'85vw',sm:'90vw',md:'82.5vw',lg:'85vw'},minHeight:'100vh',right:'0',backgroundColor:'#e4e9eb'}
const headerBox = {width:{xs:'17rem',sm:'32.5rem',md:'35rem',lg:'40rem'},height:{xs:'5rem',sm:'6rem',md:'7.5rem'},borderRadius:'10px',backgroundColor:'#C84B31',display:'grid',justifyContent:'center',placeItems:'center',color:'white'}
const itemsBox = {width:{xs:'17rem',sm:'32.5rem',md:'35rem',lg:'40rem'},borderRadius:'10px',backgroundColor:'white',display:'grid',justifyContent:'center',placeItems:'center',padding:{xs:'.35rem 0', sm:'1.25rem 0', md:'1.25rem 0',margin:'auto',rowGap:'1rem'}}

export default function Dashboard(){
    return(
        <Box sx={{width:'100vw',display:'flex'}}> 
            <Sidebar/>
            <Box sx={mainBox}>
                <Box sx={{marginTop:'1.5rem'}}>
                    <Typography sx={{paddingTop:'1rem'}} variant="h4">Dashboard</Typography>
                    <Box sx={headerBox}>
                        <Typography variant="h5">Queue</Typography>
                    </Box>
                    <Box sx={itemsBox}>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}