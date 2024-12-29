import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import WedStock from '@/wedstock/WedStock.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/wedstock', component: WedStock }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
