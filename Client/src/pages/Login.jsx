import plataserv from '../assets/plataserv.png';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Typography, CardMedia, Toolbar } from '@mui/material';
import { logoStyle } from '../mui-styles/SharedStyles';
import axios from '../api/api';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const {user, setUser} = useAuth();
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };

    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = async() => {
       const response = await axios.post('/login',{email:email, password:password},{withCredentials:true})
       if(response.data.user){
        setUser(response.data)
        navigate('/')
       }
       else{
        setError(response.data.message)
       }
    };

    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[]);
    
    return(
        <div>
            <Box sx={{ display: 'flex'}}>
                <AppBar position="fixed" sx={{backgroundColor:"#00171f",height:'10vh',display:'flex',justifyContent:'center', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <CardMedia component="img" image={plataserv} sx={logoStyle}/>
                    <Typography variant="h6" noWrap component="div">
                        PlataServ
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{marginTop:'10vh',display:'grid',placeItems:'center',height:'90vh'}}>
                <div style={{width:'20rem'}} className="formbold-main-wrapper">
                    <div style={{rowGap:'2.5rem'}} className="formbold-form-wrapper">
                        <label style={{textAlign:'center', fontSize:'2.5rem'}}>Welcome to PlataServ</label>
                        {error &&  <label style={{backgroundColor:'#bd0641', color:'white',borderRadius:5,padding:'1rem',width:'fit-content',textAlign:'center', fontSize:'1rem'}}>{error}</label>}
                        <div>
                            <div className="formbold-mb-5">
                                <label className="formbold-form-label"> Email </label>
                                <input
                                value={email}
                                required={true}
                                type="email"
                                onChange={handleEmail}
                                placeholder="Email"
                                className="formbold-form-input"
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label className="formbold-form-label"> Password </label>
                                <input
                                required={true}
                                value={password}
                                type="password"
                                onChange={handlePassword}
                                placeholder="Password"
                                className="formbold-form-input"
                                />
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="formbold-btn">Login</button>
                        <Typography variant='body1' sx={{color:'red',textAlign:'center'}}>Scroll down to get login info</Typography>
                    </div>
                </div>
            </div>
            <Box sx={{width:'fit-content', backgroundColor:'white',margin:'0 auto',padding:'1rem', borderRadius:5}}>
                <Box sx={{textAlign:'center'}}>
                    <Typography variant='h6' sx={{color:'red'}}>
                        **Manager
                    </Typography>
                    <Typography variant='body1'>
                        <strong>email:</strong>manager@email.com
                    </Typography>
                    <Typography variant='body1'>
                        <strong>password:</strong>manager
                    </Typography>
                </Box>
                <Box sx={{textAlign:'center'}}>
                    <Typography variant='h6' sx={{color:'red'}}>
                        **Cashier
                    </Typography>
                    <Typography variant='body1'>
                        <strong>email:</strong>cashier@email.com
                    </Typography>
                    <Typography variant='body1'>
                        <strong>password:</strong> cashier
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}