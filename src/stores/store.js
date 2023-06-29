import {defineStore} from "pinia";
import {CATEGORIES} from "@/constants";

export const store = defineStore("store", {
    state: () => ({
        favourites: JSON.parse(localStorage.getItem('Favourites')) || [],
        categories: CATEGORIES,
    }),
    actions: {
        removeFromFavourites(joke) {
            this.favourites = this.favourites.filter(item => item.id !== joke.id);
            localStorage.setItem('Favourites', JSON.stringify(this.favourites));
        },
        addToFavourites(joke){
            this.favourites.push(joke);
            localStorage.setItem('Favourites', JSON.stringify(this.favourites));
        },

    }
})