import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "main"},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/authenticator',
    name: 'Authenticator',
    meta: { layout: "auth"},
    component: () => import('../views/authenticator/Auth.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: { layout: "main"},
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: { layout: "main"},
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: { layout: "main"},
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/catalog',
    name: 'Catalog',
    meta: { layout: "main"},
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: "main"},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/ui',
    name: 'Ui',
    meta: { layout: "main"},
    component: () => import('../views/Ui.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
