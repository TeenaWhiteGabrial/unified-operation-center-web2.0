import Vue from 'vue'
import Router from 'vue-router'
import website from './modules/website'
import operation from './modules/operation'

/* Layout */
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  // it will exist no matter what
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {},
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '概览', icon: 'dashboard' },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
  },
]

export const asyncRoutes = [
  // generate by role-permission
  ...website,
  ...operation,
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
