import * as globalService from '@/services/global.js';
import { notification } from 'antd';
import router from 'umi/router';
import localEvent from 'utils/local';

export default {
  namespace: 'global',
  state: {
    collapsed: false,
    userInfo: localEvent.StorageGetter('USER_INFO') || {userName: ''}
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
        yield call(globalService.logout, payload);
        router.push('/login');
      } catch (e) {
        notification.error({
          message: '退出失败！',
          description: e
        });
      }
    },
    * isLogin({
      payload
    }, {
      call,
      put
    }) {
      try {
        yield call(globalService.isLogin, payload);
      } catch (e) {
        console.log(e)
      }
    },
  },
}
