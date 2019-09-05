import { authGet, post, authPost, authPut } from './request';
import { API } from './routes';
import { tsRestType } from '@babel/types';

export default {
  //User Route
  login: function({ email, password }: any) {
    return post(API.login, { email, password });
  },
  signup: function({email, password, firstName, lastName, username, isStudent}: any) {
    return post(API.signup, {email, password, firstName, lastName, username, isStudent});
  },
  auth: function(){
    return authPost(API.auth,{});
  },
  updateInfo: function({ field, value} : any){
    return authPost(API.updateInfo , {field, value});
  },
  getClass: function(){
    return authGet(API.getClass, '');
  },


  //Students Route
  addClass: function({code} : any){
    return authPut(API.addClass, {code});
  },
  answer: function({ q_id, typesType, answer } : any){
    return authPut(API.answer, {q_id, typesType, answer});
  },
  submitAnswer: function(testType : string){
    return authGet(API.getClass, ('/' + testType));
  },


  //Teacher Route
  getStudent: function( code : string){
    return authGet(API.getStudent, ('/' + code));
  },
  createClass : function ({ className, school } : any){
    return authPut(API.createClass, { className, school });
  },
  verifyStudent : function ({ code, s_id } : any){
    return authPost(API.verifyStudent, { code, s_id });
  }
};
