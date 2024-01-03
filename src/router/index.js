// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    component: () =>
        import ('@/layouts/default/DefaultView.vue'),
    children: [{
            path: '/',
            name: 'Home',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/views/HomeView.vue'),
        }, {
            path: '/About',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/views/AboutView.vue'),
        }, {
            path: '/Product',
            name: 'Product',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/views/Product.vue'),
        },
        {
            path: '/Cart',
            name: 'Cart',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/views/CartView.vue'),
        },
        {
            path: '/Favorite',
            name: 'Favorite',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/views/FavoriteView.vue'),
        },
    ],
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router