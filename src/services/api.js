import axios from "axios";

// Not used yet — every service currently reads local mock data.
// Once the Django backend is deployed, set VITE_API_URL and swap the
// Promise.resolve(...) calls in each service for apiClient.get(...) calls.
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
  headers: { "Content-Type": "application/json" },
});

export default apiClient;
