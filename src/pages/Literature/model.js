import * as loginService from './service.js';
import { notification } from 'antd';

notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
});

export default {
  namespace: 'literature',
  state: {
    searchForm: [
      { name: '名称', type: 'input', fields: 'title', placeholder: '请输入名称' },
      { name: '作者', type: 'input', fields: 'author', placeholder: '请输入作者' },
      { name: '分类', type: 'select', fields: 'type', placeholder: '请选择分类' },
    ],
    list: [],
  },
  reducers: {
    list(state, action) {
      console.log(state);
      console.log(action);
      state.list = action.data;
      return {
        ...state,
      };
    },
  },
  effects: {
    *getList({ payload }, { call, put }) {
      try {
        const res = yield call(loginService.getBookList, payload);
        console.log(res);
        yield put({
          type: 'list',
          data: res.data,
        });
      } catch (e) {
        notification.error({
          message: '网络错误！',
          description: e,
        });
      }
    },
  },
};
