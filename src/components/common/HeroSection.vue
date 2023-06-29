<template>
  <img :src="imgSrc" :alt="imgAlt">
</template>

<script>
export default {
  props: {
    imgSrc: String,
    imgAlt: String
  },
}
</script>

<style scoped src="../../assets/styles/HeroSection.css">
</style>