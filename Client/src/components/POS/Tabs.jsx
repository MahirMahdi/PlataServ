import { Box, CardMedia, Card } from '@mui/material';

//style
const tabsWrapper = {display:'flex',alignItems:'center',justifyContent:'space-between',width:{xs:'17rem',sm:'32.5rem',md:'40rem',lg:'60rem'},height:{xs:'7rem',sm:'9.5rem',md:'11rem'},borderRadius:'10px'}
const tab = {display:'grid',placeItems:'center',justifyContent:'space-around',width:{xs:'4rem', sm:'7rem', md:'9rem', lg:'14rem'},height:{xs:'5rem', sm:'7rem',md:'7.5rem'},textAlign:'center',fontWeight:'600',fontFamily:"'Roboto', sans-serif",fontSize:{xs:'.75rem',md:'.9rem'},'&:hover':{border:'2px solid #C84B31',transition: 'ease-in 100ms'}}
const tabImg = {width:{xs:'3rem',sm:'5rem',md:'6rem'}}

export default function Tabs({handleClick,tab_state,categories}){
    return(
        <Box sx={tabsWrapper}>
            {categories.map((val,index)=>(
                <Card key={index} sx={tab} onClick={()=>handleClick(val.name)} id={tab_state === val.name? `active`: ``}>
                    <CardMedia component="img" image={val.image} alt={val.name} sx={tabImg}/>
                    <p>{val.name}</p>
                </Card>
            ))}
        </Box>
    )
}