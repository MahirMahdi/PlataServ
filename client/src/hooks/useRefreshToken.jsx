import useAuth from "./useAuth";
import axios from "../api/api";

export default function useRefreshToken() {
  const { setUser } = useAuth();

  const refreshToken = async () => {
    try {
      const response = await axios.get("/refresh", { withCredentials: true });
      setUser({
        user: response.data.user,
        accessToken: response.data.accessToken,
      });

      return response;
    } catch (error) {
      return error;
    }
  };

  return refreshToken;
}
