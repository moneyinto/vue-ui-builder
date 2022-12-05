import { createApp } from "vue";
import App from "./App.vue";
import LyxView from "lyx_view";
import "lyx_view/dist/LyxView.css";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);
app.use(LyxView);
app.use(pinia);
app.mount("#app");
