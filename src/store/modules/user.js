import { getTenantIdByUrl, login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    userName: '',
    avatar: '',// 运营中心logo
    userType: '',
    tenantId: '',
    isLogin: false
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
  SET_USER_TYPE: (state, userType) => {
    state.userType = userType
  },
  SET_TENANTID: (state, tenantId) => {
    state.tenantId = tenantId
  },
  SET_IS_LOGIN: (state, isLogin) => {
    state.isLogin = isLogin
  }
}

const actions = {
  // getTenantID
  getTenantId({ commit }) {
    const appUrl = location.host;
    return new Promise((resolve, reject) => {
      getTenantIdByUrl(appUrl).then((response) => {
        if (response.success == 'success') {
          const data = response.data.tenant_id
          commit('SET_TENANTID', data)
          resolve()
        } else {
          reject()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user login
  login({ commit }, code) {
    return new Promise((resolve, reject) => {
      login({ tenant_id: state.tenantId, code: code, redirect_uri: process.env.VUE_APP_REDIRECTURL })
        .then(response => {
          const { data } = response
          // commit('SET_TOKEN', data.token)
          //setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          const { data } = response

          if (!data) {
            return reject('Verification failed, please Login again.')
          }

          const { name, avatar, userType, tenantId } = data

          commit('SET_USER_NAME', name)
          commit('SET_AVATAR', avatar)
          commit('SET_USER_TYPE', userType)
          commit('SET_TENANTID', tenantId)
          commit('SET_IS_LOGIN', true)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken() // must remove  token  first
          resetRouter()
          commit('RESET_STATE')
          resolve()
        }).catch(error => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

