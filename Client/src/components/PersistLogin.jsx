import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";
import Loading from "./Shared/Loading";

export default function PersistLogin(){
    
    const [isLoading, setIsLoading] = useState(true);

    //refresh token hook
    const refresh = useRefreshToken();

    const [user] = useAuth();

    //verifies whether the access token has been expired or not
    useEffect(()=>{
        const verifyRefreshToken = async()=>{
            try{
                await refresh()
            }catch(err){
                return err;
            }
            finally{
                setIsLoading(false);
            }
        }

        !user?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    },[])

    return(
        <>
            {isLoading?

                <Loading/>

                :<Outlet/>
            }
        </>
    )
}
