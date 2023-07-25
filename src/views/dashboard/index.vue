<template>
  <div class="layout">
    <div class="panel-box">
      <el-row type="flex" justify="space-between">
        <el-col :span="1">
          <svg-icon icon-class="user" class="dashIcon" />
        </el-col>
        <el-col :span="23">
          <div class="user">您好，{{ userName }}</div>
          <div>{{ currentTime | parseTime('{y}年{m}月{d}日，周{a}') }}，欢迎回到运营中心</div>
        </el-col>
      </el-row>
    </div>

    <div v-for="block in menuList" :key="block.title">
      <div v-if="block.show" class="panel-box">
        <h4 class="panel-header">{{ block.title }}</h4>
        <div class="menu-style">
          <div v-for="(menu, index) in block.menuList" :key="index" class="menu-style-item">
            <div v-if="menu.show" @click="routerLinkTo(menu.router_link)">
              <div class="centerL">
                <svg-icon :icon-class="menu.logo" class="dashIcon" />
                <span class="menu-name">{{ menu.menu_name }}</span>
              </div>
              <div class="menu-desc">{{ menu.menu_describe }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parseTime } from '@/utils'
import { mapGetters } from 'vuex'
import boardMenu from '../../../config/dashboard.json'

export default {
  name: 'app-home',
  data() {
    return {
      menuList: boardMenu,
    }
  },
  computed: {
    ...mapGetters(['userName']),
    currentTime() {
      return new Date().getTime()
    },
    newYearTime() {
      return parseTime(1707494400 - new Date().getTime(), '{d}天{h}小时{m}分钟{s}秒')
    },
  },
  created() {},
  methods: {
    routerLinkTo(router) {
      this.$router.push(`/${router}`)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';

.layout {
  position: relative;
  background: #f5f7f9;
  width: 100%;
  height: 100%;
  padding: 20px;

  .panel-box {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 18px 20px;
    box-shadow: 5px 5px 10px rgba(207, 211, 229, 0.5);
    overflow: auto;
    text-align: left;
    color: #595959;

    .user {
      line-height: 2.7;
    }

    .dashIcon {
      margin-top: 14px;
      font-size: 26px;
      cursor: pointer;
    }
  }
}

.panel-box .num {
  font-size: 26px;
  font-weight: 600;
  color: #262626;
}

.panel-header {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 700;
}

.menu-style {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.menu-style-item {
  margin-bottom: 16px;
  margin-right: 16px;
  padding: 20px;
  width: calc((100% - 32px) / 3);
  min-width: 257px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
}

.menu-style-item:nth-child(3n) {
  margin-right: 0;
}

.centerL {
  flex-wrap: nowrap;
  margin-bottom: 10px;

  .iconfont_menu {
    color: #467ff7;
    font-size: 30px;
  }

  .menu-name {
    margin-left: 10px;
    font-size: 18px;
    color: #262626;
  }
}

.menu-desc {
  margin-top: 10px;
  font-size: 16px;
  height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.menu-style-item:hover .menu-name {
  color: #467ff7;
}

@media screen and (max-width: 1230px) {
  .menu-style-item {
    width: calc(50% - 8px);
  }

  .menu-style-item:nth-child(3n) {
    margin-right: 16px;
  }

  .menu-style-item:nth-child(2n) {
    margin-right: 0;
  }
}
</style>
