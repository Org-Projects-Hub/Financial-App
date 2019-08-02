import { getLocalStorage, setLocalStorage } from '../utils/utils';

 const URL: any = "http://35.192.177.69";
//
//
 const API = {
   login: URL + "/login",
   signup: URL + "/signup",
   auth: `${URL}/auth`
 }

function header() {
  return { "Content-Type": "application/json" };
}

function authHeader() {
  let authtoken = getLocalStorage("token");
  console.log(authtoken)
  return { "Content-Type": "application/json", token: authtoken };
}



function get(url: string) {
  return fetch(url, { method: 'GET', headers: header() })
    .then(response => response.json());
}

function authGet(url: string) {
  return fetch(url, { method: 'POST', headers: authHeader() })
    .then(response => response.json());
}


function post(url: string, body: object) {
    return fetch(url, { method: 'POST', headers: header(), body: JSON.stringify(body) })
      .then(response => response.json());
}
//
// function headerPost(url, body, header) {
//     return fetch(url, { method: 'POST', headers: { "Content-Type": "application/json", header }})
//       .then(response => response.json());
// }
//
// function authPost(url, body) {
//   return fetch(url, { method: 'POST', headers: authHeader(), body: JSON.stringify(body) })
//   .then(response => response.json());
// }
//
// function put(url, body) {
//   //todo
// }
//
// function authPut(url, body) {
//   return fetch(url, { method: 'PUT', headers: authHeader(), body: JSON.stringify(body) })
//   .then(response => response.json());
// }
//
//
export default {
  login: function({email, password}: any) {
    return post(API.login, {email, password });
  },

  signup: function({email, password, firstName, lastName, username}: any) {
    return post(API.signup, {email, password, firstName, lastName, username});
  },

  auth: function(){
    return authGet(API.auth);
  }
};
