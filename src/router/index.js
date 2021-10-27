import {createRouter, createWebHistory} from 'vue-router'

import ProjectRegister from '../views/ProjectRegister.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/project',
        name: 'Project',
        component: ProjectRegister
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    router
})

export default router