<template>
  <div class="side-bar-index">
    <el-scrollbar style="height: 100%">
      <el-menu
        :default-active="$route.path"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="false"
        active-text-color="#409EFF"
        :collapse-transition="false"
        mode="vertical"
      >
        <!-- 下面是主要实现功能的组件 -->
        <sidebar-item
          v-for="route in columnList[activeColumn + 'Data']"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  components: {
    SidebarItem,
  },
  computed: {
    ...mapGetters(['columnList', 'activeColumn']),
  },
}
</script>
