<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-center mb-6">Register</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="fullName"
            >Full Name</label
          >
          <input
            v-model="fullName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Email</label
          >
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
            >Password</label
          >
          <input
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="contact"
            >Contact Number</label
          >
          <input
            v-model="contact"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            id="contact"
            type="number"
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div class="mb-6">
          <input type="file" @change="onFileChange" accept="image/*" />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <NuxtLink
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/auth/login"
          >
            Already have an account? Login
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth"; // Pinia store for auth

const email = ref("");
const password = ref("");
const fullName = ref("");
const contact = ref("");
const base64Image = ref(null);
const router = useRouter();

const authStore = useAuthStore();

const handleSubmit = async () => {
  try {
    const formData = new FormData();
    formData.append("email", email.value);
    formData.append("password", password.value);
    formData.append("fullName", fullName.value);
    formData.append("contact", contact.value);
    formData.append("picture", base64Image.value);
    // console.log(base64Image.value);

    const response = await authStore.registerRequest(formData);
    if (response.status === 200) {
      router.push("/auth/login");
    }
  } catch (error) {
    console.error(error);
  }
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const validTypes = ["image/png", "image/jpeg"];
    if (!validTypes.includes(file.type)) {
      alert("Please select a valid image (PNG or JPEG).");
      return;
    }
    base64Image.value = file;
  }
};
</script>
