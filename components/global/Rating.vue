<template>
    <div class="rating flex items-center space-x-1">
      <input
        v-for="star in stars"
        :key="star"
        type="radio"
        name="rating-4"
        :class="[
          'mask mask-star-2',
          star <= rating ? 'bg-[#FFD333]' : 'bg-black opacity-10',
          'transition-transform duration-300',
          'w-4 h-4' /* Slightly smaller size */,
        ]"
        :checked="star === rating"
        disabled
      />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    rating: {
      type: Number,
      required: true,
    },
  });
  
  const stars = computed(() => [1, 2, 3, 4, 5]);
  </script>
  
  <style>
  /* Optional: Add any custom styling here */
  .rating input {
    border-radius: 50%; /* Optional: Make stars circular */
  }
  .mask {
    border-radius: 50%; /* Optional: Make stars circular */
  }
  </style>
  