import axios from "axios";
import { useRedirect } from "~/composables/useRedirect";

export default defineNuxtPlugin((nuxtApp) => {
  const apiClient = axios.create({
    baseURL: "http://localhost:4000", // Replace with your API base URL
  });

  const { redirectToLogin } = useRedirect();

  // Request interceptor to add the access token
  apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("auth._token.local"); // Retrieve token from localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle expired tokens
  apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = localStorage.getItem("refreshToken"); // Retrieve refresh token from localStorage

          if (!refreshToken) {
            redirectToLogin();
            return Promise.reject(error);
          }

          const response = await axios.post(
            "http://localhost:4000/refresh-token",
            { refreshToken }
          );

          const newAccessToken = response.data.accessToken;
          localStorage.setItem("auth._token.local", newAccessToken);
          // localStorage.setItem("refreshToken", response.data.refreshToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          console.log(response.data);

          return apiClient(originalRequest);
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          localStorage.removeItem("auth._token.local");
          localStorage.removeItem("refreshToken");
          redirectToLogin();
        }
      }

      return Promise.reject(error);
    }
  );

  nuxtApp.provide("apiClient", apiClient);
});
