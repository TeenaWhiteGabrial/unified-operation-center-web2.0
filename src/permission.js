import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import { mapGetters } from 'vuex'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/dashboard', '/404'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  if (store.getters.tenantId === "") {
    await store.dispatch('user/getTenantId')
  }

  // 当有code时，进行登录
  const hasToken = getToken()
  const hash = location.hash
  const codeIndex = hash.indexOf('code=')

  if (codeIndex > -1) {
    await store.dispatch('user/login', hash.substring(codeIndex + 5))
    // await store.dispatch('user/getInfo')
    NProgress.done()
  } else if (hasToken) {
    // await store.dispatch('user/getInfo')
    NProgress.done()
  } else { //没有code，没有token，跳转到maxkey登录页面
    console.log(process.env.VUE_APP_LOGIN_URL + process.env.VUE_APP_REDIRECTURL)
    window.location = process.env.VUE_APP_LOGIN_URL + process.env.VUE_APP_REDIRECTURL
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
