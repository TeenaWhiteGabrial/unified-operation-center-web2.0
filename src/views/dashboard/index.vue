<template>
    <div class="layout">
      <div class="panel-box">
          <el-row type="flex" justify="space-between">
              <el-col :span="1">
                  <svg-icon icon-class="user" class="dashIcon"/>
              </el-col>
              <el-col :span="23">
                  <div class="user">您好，{{ userName }}</div>
                  <div>{{ currentTime | parseTime('{y}年{m}月{d}日，周{a}') }}，欢迎回到运营中心</div>
              </el-col>
          </el-row>
      </div>
      
      <div class="panel-box">
          <h4 class="panel-header">门户管理</h4>
          <div class="menu-style">
              <div v-for="(item, index) in menuList" :key="index" class="menu-style-item" @click="routerLinkTo(item.router_link)">
                  <div class="centerL">
                      <svg-icon :icon-class="item.logo" class="dashIcon"/>
                      <span class="menu-name">{{ item.menu_name }}</span>
                  </div>
                  <div class="menu-desc">{{ item.menu_describe }}</div>
              </div>
          </div>
      </div>
      <div class="panel-box">
          <h4 class="panel-header">运营管理</h4>
          <div class="menu-style">
              <div v-for="(item, index) in yyglMenuList" :key="index" class="menu-style-item" @click="routerLinkTo(item.router_link)">
                  <div class="centerL">
                      <svg-icon :icon-class="item.logo" class="dashIcon"/>
                      <span class="menu-name">{{ item.menu_name }}</span>
                  </div>
                  <div class="menu-desc">{{ item.menu_describe }}</div>
              </div>
          </div>
      </div>
      <div class="panel-box">
          <h4 class="panel-header">多租户管理</h4>
          <div class="menu-style">
              <div class="menu-style-item" @click="routerLinkTo(`tenant-list`)">
                  <div class="centerL">
                      <svg-icon icon-class="tenant" class="dashIcon"/>
                      <span class="menu-name">租户管理</span>
                  </div>
                  <div class="menu-desc">通过新增租户的方式实现项目的快速创建、交付。</div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import { parseTime } from '@/utils'
import { mapGetters } from 'vuex'
export default {
  name: "app-home",
  data() {
    return {
      menuList: [
        {
          menu_name: "内容管理",
          menu_describe: "提供动态资讯创建、编辑、发布的功能服务。",
          router_link: "content",
          logo: "content"
        },
        {
          menu_name: "栏目管理",
          menu_describe: "可添加栏目，对栏目进行管理。",
          router_link: "column",
          logo: "column"
        },
        {
          menu_name: "门户配置",
          menu_describe: "对网站基础信息、网站页面等个性化信息进行设置。",
          router_link: "portal-configuration",
          logo: "portal"
        },
        {
          menu_name: "站点管理",
          menu_describe: "展示通过多租户方式开通的门户网站。",
          router_link: "site",
          logo: "site"
        },
        {
          menu_name: "生态伙伴",
          menu_describe: "对网站生态伙伴页面进行配置。",
          router_link: "partner",
          logo: "partner"
        },
      ],
      yyglMenuList: [
        {
          menu_name: "产品管理",
          menu_describe: "提供产品与服务创建、编辑、发布的功能服务。",
          router_link: "product",
          logo: "production"
        },
        {
          menu_name: "解决方案管理",
          menu_describe: "提供解决方案创建、编辑、发布的功能服务。",
          router_link: "solution",
          logo: "solution"
        },
        {
          menu_name: "应用案例",
          menu_describe: "提供应用案例创建、编辑、发布的功能服务。",
          router_link: "application-case",
          logo: "case"
        },
        {
          menu_name: "认证审核",
          menu_describe: "对实名认证企业进行审核。",
          router_link: "audit-authenticate",
          logo: "audit"
        }
      ],
    }
  },
  computed: {
    ...mapGetters([
      'userName'
    ]),
    currentTime() {
      return new Date().getTime()
    }
  },
  created() {
  },
  methods: {
    routerLinkTo(router) {
      this.$router.push("/" + router)
    },
  }
}
</script>
<style lang="scss" scoped>
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
