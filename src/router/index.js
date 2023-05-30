import Vue from 'vue'
import Router from 'vue-router'
import portalRoute from './modules/portal'
import operateRoute from './modules/operate'
import multenantRoute from './modules/multenant'
import statsRoute from './modules/stats'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * 路由和菜单的关联性不强，分开
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta:{},
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '概览', icon: 'dashboard' }
      }, 
      // ...portalRoute,
      // ...operateRoute,
      // ...multenantRoute,
      // ...statsRoute,
      {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
      },
    ]
  },
  { path: '*', redirect: '/404', hidden: true },
]

export const asyncMenu = {
  portalRoute,
  operateRoute,
  multenantRoute,
  statsRoute
}

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
