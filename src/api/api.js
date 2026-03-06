import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL?.trim() || "http://localhost:5000/api";

const API = axios.create({
  baseURL: API_BASE_URL,
});

if (import.meta.env.DEV) {
  console.log("[API] baseURL:", API_BASE_URL);
}

// Add JWT token to request headers if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle 401 errors (unauthorized)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const shouldSkipRedirect = Boolean(error.config?.skipAuthRedirect);

    if (error.response?.status === 401 && !shouldSkipRedirect) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.dispatchEvent(new Event("auth-user-updated"));
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;
