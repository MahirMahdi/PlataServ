import axios from '../api/api'
import useAuth from './useAuth';

export default function useLogout(){

    const {setUser} = useAuth()
    
    const logout = async()=>{
        try{
            await axios.post('/logout',{},{withCredentials:true});
            setUser(null)
        }
        catch(err){
            console.log(err);
        }
    }

    return logout;
}
