// plugins/axios.js
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const apiClient = axios.create({
    baseURL: "http://localhost:4000", // Replace with your API base URL
    // No need to set Content-Type here; it's handled per request as needed
  });

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

  nuxtApp.provide("apiClient", apiClient);
});
