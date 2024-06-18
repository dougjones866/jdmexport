import {
    createWebHistory,
    createRouter
} from "vue-router";

const MainPage = () => import('./components/MainPage.vue')
const Consultation = () => import('./components/Consultation.vue')
const Contact = () => import('./components/Contact.vue')
const About = () => import('./components/About.vue')
// const Contact = () => import('./views/Contact.vue')




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: MainPage, alias: '/jdmexport'
        },
        {
            path: "/mainPage",
            component: MainPage,
        },
        {
            path: "/consultation",
            component: Consultation,
        },
        {
            path: "/contact",
            component: Contact,
        },
        {
            path: "/about",
            component: About,
        },
        // {
        //     path: '/:notFound(.*)',
        //     component: NotFound
        // }
    ]

})

export default router;