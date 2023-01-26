import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import haveRoleGuard from './auth-guard'

//Definimos las rutas que tendrá la aplicación (home (/), profile (/profile), login (/login), detail (/detail/:id) y la vista de error si la ruta és incorrecta)
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    beforeEnter: [haveRoleGuard],
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailView.vue'),
    props: (route) => {
      const id = Number(route.params.id)
      const userRole = localStorage.getItem('userRole')
      return isNaN(id) ?  { id: null, userRole } : { id, userRole }
    }
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
