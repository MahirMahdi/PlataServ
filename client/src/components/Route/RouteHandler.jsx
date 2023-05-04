import { useEffect } from "react";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";

export default function RouteHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = window.sessionStorage.getItem("role");

    if (role === "cashier") {
      navigate("/menu");
    } else {
      navigate("/inventory");
    }
  }, []);

  return <Loading />;
}
