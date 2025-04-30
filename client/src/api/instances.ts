import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000/api"

export const mainInstance = axios.create({
    baseURL,
})