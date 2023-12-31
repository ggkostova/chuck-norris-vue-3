import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router/router'
import {fetchCategories} from "@/utilities";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount('#app');
fetchCategories();
