import { evaluationValsType } from 'types/shared';
import { authGet, post, authPost, authPut, get } from './request';
import { API } from './routes';

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
    organization,
  }: any) {
    return post(API.signup, {
      email,
      password,
      firstName,
      lastName,
      username,
      isStudent,
      organization,
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
  getOrganizationNames: () => {
    return authGet(API.getOrganizationNames, '');
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

  updateTest: function ({ testType, answers }: any) {
    return authPut(API.updateTest, { testType, answers });
  },

  retriveTest: function (testType: string) {
    return authGet(API.retriveTest, `/${testType}`);
  },

  getJobNames: function () {
    return authGet(API.retriveJobNames, '');
  },

  getJobDetail: function (jobName: string) {
    return authGet(API.retriveJobDetail, jobName);
  },

  assignJob: function (jobSelected: string) {
    return authPost(API.assignJob, { jobSelected });
  },

  getAssignedJob: function () {
    return authGet(API.getAssignedJob, '');
  },

  getBoothsInfo: function () {
    return get(API.getBoothsInfo);
  },

  getEvalVals: () => {
    return authGet(API.updateEvalVals, '');
  },

  updateEvalVals: (vals: evaluationValsType) => {
    return authPut(API.updateEvalVals, vals);
  },

  // Class Routes
  createNewClass: function (name: string) {
    return authPost(API.createNewClass, { cName: name });
  },
  getMyClasses: function () {
    return authGet(API.getMyClasses, '');
  },
  getStudentClass: function () {
    return authGet(API.getStudentClass, '');
  },
  getStudentAuthorized: function (code: string) {
    return authPost(API.getStudentAuthorized, { code });
  },
  getClassDetailsbyAuth: function (authCode: string) {
    return authGet(API.getClassDetailsbyAuth, `${authCode}`);
  },
  getClassDetails: (classId: string) => {
    return authGet(API.getClassDetails, classId);
  },

  leaveClass: function () {
    return authPut(API.leaveClass, {});
  },

  getClassStats: (authCode: string) => {
    return authGet(API.getClassStats, authCode);
  },
};
