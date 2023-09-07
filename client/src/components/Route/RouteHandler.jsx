import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RouteHandler() {
  const { user } = useAuth();

  if (user?.user.role.includes("Cashier")) {
    return <Navigate to="/menu" />;
  }

  if (user?.user.role.includes("Manager")) {
    return <Navigate to="/inventory" />;
  }

  return <Navigate to="/unauthorized" />;
}
