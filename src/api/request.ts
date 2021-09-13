import { authHeader, header } from './header';

const handleFetchFail = () => {
  throw {
    status: 404,
    message: "Can't connect to server! Please refresh the page and try again.",
  };
};

const handleResponse = async (response: any) => {
  let res = await response.json();

  if (!response.ok) throw { ...res, status: response.status };
  return res;
};

function get(url: string) {
  return fetch(url, { method: 'GET', headers: header() })
    .catch(handleFetchFail)
    .then(handleResponse);
}

function authGet(url: string, param: string) {
  return fetch(url + param, { method: 'GET', headers: authHeader() })
    .catch(handleFetchFail)
    .then(handleResponse);
}

function post(url: string, body: object) {
  return fetch(url, {
    method: 'POST',
    headers: header(),
    body: JSON.stringify(body),
  })
    .catch(handleFetchFail)
    .then(handleResponse);
}

function authPost(url: string, body: any) {
  return fetch(url, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(body),
  })
    .catch(handleFetchFail)
    .then(handleResponse);
}

function authPut(url: string, body: any) {
  return fetch(url, {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify(body),
  })
    .catch(handleFetchFail)
    .then(handleResponse);
}

export { get, authGet, post, authPost, authPut };
