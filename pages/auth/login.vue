<template>
  <div class="">
    <Login />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth", // Use the auth layout for the login page
});
import Login from "@/components/Auth/Login.vue";
</script>

<style></style>
