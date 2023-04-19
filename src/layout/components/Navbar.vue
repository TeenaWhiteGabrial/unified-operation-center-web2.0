<template>
  <div class="navbar">
    <el-button @click="noSideBar">无菜单栏</el-button>
    <el-button @click="closeSideBar">缩放菜单栏</el-button>
    <el-button @click="toggleSideBar">展开菜单栏</el-button>
    <el-button @click="getTenantID">获取租户ID</el-button>
    <el-button @click="login">登录</el-button>
    <el-button @click="logout">登出</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loginUrl: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  created(){
    this.init()
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    closeSideBar() {
      this.$store.dispatch('app/closeSideBar')
    },
    noSideBar() {
      this.$store.dispatch('app/noSideBar')
    },
    async getTenantID(){
      this.$store.dispatch('user/getTenantId')
    },
    async login() {
      const hash = location.hash
      const codeIndex = hash.indexOf('code=')
      if(codeIndex > -1){
        this.$store.dispatch('user/login', hash.substring(codeIndex + 5))
      }else{
        window.location = process.env.VUE_APP_LOGIN_URL + process.env.VUE_APP_REDIRECTURL
      }
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
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
}
</style>
