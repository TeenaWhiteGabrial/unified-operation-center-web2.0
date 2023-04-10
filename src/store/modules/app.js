const state = {
  sidebar: {
    sideBarStatus: 0,
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {//展开
    state.sidebar.sideBarStatus = 2
  },
  CLOSE_SIDEBAR: state => {//收缩
    state.sidebar.sideBarStatus = 1
  },
  NO_SIDEBAR:state =>{//隐藏
    state.sidebar.sideBarStatus = 0
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }) {
    commit('CLOSE_SIDEBAR')
  },
  noSideBar({ commit }){
    commit('NO_SIDEBAR')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
