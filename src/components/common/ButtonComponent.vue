<template>
  <button id="button" @click="navigateTo">{{ props.buttonText }}</button>
</template>

<script setup>
import { defineEmits } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  buttonText: String,
});

const emit = defineEmits(['navigate-to']);

const navigateTo = () => {
  emit('navigate-to');
};
</script>