import { getLocalStorage, setLocalStorage } from '../utils/utils';

 const URL: any = "http://35.192.177.69";
//
//
 const API = {
   login: URL + "/login",
   signup: URL + "/signup",
   auth: `${URL}/auth`,
   answer: `${URL}/answer`,
   edit: `${URL}/edit`
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
function authPost(url : string, body : any) {
  return fetch(url, { method: 'POST', headers: authHeader(), body: JSON.stringify(body) })
  .then(response => response.json());
}

// function put(url, body) {
//   //todo
// }
//
function authPut(url : string, body : any) {
  return fetch(url, { method: 'PUT', headers: authHeader(), body: JSON.stringify(body) })
  .then(response => response.json());
}

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
  },
  answer: function({q_id, typesType, answer} : any){
    return authPut(API.answer, {q_id, typesType, answer});
  },
  addClass: function({code} : any){
    return authPost(API.addClass, {code});
  },
  getClass: function({code} : any){
    return authPost(API.getClass, {code});
  }
};
