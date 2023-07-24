import { createRouter, createWebHashHistory } from "vue-router";
import Style from "../views/sampul.vue";
import isi from "../views/isi.vue";

const routes = [
    {
        meta: {
            title: "sampul undangan",
        },
        path: "/",
        name: "style",
        component: Style,
    },
    {
        meta: {
            title: "isi Undangan",
        },
        path: "/isi",
        name: "isi",
        component: isi,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

export default router;