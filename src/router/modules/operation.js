/* Layout */
import Layout from '@/layout'

export default [
  {
    path: '/content',
    name: 'content',
    component: Layout,
    meta: { title: '内容管理', icon: 'content' }, //
  },
  {
    path: '/production',
    name: 'production',
    component: Layout,
    meta: { title: '产品管理', icon: 'production' },
  },
  {
    path: '/solution',
    name: 'solution',
    component: Layout,
    meta: { title: '解决方案管理', icon: 'solution' },
  },
  {
    path: '/case',
    name: 'case',
    component: Layout,
    meta: { title: '应用案例管理', icon: 'case' },
  },
  {
    path: '/supply',
    name: 'supply',
    component: Layout,
    meta: { title: '供给管理', icon: 'supply' },
  },
  {
    path: '/demand',
    name: 'demand',
    component: Layout,
    meta: { title: '需求管理', icon: 'demand' },
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    meta: { title: '用户管理', icon: 'user' },
  },
  {
    path: '/company',
    name: 'company',
    component: Layout,
    meta: { title: '企业管理', icon: 'company' },
  },
  {
    path: '/consult',
    name: 'consult',
    component: Layout,
    meta: { title: '客户留资', icon: 'consult' },
  },
  {
    path: '/eco-company',
    name: 'eco-company',
    component: Layout,
    meta: { title: '生态公司管理', icon: 'eco-company' },
  },
  {
    path: '/eco-production',
    name: 'eco-production',
    component: Layout,
    meta: { title: '生态产品管理', icon: 'eco-production' },
  },
  {
    path: '/eco-certificate',
    name: 'eco-certificate',
    component: Layout,
    meta: { title: '生态证书管理', icon: 'eco-certificate' },
  },
  {
    path: '/eco-template',
    name: 'eco-template',
    component: Layout,
    meta: { title: '生态模板管理', icon: 'eco-template' },
  },
  {
    path: '/eco-lecturehall',
    name: 'eco-lecturehall',
    component: Layout,
    meta: { title: '生态大讲堂管理', icon: 'eco-lecturehall' },
  },
]
