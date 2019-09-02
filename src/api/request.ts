import { authHeader , header } from './header';

function get(url: string) {
  return fetch(url, { method: 'GET', headers: header() })
    .then(response => response.json());
}

function authGet(url: string, param : string) {
  return fetch(url + param, { method: 'GET', headers: authHeader() })
    .then(response => response.json());
}

function post(url: string, body: object) {
    return fetch(url, { method: 'POST', headers: header(), body: JSON.stringify(body) })
      .then(response => response.json());
}

function authPost(url : string, body : any) {
  return fetch(url, { method: 'POST', headers: authHeader(), body: JSON.stringify(body) })
  .then(response => response.json());
}

function authPut(url : string, body : any) {
  return fetch(url, { method: 'PUT', headers: authHeader(), body: JSON.stringify(body) })
  .then(response => response.json());
}

export { get, authGet, post, authPost, authPut };
