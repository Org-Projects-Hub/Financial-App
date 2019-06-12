// import { getLocalStorage, setLocalStorage } from '../utils/utils.ts';

 const URL: any = "http://localhost:3007";
 export default {a: "a"};
//
// const API = {
//   checkToken: URL+ "/check-token",
//   login: URL + "/login",
//   signup: URL + "/signup",
// }
//
// function header() {
//   return { "Content-Type": "application/json" };
// }
//
// function authHeader() {
//   let user = getLocalStorage("user");
//   let authtoken = getLocalStorage("token");
//   let email = user? user.email: null;
//   return { "Content-Type": "application/json", email, authtoken };
// }
//
// function get(url) {
//   return fetch(url, { method: 'GET', headers: header() })
//     .then(response => response.json());
// }
//
// function authGet(url) {
//   return fetch(url, { method: 'GET', headers: authHeader() })
//     .then(response => response.json());
// }
//
// function post(url, body) {
//     return fetch(url, { method: 'POST', headers: header(), body: JSON.stringify(body) })
//       .then(response => response.json());
// }
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
// export default {
//   checkToken: function() {
//      return authGet(API.checkToken);
//   },
//
//   login: function({email, password}) {
//     return post(API.login, {email, password });
//   },
//
//   signup: function({email, password, firstName, lastName, imageUrl}) {
//     return post(API.signup, { email, password, firstName, lastName, imageUrl });
//   }
// };
