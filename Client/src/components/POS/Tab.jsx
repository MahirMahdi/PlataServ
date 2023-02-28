import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

//style
const tab = {display:'grid',placeItems:'center',justifyContent:'space-around',width:{xs:'4rem', sm:'7rem', md:'9rem', lg:'14rem'},height:{xs:'5rem', sm:'7rem',md:'7.5rem'},textAlign:'center',fontWeight:'600',fontFamily:"'Roboto', sans-serif",fontSize:{xs:'.75rem',md:'.9rem'},'&:hover':{border:'2px solid #C84B31',transition: 'ease-in 100ms'}}
const tabImg = {width:{xs:'3rem',sm:'5rem',md:'6rem'}}

export default function Tab({handleClick,tab_state,image,name}){

    return(
        <Card sx={tab} onClick={handleClick} id={tab_state === name? `active`: ``}>
            <CardMedia component="img" image={image} alt={name} sx={tabImg}/>
            <p>{name}</p>
        </Card>
    )
}