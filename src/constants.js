import fetchFunction from "@/utilities";

export const CHUCK_API_URL = 'https://api.chucknorris.io/jokes';

export const SITE_DESCRIPTION = 'This website is created with comic purpose. ' +
    'Here you can have fun reading Chuck Norris jokes and choose them by category. ' +
    'If some jokes impress you, you can add them to favourites and show them to your friends.';

export const CHUCK_NORRIS_IMAGE_ALT = 'Chuck Norris image';

export const CATEGORIES = await fetchFunction(`${CHUCK_API_URL}/categories`);