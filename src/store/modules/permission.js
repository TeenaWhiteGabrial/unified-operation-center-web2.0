import { asyncRoutes } from '@/router'
const menuData = [
  {
    code: 'basic-config', //菜单code，对应路由path
    desc: '基本配置', //菜单名称
    column: 'website', // 所属 栏目
    icon: 'content', //使用图标
  },
  {
    code: 'sub-station',
    desc: '子站管理',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'column-config',
    desc: '栏目配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'banner-config',
    desc: 'banner配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'floor-config',
    desc: '楼层配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'footer-config',
    desc: '底部配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'param-config',
    desc: '参数配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'eco-partner-config',
    desc: '生态伙伴配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'developer-center-config',
    desc: '开发者中心配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'content',
    desc: '内容管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'production',
    desc: '产品管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'solution',
    desc: '解决方案管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'case',
    desc: '应用案例管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'supply-demand',
    desc: '供需管理',
    column: 'operation',
    alwaysShow: false, //当只有一个子菜单时，是否用子菜单替代父菜单
    icon: 'content',
    children: [
      {
        code: 'supply',
        desc: '供给管理',
        icon: 'content',
      },
      {
        code: 'demand',
        desc: '需求管理',
        icon: 'content',
      },
    ],
  },
  {
    code: 'user',
    desc: '用户管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'company',
    desc: '企业管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'consult',
    desc: '客户留资',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'eco',
    alwaysShow: false,
    desc: '生态管理',
    column: 'operation',
    icon: 'content',
    children: [
      {
        code: 'eco-company',
        desc: '生态公司管理',
        icon: 'content',
      },
      {
        code: 'eco-production',
        desc: '生态产品管理',
        icon: 'content',
      },
      {
        code: 'eco-certificate',
        desc: '生态证书管理',
        icon: 'content',
      },
      {
        code: 'eco-template',
        desc: '生态模板管理',
        icon: 'content',
      },
      {
        code: 'eco-lecturehall',
        desc: '生态大讲堂管理',
        icon: 'content',
      },
    ],
  },
]

function generateMenuList(menu) {
  //data是传入的菜单，[]
  const res = JSON.parse(JSON.stringify(menu))
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < asyncRoutes.length; j++) {
      if (res[i].children) {
        //菜单有children，说明有二级菜单
        res[i].path = '/' + res[i].code
        res[i].meta = { icon: res[i].icon, title: res[i].desc }
        res[i].children = generateMenuList(res[i].children)
      } else if (res[i].code === asyncRoutes[j].name) {
        res[i].path = asyncRoutes[j].path
        res[i].meta = { title: res[i].desc, icon: res[i].icon }
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
  activeColumn: 'dashboard',
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
}

const actions = {
  generateMenuRoutes({ commit }, data) {
    // data 取代 menuData
    return new Promise((resolve) => {
      const menuList = generateMenuList(menuData)
      const columnList = {
        websiteData: [],
        operationData: [],
      }
      for (let i = 0; i < menuList.length; i++) {
        columnList[menuList[i].column + 'Data'].push(menuList[i]) //栏目
      }
      commit('SET_COLUMN_LIST', columnList)

      const routeList = generateRouteList(menuData)
      commit('SET_ROUTE_LIST', routeList)
      resolve(routeList)
    })
  },
  changeActiveColumn({ commit }, data) {
    commit('SET_ACTIVE_MENU', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
