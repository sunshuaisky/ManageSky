import request from '@/utils/request';

export function login(params) {
  return request('/api/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  });
}