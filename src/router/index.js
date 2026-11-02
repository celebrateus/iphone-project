import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        // 기존 routes 그대로
    ],
})

export default router