import useAuth from "./useAuth";
import axios from "../api/api";

export default function useRefreshToken(){

    const {setUser} = useAuth();

    //function for fetching new access token if access token expires.
    const refresh = async() => {
        
        const response = await axios.get('/refresh',{
            withCredentials:true,
        });
        
        //set user state with new access token
        setUser(prev=>{
            return {...prev, user:response.data.user, accessToken: response.data.accessToken}
        });

        return response.data.accessToken;
    };

    return refresh;
}
