const menuData = [
  {
    code: 'basic-config', // 菜单code，对应路由path
    desc: '基本配置', // 菜单名称
    column: 'website', // 所属 栏目
    icon: 'content', // 使用图标
  },
  {
    code: 'sub-station',
    desc: '子站管理',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'column-config',
    desc: '栏目配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'banner-config',
    desc: 'banner配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'floor-config',
    desc: '楼层配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'footer-config',
    desc: '底部配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'param-config',
    desc: '参数配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'eco-partner-config',
    desc: '生态伙伴配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'developer-center-config',
    desc: '开发者中心配置',
    column: 'website',
    icon: 'content',
  },
  {
    code: 'content',
    desc: '内容管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'production',
    desc: '产品管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'solution',
    desc: '解决方案管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'case',
    desc: '应用案例管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'supply-demand',
    desc: '供需管理',
    column: 'operation',
    alwaysShow: false, // 当只有一个子菜单时，是否用子菜单替代父菜单
    icon: 'content',
    children: [
      {
        code: 'supply',
        desc: '供给管理',
        icon: 'content',
      },
      {
        code: 'demand',
        desc: '需求管理',
        icon: 'content',
      },
    ],
  },
  {
    code: 'user',
    desc: '用户管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'company',
    desc: '企业管理',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'consult',
    desc: '客户留资',
    column: 'operation',
    icon: 'content',
  },
  {
    code: 'eco',
    alwaysShow: false,
    desc: '生态管理',
    column: 'operation',
    icon: 'content',
    children: [
      {
        code: 'eco-company',
        desc: '生态公司管理',
        icon: 'content',
      },
      {
        code: 'eco-production',
        desc: '生态产品管理',
        icon: 'content',
      },
      {
        code: 'eco-certificate',
        desc: '生态证书管理',
        icon: 'content',
      },
      {
        code: 'eco-template',
        desc: '生态模板管理',
        icon: 'content',
      },
      {
        code: 'eco-lecturehall',
        desc: '生态大讲堂管理',
        icon: 'content',
      },
    ],
  },
]
export default menuData
