import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  {
    path: '/sample-test-demo1/hook-page',
    component: () => import('./HookPagePage'),
    authorized: true,
    title: 'Hello-HookPage',
  },
];

export default config;
