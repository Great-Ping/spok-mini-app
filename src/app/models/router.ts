import { createRouter, createMemoryHistory } from 'vue-router';
import { Home } from '../../pages';

const routes = [
    {path: '/', component: Home}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router }