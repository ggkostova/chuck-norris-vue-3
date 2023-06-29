import { ref, onMounted } from "vue";
import {defineStore} from "pinia";

export const useFavouritesStore = defineStore('store', () => {
    const favourites = ref([]);
    const categories = ref([]);

    function removeFromFavourites(joke) {
        favourites.value = favourites.value.filter(item => item.id !== joke.id);
        localStorage.setItem('Favourites', JSON.stringify(favourites.value));
    }
    function addToFavourites(joke) {
        favourites.value.push(joke);
        localStorage.setItem('Favourites', JSON.stringify(favourites.value));
    }

    onMounted(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('Favourites'));
        if (Array.isArray(storedFavourites)) {
            favourites.value = storedFavourites;
        }
    });

    return {
        favourites,
        categories,
        removeFromFavourites,
        addToFavourites
    };
})