<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
</script>

<style scoped>
/* Your default layout styles */
</style>
