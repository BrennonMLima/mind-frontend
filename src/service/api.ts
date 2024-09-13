import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "typescript-cookie";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

api.interceptors.request.use(
    (request) => {
        if (request.url !== '/login') {
            const token = getCookie("auth-token")
            request.headers.Authorization = `Bearer ${token}`
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }

);

export default api