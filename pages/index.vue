<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-center mb-6" @click="logout">
        Dashboard
      </h2>
      <p class="text-center text-gray-700 text-sm">
        Welcome to your dashboard!
      </p>
    </div>
  </div>
</template>
<script setup>
// definePageMeta({
//   layout: "default",
//   middleware: "authenticated", // Apply the middleware to this page
// });
import { useAuthStore } from "@/store/auth"; // Pinia store for auth

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push("/auth/login");
};
</script>
