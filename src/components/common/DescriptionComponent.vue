<template>
  <div class="info-side">
    <h2>{{ props.headerText }}</h2>
    <h4> {{ props.descriptionText }} </h4>
    <router-link
        id="button"
        :to='"/jokes"'
    >{{ props.descriptionButton }}</router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  headerText: String,
  descriptionText: String,
  descriptionButton: String
})
</script>
