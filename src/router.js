import {createRouter, createWebHistory} from 'vue-router';
import homeComponent from "@/home/pages/home.component.vue";
import pageNotFoundComponent from "@/shared/pages/page-not-found.component.vue";
import healthChecksComponent from "@/health-checks/pages/health-checks.component.vue";

const routes =[
    { path: '/home', component: homeComponent},
    { path: '/', redirect: { path: '/home' }},
    { path: '/analytics/health-checks', component: healthChecksComponent},
    { path:'/:pathMatch(.*)*', component: pageNotFoundComponent}
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router