import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import JokesPage from "@/views/JokesPage.vue";
import FavouritesPage from "@/views/FavouritesPage.vue";

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/jokes',
        name: 'Jokes',
        component: JokesPage,
    },
    {
        path: '/favourites',
        name: 'Favourites',
        component: FavouritesPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
