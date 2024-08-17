import { createRouter, createMemoryHistory, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { Routes } from '@/entities/routes';
import type { IAnimationMeta } from '@/shared/ui';
import type { IPageTemplateMeta } from '@/widgets/page-template';

let pageIndex = 0;
const routes = [
    { 
        path: Routes.Home,
        component: () => import("@/pages/home"),
        meta: {
            pageIndex: pageIndex++,
            useAnimation: true,
            useButtomNavigationBar: true
        } as IAnimationMeta | IPageTemplateMeta
    },
    { 
        path: Routes.Person,
        component: () => import("@/pages/person"),
        meta: {
            pageIndex: pageIndex++,
            useAnimation: true,
            useButtomNavigationBar: true,
        } as IAnimationMeta | IPageTemplateMeta
    },
    { 
        path: Routes.Settings, 
        component: () => import("@/pages/settings"),
        meta: {
            pageIndex: pageIndex++,
            useAnimation: true,
            useButtomNavigationBar: true,
        } as IAnimationMeta | IPageTemplateMeta
    }
] as any

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }