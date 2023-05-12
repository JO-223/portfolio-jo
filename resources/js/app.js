import "./bootstrap";
import "bootstrap";

import { createApp } from "vue";
import router from "./router";

const app = createApp({});

app.use(router);

import Welcome from "./views/Welcome.vue";
app.component("welcome", Welcome);

app.mount("#app");
