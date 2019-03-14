import * as loginService from './service.js';
import router from 'umi/router';
import { notification } from 'antd';
import localEvent from 'utils/local';

notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
});

export default {
  namespace: 'login',
  state: {
    loading: false,
  },
  reducers: {
    'loading'(state) {
      state.loading = !state.loading;
      return {
        ...state
      }
    },
  },
  effects: {
    * login({ payload }, { call, put }) {
      try {
        const res = yield call(loginService.login, payload);
        yield put({
          type: 'loading',
        });
        localEvent.StorageSetter('USER_INFO', res.data);
        router.push('/');
      } catch (e) {
        yield put({
          type: 'loading',
        });
        notification.error({
          message: '登录失败！',
          description: e
        });
      }
    },
  }
}
