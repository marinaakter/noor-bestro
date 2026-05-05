import axios from "axios";

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api";

const apiClient = axios.create({
  baseURL: rawBaseUrl.replace(/\/+$/, ""),
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
});

export default apiClient;
