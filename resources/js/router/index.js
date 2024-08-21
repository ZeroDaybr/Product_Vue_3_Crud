import { createRouter, createWebHistory } from "vue-router";
import productIndex from '../components/products/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "Home",
            component: productIndex,
        },
    ],
});

export default router;


