import axios from "axios";
export const baseURL = "https://backend.smartwork.3i.com.vn"
const axiosInstance = axios.create({
    baseURL: "https://backend.smartwork.3i.com.vn",
})

export default axiosInstance;
