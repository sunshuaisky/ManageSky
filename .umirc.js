// ref: https://umijs.org/config/
import { resolve } from 'path';

export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'managesky',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  alias: {
    components: resolve(__dirname, './src/components'),
    config: resolve(__dirname, './src/utils/config'),
    utils: resolve(__dirname, './src/utils'),
    services: resolve(__dirname, './src/services'),
  },
  routes: [
    {
      path: '/login',
      component: 'Login',
    },
    {
      path: '/',
      component: '../layouts',
      routes: [
        {
          path: '/',
          redirect: '/dashboard/analysis',
        },
        {
          path: '/dashboard',
          routes: [
            {
              path: '/dashboard/analysis',
              component: 'Dashboard/Analysis',
            },
            {
              path: '/dashboard/monitor',
              component: 'Dashboard/Monitor',
            },
            {
              path: '/dashboard/workplace',
              component: 'Dashboard/Workplace',
            },
          ],
        },
        {
          path: '/card',
          component: 'Card',
        },
        {
          path: '/literature',
          component: 'Literature',
        },
      ],
    },
  ],
};
