import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RequireAuth({allowedRoles}){

    const {user} = useAuth();
    const location = useLocation();

    return(
      user?.user.role === allowedRoles?
        <Outlet/>
        :user? 
          <Navigate to ='/unauthorized'/>
          :<Navigate to="/login" state={{from:location}} replace/>
    );
}