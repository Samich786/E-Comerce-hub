// plugins/auth.js
import { defineNuxtPlugin } from "#app";
import { useAuthStore } from "@/store/auth";

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();

  // Check if token exists in localStorage and fetch user data
  const token = localStorage.getItem("auth._token.local");
  if (token) {
    authStore.token = token;
    await authStore.fetchUserData();
  }
});
