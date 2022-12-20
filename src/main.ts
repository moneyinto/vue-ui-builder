import { createApp } from "vue";
import App from "./App.vue";
import LyxView from "lyx_view";
import "lyx_view/dist/LyxView.css";
import "@/assets/styles/index.scss";
import { createPinia } from "pinia";
import { GlobalCmComponent } from "codemirror-editor-vue3";
import vue3TsJsoneditor from "vue3-ts-jsoneditor";

const pinia = createPinia();

const app = createApp(App);
app.use(LyxView);
app.use(pinia);
app.use(GlobalCmComponent);
app.use(vue3TsJsoneditor, {
    options: {}
});
app.mount("#app");
