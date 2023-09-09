import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute({ providedRole }) {
  const { user } = useAuth();

  if (user?.user?.role.includes(providedRole)) {
    return (
      <>
        <Sidebar />
        <Outlet />
      </>
    );
  }

  return <Navigate to="/unauthorized" />;
}
