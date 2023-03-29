import { Avatar,Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function UserAvatar({name,role}) {

  return (
    <div style={{width:'fit-content', display:'flex',alignItems:'flex-start',flexDirection:'column',rowGap:'1.5rem' ,padding:'0 2.25rem'}}>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-around', columnGap:'1rem'}}>
        <Avatar
            sx={{cursor:'pointer',backgroundColor:'#007ea7',width:{xs:'1.75rem', md:'2.25rem'}, height:{xs:'1.75rem', md:'2.25rem'}}}
        >
            {name.slice(0,1)}
        </Avatar>
        <Typography sx={{color:'white',fontSize:'1.25rem'}} noWrap component="div">
                {name}
        </Typography>
      </Box>
        <Typography sx={{color:'white',fontSize:'1rem',textAlign:'center'}} noWrap component="div">
            Role: {role}
        </Typography> 
    </div>
  );
}
