import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";

export default function RouteHandler(){
    const {user} = useAuth()
    const navigate = useNavigate()

    useEffect(()=> {
        if (user) {
            if(user.user.role === 'Manager'){
                navigate('/admin')
            }
            else{
                navigate('/menu')
            }
        }
        else{
            navigate('/login')
        }
    },[]);
    
    return(
       <Loading/>
    );
}