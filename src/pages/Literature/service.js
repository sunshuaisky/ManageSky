import request from '@/utils/request';

export function getBookList(params) {
  return request('/api/getBookList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify(params),
  });
}
