<template>
  <div class="home-container">
    <div class="left-side">
      <description-component :header-text="'Chuck Norris'" :description-text="descriptionText" :description-button="'Get jokes'"></description-component>
    </div>
    <hero-section :img-src="'/images/chuck-norris.jpg'" :img-alt="imageAlt"></hero-section>
  </div>

</template>

<script setup>
import '@/assets/styles/HomePage.css';
import HeroSection from "@/components/common/HeroSection.vue";
import DescriptionComponent from "@/components/common/DescriptionComponent.vue";
import {CHUCK_NORRIS_IMAGE_ALT, SITE_DESCRIPTION} from "@/constants";

const descriptionText = SITE_DESCRIPTION;
const imageAlt = CHUCK_NORRIS_IMAGE_ALT;
</script>
