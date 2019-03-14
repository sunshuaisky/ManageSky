import request from '@/utils/request';

export function logout() {
  return request('/api/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    credentials: 'include',
  });
}

export function isLogin() {
  return request('/api/isLogin', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    credentials: 'include',
  });
}