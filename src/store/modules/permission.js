import { asyncRoutes } from '@/router'

function generateMenuList(menu) {
  // data是传入的菜单，[]
  const res = JSON.parse(JSON.stringify(menu))
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < asyncRoutes.length; j++) {
      if (res[i].children) {
        // 菜单有children，说明有二级菜单
        res[i].path = `/${res[i].code}`
        res[i].meta = { icon: res[i].icon, title: res[i].desc }
        res[i].children = generateMenuList(res[i].children)
      } else if (res[i].code === asyncRoutes[j].name) {
        res[i].path = asyncRoutes[j].path
        res[i].meta = { title: res[i].desc, icon: res[i].icon }
        if (asyncRoutes[j].children && asyncRoutes[j].children.length > 0) {
          res[i].children = []
          asyncRoutes[j].children.forEach((item) => {
            res[i].children.push({
              path: item.path,
              activeMenu: item.meta.activeMenu,
              hidden: true,
              main: item.meta.main,
            })
          })
        }
      }
    }
  }
  return res
}

function generateRouteList(menu, res = []) {
  for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < asyncRoutes.length; j++) {
      if (menu[i].children) {
        generateRouteList(menu[i], res)
      } else if (menu[i].code === asyncRoutes[j].name) {
        res.push(asyncRoutes[j])
      }
    }
  }
  return res
}
const state = {
  columnList: {
    websiteData: [],
    operationData: [],
  },
  routerList: [],
  activeColumn: 'operation',
  menuData: [],
}

const mutations = {
  SET_COLUMN_LIST: (state, data) => {
    state.columnList = data
  },
  SET_ROUTE_LIST: (state, data) => {
    state.routerList = data
  },
  SET_ACTIVE_MENU: (state, data) => {
    state.activeColumn = data
  },
  SET_MENU_DATA: (state, data) => {
    state.menuData = data
  },
}

const actions = {
  generateMenuRoutes({ commit, state }) {
    // data 取代 menuData
    return new Promise((resolve) => {
      const menuList = generateMenuList(state.menuData)
      const columnList = {
        websiteData: [],
        operationData: [],
      }
      for (let i = 0; i < menuList.length; i++) {
        columnList[`${menuList[i].column}Data`].push(menuList[i]) // 栏目
      }
      commit('SET_COLUMN_LIST', columnList)
      const routeList = generateRouteList(state.menuData)
      routeList.push({ path: '*', redirect: '/404' }) // 404路由重定向要放到最后
      commit('SET_ROUTE_LIST', routeList)
      resolve(routeList)
    })
  },
  changeActiveColumn({ commit }, data) {
    commit('SET_ACTIVE_MENU', data)
  },
  initMenuData({ commit }) {
    const menuData = require('./data').default // 待使用接口替代
    commit('SET_MENU_DATA', menuData)
  },
  initActiveColumn({ commit, state }, data) {
    // 确定所属哪个栏目
    // data是传入的路由
    const code = data.split('/')[1]
    const findMenuData = (menuData, arr = [], column = '') => {
      menuData.forEach((item) => {
        if (item.children) {
          column = item.column
          findMenuData(item.children, arr, column)
        } else {
          item.column = item.column || column
          arr.push(item)
        }
      })
    }
    const spread = [
      // 概览页固定存在，不需要接口传入
      {
        code: 'dashboard',
        column: 'dashboard',
      },
    ]
    findMenuData(state.menuData, spread)
    spread.forEach((item) => {
      if (item.code == code) {
        state.activeColumn = item.column
      }
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
