<template>
  <img :src="props.imgSrc" :alt="props.imgAlt">
</template>

<script setup>
import { defineProps } from 'vue';

  const props = defineProps({
      imgSrc: String,
      imgAlt: String
  })
</script>

<style scoped src="../../assets/styles/HeroSection.css">
</style>