import { createRouter, createWebHistory } from "vue-router";
import Welcome from "./views/Welcome.vue";
import Login from "./components/Login.vue";
import Contact from "./components/Contact.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: Welcome,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
