import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import ModifyProject from '../views/Modify_project'
import NewProject from '../views/New_Project.vue'
import Result from '../views/result'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:id',
    name: 'project',
    component:Project
  },
  {
    path: '/project/resulta/:id',
    name: 'resulta',
    component:Result
  },
  {
    path: '/project/modify/:id',
    name: 'modify_project',
    component:ModifyProject
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
