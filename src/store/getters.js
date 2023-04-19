const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  userName: state => state.user.userName,
  userType: state => state.user.userType,
  tenantId: state => state.user.tenantId,
  isLogin: state => state.user.isLogin,
}
export default getters
