<template>
  <div class="info-side">
    <h2>{{ headerText }}</h2>
    <h4> {{ descriptionText }} </h4>
    <router-link
        id="button"
        :to='"/jokes"'
    >{{ descriptionButton }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    headerText: String,
    descriptionText: String,
    descriptionButton: String
  },
};
</script>

<style scoped src="../../assets/styles/DescriptionComponent.css">
</style>