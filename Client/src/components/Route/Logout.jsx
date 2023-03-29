import { useEffect} from "react";
import Loading from "../Shared/Loading";
import { useNavigate} from "react-router-dom";
import useLogout from "../../hooks/useLogout";

export default function Logout(){
    const navigate = useNavigate()
    const logout = useLogout()

    useEffect(()=> {
        logout();
        navigate('/login')
    },[])
    
    return(
        <Loading/>
    );
}