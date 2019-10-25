import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Illustrations from "./views/Illustrations.vue";

Vue.use(Router)

import ProjectEntries from "./statics/data/project.json";
import IllustrationEntries from "./statics/data/illustration.json";

const illustrationRoutes = Object.keys(IllustrationEntries).map(section => {
    const children = IllustrationEntries[section].map(child => ({
        path: child.id,
        name: child.id,
        component: () => import(`./markdowns/${section}/${child.id}.md`)
    }))
    return {
        path: `/${section}`,
        name: section,
        component: () => import("./views/Illustration.vue"),
        children
    }
})


const projectRoutes = Object.keys(ProjectEntries).map(section => {
    const children = ProjectEntries[section].map(child => ({
        path: child.id,
        name: child.id,
        component: () => import(`./markdowns/${section}/${child.id}.md`)
    }))
    return {
        path: `/${section}`,
        name: section,
        component: () => import("./views/Project.vue"),
        children
    }
})

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
            path: "/illustrations",
            name: "illustrations",
            component: Illustrations
        },
        ...projectRoutes,
        ...illustrationRoutes
    ]
});
