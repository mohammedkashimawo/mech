import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import notFound from '../views/notFound.vue'
import contactView from '../views/contactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact/:id',
    name: 'contact',
    component: contactView
  },

  {path:'/contacts',
  redirect:'/',},


  {path:'/:catchAll(.*)',
  name:'notFound',
component:notFound},
  {
    path: '/about',
    name: 'about',
    component:AboutView,

  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
