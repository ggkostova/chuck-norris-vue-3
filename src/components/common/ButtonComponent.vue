<template>
  <button id="button" @click="navigateTo">{{ buttonText }}</button>
</template>

<script>
import '../../assets/styles/ButtonComponent.css';
export default {
  props: {
    buttonText: String,
  },
  setup(props, context) {
    const navigateTo = () => {
      context.emit('navigate-to');
    };

    return {
      navigateTo,
    };
  },
};
</script>
