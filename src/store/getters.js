const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  userName: (state) => state.user.userName,
  tenantId: (state) => state.user.tenantId,
  isLogin: (state) => state.user.isLogin,
  columnList: (state) => state.permission.columnList,
  routerList: (state) => state.permission.routerList,
  activeColumn: (state) => state.permission.activeColumn,
}
export default getters
