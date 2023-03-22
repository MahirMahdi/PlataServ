import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function RequireAuth({allowedRoles}){

    const [user] = useAuth();
    const location = useLocation();

    return(
        allowedRoles.includes(user?.user.user_metadata.role)? 
        <Outlet/>
        :<Navigate to="/login" state={{from:location}} replace/>
    )
}