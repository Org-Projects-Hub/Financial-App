import { authGet, post, authPost, authPut } from './request';
import { API } from './routes';

export default {
//User
  login: function({ email, password }: any) {
    return post(API.login, { email, password });
  },
  signup: function({email, password, firstName, lastName, username}: any) {
    return post(API.signup, {email, password, firstName, lastName, username});
  },
  auth: function(){
    return authPost(API.auth,{});
  },

  //Students
  answer: function({ q_id, typesType, answer } : any){
    return authPut(API.answer, {q_id, typesType, answer});
  },
  addClass: function({code} : any){
    return authPost(API.addClass, {code});
  },
  getClass: function(){
    return authGet(API.getClass);
  },

//Teacher
  getStudent: function(){
    return authGet(API.getStudent);
  },
  createClass : function ({ className, school } : any){
    return authPut(API.createClass, { className, school });
  },
  verifyStudent : function ({ code, s_id } : any){
    return authPost(API.verifyStudent, { code, s_id });
  }
};
