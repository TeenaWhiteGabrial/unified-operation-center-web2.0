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

  if (to.path === '/dashboard' || to.path === '/404') {
    store.dispatch('app/noSideBar')
  } else {
    store.dispatch('app/toggleSideBar')
  }

  if (to.meta.owningColumn){
    store.dispatch('app/setMenuList', to.meta.owningColumn)
    // router.addRoute(asyncRoutes[to.meta.owningColumn])
  }
  next();
  
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
