<template>
  <div>
    <!-- 该组件进来只会走一种情况，走了菜单逻辑就不再递归 -->
    <!-- 菜单 -->
    <template v-if="isShowOneMenu">
      <el-menu-item :index="data.path" @click="handleClick(data.path)">
        <svg-icon :icon-class="data.meta.icon" class="menuIcon" />
        <span>{{ data.meta.title }}</span>
      </el-menu-item>
    </template>
    <!-- 菜单目录（可收缩） -->
    <el-submenu v-else :index="item.path" popper-append-to-body>
      <template slot="title">
        <svg-icon :icon-class="item.meta.icon" class="menuIcon" />
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :item="child" />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      data: {}, // 当前组件处理过后的菜单信息
      isShowOneMenu: false, // 判断渲染el-menu-item还是el-submenu的标识
    }
  },
  methods: {
    /**
     * 区分路由是否是最后一层或者只有一个子路由
     * 当路由只有一个子路由时有两种情况，一种是不展示收缩了，直接将唯一的子路由作为菜单；另一种是展示收缩，展开下面只有一个子菜单的。由在路由信息中的属性alwaysShow定义。
     */
    handleRoute() {
      // 当递归到最后一层，路由已经没有children了
      if (!this.item.children) {
        this.isShowOneMenu = true
        this.data = { ...this.item }
        return
      }

      // 当只有一个子路由并且不展示收缩时做菜单处理，并且这个子路由没有children属性时
      if (
        this.item.children.length === 1 &&
        !this.item.children[0].children &&
        !this.item.alwaysShow
      ) {
        this.isShowOneMenu = true
        this.data = this.item.children[0]
        // 如果该路由有meta信息与子路由的meta信息做结合，已子路由的meta信息优先
        if (this.item.meta) {
          this.data.meta.title = this.data.meta.title ? this.data.meta.title : this.item.meta.title
          this.data.meta.icon = this.data.meta.icon ? this.data.meta.icon : this.item.meta.icon
        }
      }
    },
    handleClick(path) {
      console.log('path:', path)
      if (path !== this.$route.path) {
        console.log('route:', this.$route.path)
        this.$router.push(path)
      }
    },
  },
  created() {
    this.handleRoute()
  },
}
</script>

<style scoped>
.menuIcon {
}
</style>
