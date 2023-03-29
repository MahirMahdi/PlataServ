import { Box, CardMedia, Card } from '@mui/material';
import { 
    tabsWrapperStyle, 
    tabStyle, 
    tabImgStyle 
} from '../../../mui-styles/POS/Menustyles';

export default function Tabs({handleClick,tab_state,categories}){
    return(
        <Box sx={tabsWrapperStyle}>
            {categories.map((val,index)=>(
                <Card key={index} sx={tabStyle} onClick={()=>handleClick(val.name)} id={tab_state === val.name? `active`: ``}>
                    <CardMedia component="img" image={val.image} alt={val.name} sx={tabImgStyle}/>
                    <p>{val.name}</p>
                </Card>
            ))}
        </Box>
    );
}