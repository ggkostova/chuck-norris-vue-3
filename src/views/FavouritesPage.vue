<template>
  <div class="fav-jokes-container">
    <h1> {{ headerText }}</h1>
    <div class="cards-container">
      <div
          v-for="joke in favourites"
          :key="joke.id"
          class="card"
          style="width: 18rem;">
        <div class="card-body">
          <p class="laughing-emoji">😂</p>
          <p class="card-text">{{ joke.jokeText }}</p>
          <div class="heart" @click="store.removeFromFavourites(joke)">
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {storeToRefs} from "pinia";
import {useFavouritesStore} from "@/stores/store";

const store = useFavouritesStore();
const {favourites} = storeToRefs(store);
const headerText = computed(() => {
  return favourites ? 'Favourites list:' : 'The favourites list is empty.';
});
</script>

