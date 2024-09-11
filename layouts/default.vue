<template>
  <div class="h-screen">
    <Header />
    <main class="bg-[#F5F5F5] mt-16 h-calc(100vh-64px)">
      <NuxtPage />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
</script>

<style scoped>
/* Your default layout styles */
</style>
