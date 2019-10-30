import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Doripod from "./views/Doripod.vue";
import Myportfolio from "./views/Myportfolio.vue";

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
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/doripod",
            name: "doripod",
            component: Doripod
        },
        {
            path: "/myportfolio",
            name: "myportfolio",
            component: Myportfolio            
        }
    ]
});
