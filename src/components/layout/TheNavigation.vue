<template>
  <header class="header">
    <div class="logo-side">
      <img src="/images/logo.png" alt="Logo">
    </div>
    <div class="buttons-side">
      <router-link
          v-for="link in routerLinks"
          :key="link.path"
          id="button"
          :to="link.path"
      >{{ link.name }}</router-link>
    </div>
  </header>
</template>

<script setup>
import { routes } from '@/router/router';

const routerLinks = routes;

</script>
