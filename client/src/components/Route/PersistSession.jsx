import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Shared/Loading";

export default function PersistSession() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoadig] = useState(true);
  const refreshToken = useRefreshToken();

  const verifyRefreshToken = async () => {
    try {
      await refreshToken();
    } catch (error) {
      navigate("/login");
    } finally {
      setIsLoadig(false);
    }
  };

  useEffect(() => {
    !user?.accessToken ? verifyRefreshToken() : setIsLoadig(false);
  }, []);

  return isLoading ? <Loading /> : <Outlet />;
}
