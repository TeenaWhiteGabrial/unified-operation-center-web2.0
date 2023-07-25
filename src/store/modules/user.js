import { getTenantIdByUrl, login, logout, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    userName: '',
    avatar: '', // 运营中心logo
    tenantId: '',
    isLogin: false,
    userRole: '',
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_NAME: (state, name) => {
    state.userName = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_TENANTID: (state, tenantId) => {
    state.tenantId = tenantId
  },
  SET_IS_LOGIN: (state, isLogin) => {
    state.isLogin = isLogin
  },
  SET_USER_ROLE: (state, role) => {
    state.userRole = role
  },
}

const actions = {
  // getTenantID
  getTenantId({ commit }) {
    const appUrl = location.host
    return new Promise((resolve, reject) => {
      getTenantIdByUrl(appUrl)
        .then((response) => {
          if (response.success == 'success') {
            const data = response.data.tenant_id
            commit('SET_TENANTID', data)
            resolve()
          } else {
            reject()
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // user login
  login({ commit }, code) {
    return new Promise((resolve, reject) => {
      login({
        tenant_id: state.tenantId,
        code,
        redirect_uri: process.env.VUE_APP_REDIRECTURL,
      })
        .then((response) => {
          if (response.data.TYPE === '运营中心') {
            commit('SET_TOKEN', response.data.access_token)
            commit('SET_TOKEN', response.data.access_token)
            setToken(response.data.access_token)

            const newUrl = `${location.protocol}//${location.host}${location.pathname}`
            window.history.replaceState(
              {
                path: newUrl,
              },
              '',
              newUrl,
            )
            console.info('登录成功')
            resolve()
          } else {
            console.error('非运营中心账号！')
            reject()
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // get user info
  getUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then((response) => {
          commit('SET_USER_NAME', response.data.user_name)
          commit('SET_AVATAR', response.data.logo)
          commit('SET_TENANTID', response.data.tenant_id)
          commit('SET_IS_LOGIN', true)
          commit('SET_USER_ROLE', response.data.user_role)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          removeToken() // must remove  token  first
          resetRouter()
          commit('RESET_STATE')
          console.info(
            '退出成功！',
            process.env.VUE_APP_LOGIN_URL + process.env.VUE_APP_REDIRECTURL,
          )

          // window.location = process.env.VUE_APP_LOGIN_URL + process.env.VUE_APP_REDIRECTURL
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
