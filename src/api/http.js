import axios from "axios";
import Cookies from "js-cookie";
import globalRouter from "../router/globalRouter";

const config = {
  baseURL: import.meta.env.VITE_BACKEND_URL,
};
const api = axios.create(config);
export const unauthorizedApi = axios.create(config);

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      globalRouter.navigate("/");
    }
    return error;
  }
);

export default api;
