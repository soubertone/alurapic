import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunckName: "home" */ '../views/Home.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import(/* webpackChucnkName: "cadastro" */ '../views/Cadastro.vue')
  },
  {
    path: '/alterar/:id',
    name: 'Alterar',
    component: () => import(/* webpackChucnkName: "alterar" */ '../views/Altera.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
