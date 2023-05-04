import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

export default function ProtectedRoute({ providedRole }) {
  const role = window.sessionStorage.getItem("role");

  if (providedRole === role) {
    return (
      <>
        <Sidebar />
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/unauthorized" />;
  }
}
