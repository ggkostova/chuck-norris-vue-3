import {useFavouritesStore} from "@/stores/store";
import {CHUCK_API_URL} from "@/constants";

export default async function fetchFunction(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}
export async function fetchCategories(){
    const store = useFavouritesStore();
    console.log(store);
    const fetchedCategories = await fetchFunction(`${CHUCK_API_URL}/categories`);
    store.categories.push(...fetchedCategories);
}
