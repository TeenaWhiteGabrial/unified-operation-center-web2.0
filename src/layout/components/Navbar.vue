<template>
  <div class="navbar">
    <el-button @click="noSideBar">无菜单栏</el-button>
    <el-button @click="closeSideBar">缩放菜单栏</el-button>
    <el-button @click="toggleSideBar">展开菜单栏</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
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
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  transition: width 0.28s;
}
</style>
