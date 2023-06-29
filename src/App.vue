<template>
  <div :style="{height:'100vh'}">
    <the-navigation></the-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from "@/components/layout/TheNavigation.vue";
import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: 'App',
  components: {
    TheNavigation,
  }
}
</script>

