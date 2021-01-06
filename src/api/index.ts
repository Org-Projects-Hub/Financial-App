import { authGet, post, authPost, authPut } from './request';
import { API } from './routes';
import { tsRestType } from '@babel/types';

export default {
  //User Route
  login: function ({ email, password }: any) {
    return post(API.login, { email, password });
  },
  signup: function ({
    email,
    password,
    firstName,
    lastName,
    username,
    isStudent,
  }: any) {
    return post(API.signup, {
      email,
      password,
      firstName,
      lastName,
      username,
      isStudent,
    });
  },
  auth: function () {
    return authPost(API.auth, {});
  },
  updateInfo: function ({ email, field, value }: any) {
    return authPut(API.updateInfo, { field, value, email });
  },
  getClass: function () {
    return authGet(API.getClass, '');
  },

  //Students Route
  addClass: function ({ code }: any) {
    return authPut(API.addClass, { code });
  },
  answer: function ({ q_id, typesType, answer }: any) {
    return authPut(API.answer, { q_id, typesType, answer });
  },
  submitAnswer: function (testType: string) {
    return authGet(API.getClass, '/' + testType);
  },

  //Teacher Route
  getStudent: function (code: string) {
    return authGet(API.getStudent, '/' + code);
  },
  createClass: function ({ className, school }: any) {
    return authPut(API.createClass, { className, school });
  },
  verifyStudent: function ({ code, s_id }: any) {
    return authPost(API.verifyStudent, { code, s_id });
  },

  //Simulation Routes
  createOrRetriveSimulation: function () {
    return authGet(API.createOrRetriveSimulation, '');
  },
  updateSimulation: function (inProgress: string) {
    return authPut(API.updateSimulation, { inProgress });
  },

  updateTest: function ({ sim_id, testType, answers }: any) {
    return authPut(API.updateTest, { sim_id, testType, answers });
  },

  retriveTest: function (sim_id: string, testType: string) {
    return authGet(API.retriveTest, `/${testType}/${sim_id}`);
  },

  getJobNames: function () {
    return authGet(API.retriveJobNames, '');
  },

  getJobDetail: function (jobName: string) {
    return authGet(API.retriveJobDetail, jobName);
  },

  assignJob: function (sim_id: string, jobSelected: string) {
    return authPost(API.assignJob, { sim_id, jobSelected });
  },

  getAssignedJob: function (sim_id: string) {
    return authGet(API.getAssignedJob, sim_id);
  },
};
