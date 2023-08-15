<template>
  <div>
    <!-- 该组件进来只会走一种情况，走了菜单逻辑就不再递归 -->
    <!-- 菜单 -->
    <template v-if="hasOneShowingChild(item.children, item)">
      <el-menu-item
        :index="resolvePath(onlyOneChild.path)"
        @click="handleClick(resolvePath(onlyOneChild.path))"
      >
        <svg-icon :icon-class="onlyOneChild.meta.icon" class="menuIcon" />
        <span>{{ onlyOneChild.meta.title }}</span>
      </el-menu-item>
    </template>
    <!-- 菜单目录（可收缩） -->
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <svg-icon :icon-class="item.meta.icon" class="menuIcon" />
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="resolvePath(child.path)"
        :item="child"
        :base-path="child.path"
      />
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
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      let path = ''
      const showingChildren = children.filter((item) => {
        if (item.main) {
          path = item.path
        }
        if (item.hidden) {
          return false
        }
        return true
      })
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path }
        return true
      }

      if (showingChildren.length === 1 && !parent.alwaysShow) {
        this.onlyOneChild = children[0]
        return true
      }

      return false
    },
    handleClick(path) {
      if (path !== this.$route.path) {
        this.$router.push(path)
      }
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    },
  },
  created() {
    // this.handleRoute()
  },
}
</script>

<style scoped>
.menuIcon {
}
</style>
