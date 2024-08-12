import { createRouter, createMemoryHistory } from 'vue-router';
import { Home, Settings } from '@/pages';
import { Routes } from '@/entities';

let pageIndex = 0;
const routes = [
    { 
        path: Routes.Home,
        component: Home,
        meta: {
            pageIndex: pageIndex++,
            useAnimation: true
        }
    },
    { 
        path: Routes.Settings, 
        component: Settings,
        meta: {
            pageIndex: pageIndex++,
            useAnimation: true
        } 
    }

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router }