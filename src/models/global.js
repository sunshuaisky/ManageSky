import * as globalService from '@/services/global.js';
import { notification } from 'antd';
import router from 'umi/router';
import localEvent from 'utils/local';

export default {
  namespace: 'global',
  state: {
    collapsed: false,
    userInfo: localEvent.StorageGetter('USER_INFO') || { userName: '' },
    menuList: [
      {
        id: 1,
        name: 'Dashboard',
        icon: 'dashboard',
        url: '/dashboard',
        childmenu: [
          {
            id: 1,
            name: '分析页',
            url: '/dashboard/analysis',
          },
          {
            id: 2,
            name: '监控页',
            url: '/dashboard/monitor',
          },
          {
            id: 3,
            name: '工作台',
            url: '/dashboard/workplace',
          },
        ],
      },
      {
        id: 2,
        name: 'Card',
        icon: 'pie-chart',
        childmenu: [],
        url: '/card',
      },
      {
        id: 3,
        name: 'Literature',
        icon: 'container',
        childmenu: [],
        url: '/literature',
      },
    ],
  },
  reducers: {
    changeLayoutCollapsed(state) {
      state.collapsed = !state.collapsed;
      return {
        ...state,
      };
    },
  },
  effects: {
    *logout({ payload }, { call, put }) {
      try {
        yield call(globalService.logout, payload);
        router.push('/login');
      } catch (e) {
        notification.error({
          message: '退出失败！',
          description: e,
        });
      }
    },
    *isLogin({ payload }, { call, put }) {
      try {
        yield call(globalService.isLogin, payload);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
