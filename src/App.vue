<template>
  <div :style="{height:'100vh'}">
    <the-navigation></the-navigation>
    <router-view></router-view>
  </div>
</template>

<script setup>
import TheNavigation from "@/components/layout/TheNavigation.vue";
</script>

<style lang="scss">
@import "./assets/styles/styles";
</style>