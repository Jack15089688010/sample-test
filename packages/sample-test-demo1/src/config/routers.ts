import hookPageRouterConfig from '../pages/hook-page/routers';
import testJackPageRouterConfig from '../pages/test-jack-page/routers';
import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const routerConfig: RoutersConfig = [
  // Insert New Router
  ...hookPageRouterConfig,
  ...testJackPageRouterConfig,
  {
    path: '/demo1/hello',
    component: () => import('../pages/hello/HelloDemo1Page'),
    authorized: true,
    title: '出库包裹单详情',
  },
  {
    path: '/demo99/searchpage',
    component: () => import('../pages/hello/searchPage'),
    authorized: true,
    title: '搜索界面',
  },
  {
    path: '/demo2/detail',
    component: () => import('../pages/hello/detail'),
    authorized: true,
    title: '出库单详情',
  },
  {
    path: '/demo2/hello',
    component: () => import('../pages/hello/HelloDemo2Page'),
    authorized: true,
    title: '出库单',
  },
  {
    path: '/demo1/demo-page',
    component: () => import('../pages/hello/DemoPage'),
    authorized: true,
    title: '出库包裹单',
  },
  {
    path: '/project2/base-info',
    component: () => import('../pages/test-jack-page/baseInfo'),
    authorized: true,
    title: '仓库基本信息管理',
  }
];

export default routerConfig ;
