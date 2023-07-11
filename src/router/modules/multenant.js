import Layout from '@/layout'

const multenantRoute = {
  path: '/multenant',
  component: Layout,
  name: 'multenant',
  meta: {},
  children: [
    {
      path: '/list',
      component: () => import('@/views/tenant/list'),
      name: 'tenant-list',
      meta: {
        showMenu: true, // 是否为菜单
        menuName: '租户管理', // 菜单名称
        owningColumn: 'multenantRoute',
        children: [
          {
            path: '/tenant-list-1',
            name: '租户管理列表-分列表',
          },
        ],
      },
    },
    {
      path: '/tenant-detail',
      component: () => import('@/views/tenant/detail'),
      name: 'tenant-detail',
      meta: {
        showMenu: false,
        owningMenu: '/tenant-list', // 所属菜单
        owningColumn: 'multenantRoute',
      },
    },
    {
      path: '/tenant-edit',
      component: () => import('@/views/tenant/edit'),
      name: 'tenant-detail',
      meta: {
        showMenu: false,
        owningMenu: '/tenant-list',
        owningColumn: 'multenantRoute',
      },
    },
    {
      path: '/tenant-add',
      component: () => import('@/views/tenant/edit'),
      name: 'tenant-detail',
      meta: {
        showMenu: false,
        owningMenu: '/tenant-list',
        owningColumn: 'multenantRoute',
      },
    },
    {
      path: '/tenant-list-1',
      component: () => import('@/views/tenant/list-1'),
      name: 'tenant-list',
      meta: {
        showMenu: false,
        owningMenu: '/tenant-list',
        owningColumn: 'multenantRoute',
      },
    },
  ],
}

export default multenantRoute
