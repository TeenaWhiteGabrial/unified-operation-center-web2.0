/* Layout */
import Layout from '@/layout'

export default [
  {
    path: '/basic-config',
    name: 'basic-config',
    component: Layout,
    redirect: '/basic-config/list',
    meta: { title: '基础配置', icon: 'basic-config' },
    children: [
      {
        path: 'list',
        name: 'basicConfigList',
        component: () => import('@/views/basic-config/list'),
        meta: { title: '列表', activeMenu: '/basic-config/list', main: true },
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/views/basic-config/detail'),
        meta: { title: '详情' },
      },
      {
        path: 'edit',
        name: 'edit',
        component: () => import('@/views/basic-config/edit'),
        meta: { title: '编辑' },
      },
    ],
  },
  {
    path: '/sub-station',
    name: 'sub-station',
    component: Layout,
    meta: { title: '子站管理', icon: 'sub-station' },
  },
  {
    path: '/column-config',
    name: 'column-config',
    component: Layout,
    meta: { title: '栏目管理', icon: 'column-config' },
  },
  {
    path: '/banner-config',
    name: 'banner-config',
    component: Layout,
    meta: { title: 'banner配置', icon: 'banner-config' },
  },
  {
    path: '/floor-config',
    name: 'floor-config',
    component: Layout,
    meta: { title: '楼层配置', icon: 'floor-config' },
  },
  {
    path: '/footer-config',
    name: 'footer-config',
    component: Layout,
    meta: { title: '底部信息', icon: 'footer-config' },
  },
  {
    path: '/param-config',
    name: 'param-config',
    component: Layout,
    meta: { title: '参数配置', icon: 'param-config' },
  },
  {
    path: '/eco-partner-config',
    name: 'eco-partner-config',
    component: Layout,
    meta: { title: '生态伙伴配置', icon: 'eco-partner-config' },
  },
  {
    path: '/developer-center-config',
    name: 'developer-center-config',
    component: Layout,
    meta: { title: '开发者中心配置', icon: 'developer-center-config' },
  },
]
