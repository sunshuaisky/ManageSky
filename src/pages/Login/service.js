import request from '@/utils/request';

export function login(params) {
  return request('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    credentials: 'include',
    body: JSON.stringify(params)
  });
}