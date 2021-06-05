import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import NewProject from '../views/New_Project.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/project/:id',
    name: 'project',
    component:Project
  },
  {
    path: '/new/project',
    name: 'new_project',
    component:NewProject
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
