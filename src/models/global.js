import * as globalService from '@/services/global.js';
import { notification } from 'antd';
import router from 'umi/router';

export default {
  namespace: 'global',
  state: {
    collapsed: false,
  },
  reducers: {
    changeLayoutCollapsed(state) {
      state.collapsed = !state.collapsed;
      return {
        ...state
      }
    },
  },
  effects: {
    * logout({
      payload
    }, {
      call,
      put
    }) {
      try {
        const res = yield call(globalService.logout, payload);
        router.push('/login');
      } catch (e) {
        notification.error({
          message: '退出失败！',
          description: e
        });
      }
    },
  }
}
