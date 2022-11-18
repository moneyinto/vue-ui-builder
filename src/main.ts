import { createApp } from "vue";
import App from "./App.vue";
import LyxView from "lyx_view";
import "lyx_view/dist/LyxView.css";

createApp(App).use(LyxView).mount("#app");
