import { createApp } from "vue";
import router from "./router";
import store from "./store";
import vant from "vant";
import App from "./App.vue";
import "./utils/rem";
import "vant/lib/index.css"; // 全局引入样式

createApp(App).use(router).use(store).use(vant).mount("#app");
