import "./bootstrap";
import "bootstrap";

import { createApp } from "vue";

const app = createApp({});

import welcome from "./components/Welcome.vue";
app.component("welcome", ExampleComponent);

app.mount("#app");
