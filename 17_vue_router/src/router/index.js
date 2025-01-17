import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from'../views/About.vue'
import Contacto from'../views/Contacto.vue'
import Usuarios from'../views/Usuarios.vue'
import Login from'../views/Login.vue'
import Signup from'../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  }, 
  {
    path: '/usuarios/:id',
    name: 'usuarios',
    component: Usuarios
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
