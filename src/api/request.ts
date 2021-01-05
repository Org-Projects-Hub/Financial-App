import { authHeader, header } from './header';

const handleResponse = async (response: any) => {
  let res = await response.json();
  if (!response.ok) throw Error(`${res.message}`);
  return res;
};

function get(url: string) {
  return fetch(url, { method: 'GET', headers: header() }).then(handleResponse);
}

function authGet(url: string, param: string) {
  return fetch(url + param, { method: 'GET', headers: authHeader() }).then(
    handleResponse
  );
}

function post(url: string, body: object) {
  return fetch(url, {
    method: 'POST',
    headers: header(),
    body: JSON.stringify(body),
  }).then(handleResponse);
}

function authPost(url: string, body: any) {
  return fetch(url, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(body),
  }).then(handleResponse);
}

function authPut(url: string, body: any) {
  return fetch(url, {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify(body),
  }).then(handleResponse);
}

export { get, authGet, post, authPost, authPut };
