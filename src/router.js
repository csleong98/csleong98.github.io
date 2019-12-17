import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UXProjects from "./views/UXProjects.vue";
import About from "./views/About.vue";
import Illustrations from "./views/Illustrations.vue";
import Coding from "./views/Coding.vue";
import Community from "./views/Community.vue";

Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/projects",
            name: "uxprojects",
            component: UXProjects
        },
        {
            path: "/illustrations",
            name: "illustrations",
            component: Illustrations
        },
        {
            path: "/coding",
            name: "coding",
            component: Coding
        },
        {
            path: "/community",
            name: "community",
            component: Community
        },
        {
            path: "/about",
            name: "about",
            component: About
        }
    ]
});
