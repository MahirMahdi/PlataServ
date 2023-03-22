import { supabase } from '../supabase/supabaseConfig'
import plataserv from '../assets/plataserv.png'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { AppBar, Box, Typography, CardMedia, Toolbar } from '@mui/material'
import { logoStyle } from '../mui-styles/SharedStyles'

export default function Login(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useAuth()
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async() => {
        
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if(data){
            const {session, user} = data
            setUser({user: user, accessToken: session.access_token})
            if(user.user_metadata.role === 'Cashier') navigate('/')
            else if(user.user_metadata.role === 'Supervisor') navigate('/notifications')
            else navigate('/admin')

        }
    }
    
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
                        <div>
                            <div className="formbold-mb-5">
                                <label className="formbold-form-label"> Email </label>
                                <input
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
                                type="password"
                                onChange={handlePassword}
                                placeholder="Password"
                                className="formbold-form-input"
                                />
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="formbold-btn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}