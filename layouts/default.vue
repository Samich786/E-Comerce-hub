<template>
  <div class="h-screen bg-[#F5F5F5] overflow-hidden">
    <Header />
    <main class="h-[calc(100vh-64px)] overflow-y-auto">
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
