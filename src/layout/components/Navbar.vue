<template>
  <div class="navbar">
    <img  :src="avatar" class="icon_logo" id="云洲LOGO" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"/>
    <label class="project-title">运营中心</label>
    <div class="project-menu">
      <div class="menu-all">
        <label v-for="menu in menuList" :class="['menu-item', {'active-item': activeMenu === menu.code}]" @click="changeMenu(menu)">{{ menu.title }}</label>
      </div>
      <el-dropdown class="user-style pointer">
        <svg-icon icon-class="user" class="userIcon"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>您好，{{ userName }}</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import { getToken } from '@/utils/auth' // get token from cookie

export default {
  data() {
    return {
      loginUrl: '',
      menuList: [
        {
          title: '概览',
          route:'/dashboard',
          code:'overview'
        },
        {
          title: '门户管理',
          route: '/content',
          code: 'portal'
        },
        {
          title: '运营管理',
          route: '/product',
          code: 'operate'
        },
        {
          title: '多租户管理',
          route: '/tenant-list',
          code: 'multenand'
        },
        {
          title: '运营统计',
          route: '/platform-statistics',
          code: 'statistics'
        },
        {
          title: '工单管理',
          route: '/order-list',
          code: 'order'
        },
      ],
      activeMenu:'dashboard'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'userName'
    ])
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      if (store.getters.tenantId === '') {
        await store.dispatch('user/getTenantId')
      }
      // 当有code时，进行登录
      const hasToken = getToken()
      const hash = location.hash
      const codeIndex = hash.indexOf('code=')
      
      if (codeIndex > -1) {
        await store.dispatch('user/login', hash.substring(codeIndex + 5))
        await store.dispatch('user/getUserInfo')
      } else if (hasToken) {
        await store.dispatch('user/getUserInfo')
      } else { //没有code，没有token，跳转到maxkey登录页面
        console.log(process.env.VUE_APP_LOGIN_URL + process.env.VUE_APP_REDIRECTURL)
        window.location = process.env.VUE_APP_LOGIN_URL + process.env.VUE_APP_REDIRECTURL
      }
    },
    changeMenu(menu) {
      this.activeMenu = menu.code
    },
    async logout() {
      await store.dispatch('user/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  transition: width 0.28s;
  display: flex;

  .icon_logo {
    height: 50px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .project-title {
    margin-left: 20px;
    padding-top: 14px;
    font-size: 20px;
  }

  .project-menu {
    display: flex;
    flex: 1;
    justify-content: space-between;

    .menu-all {
      display: flex;
      padding-top: 16px;

      .menu-item {
        margin-left: 20px;
        font-size: 16px;
        color: #262626;
        cursor: pointer;
      }
      .active-item{
        font-weight: bolder;
      }
    }

    .user-style {
      width: 100px;
      height: 50px;
      line-height: 50px;
      padding-right: 30px;
      text-align: right;

      .userIcon {
        margin-top: 14px;
        font-size: 26px;
        cursor: pointer;
      }
    }
  }

}
</style>
