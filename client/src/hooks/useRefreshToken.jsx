import useAuth from "./useAuth";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function useRefreshToken() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const response = await api.get("/refresh", { withCredentials: true });
      setUser({
        user: response.data.user,
        accessToken: response.data.accessToken,
      });
    } catch (error) {
      navigate("/");
    }
  };

  return refreshToken;
}
