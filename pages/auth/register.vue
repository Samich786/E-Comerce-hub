<template>
  <div class="">
    <Register />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth", // Use the auth layout for the login page
});
import Register from "@/components/Auth/Register.vue";
</script>

<style></style>
