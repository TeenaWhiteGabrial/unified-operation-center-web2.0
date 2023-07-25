import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/dashboard', '/404'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // if (store.getters.tenantId === '') {
  //   await store.dispatch('user/getTenantId')
  // }
  // // 当有code时，进行登录
  // const hasToken = getToken()
  // const { hash } = location
  // const codeIndex = hash.indexOf('code=')

  // if (codeIndex > -1) {
  //   await store.dispatch('user/login', hash.substring(codeIndex + 5))
  //   await store.dispatch('user/getUserInfo')
  // } else if (hasToken) {
  //   await store.dispatch('user/getUserInfo')
  // } else {
  // // 没有code，没有token，跳转到maxkey登录页面
  //   console.log(process.env.VUE_APP_LOGIN_URL + process.env.VUE_APP_REDIRECTURL)
  //   window.location = process.env.VUE_APP_LOGIN_URL + process.env.VUE_APP_REDIRECTURL
  // }
  debugger
  if (!store.getters.routerList || store.getters.routerList.length === 0) {
    const routeList = await store.dispatch('permission/generateMenuRoutes')
    routeList.forEach((route) => {
      router.addRoute(route)
    })
  }

  if (to.path === '/dashboard' || to.path === '/404') {
    store.dispatch('app/noSideBar')
  } else {
    store.dispatch('app/toggleSideBar')
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
