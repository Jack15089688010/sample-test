import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  {
    path: '/sample-test-demo1/test-jack-page',
    component: () => import('./TestJackPagePage'),
    authorized: true,
    title: 'Hello-TestJackPage',
  },
];

export default config;
