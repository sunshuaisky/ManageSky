import * as loginService from './service.js';
import router from 'umi/router';
import { notification } from 'antd';

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
  subscriptions: {
    setup({ dispatch, history }) { // eslint-disable-line

    },
  },
  effects: {
    * login({ payload }, { call, put }) {
      try {
        const res = yield call(loginService.login, payload);
        yield put({
          type: 'loading',
        });
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
