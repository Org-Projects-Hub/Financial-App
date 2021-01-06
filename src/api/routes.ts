let URL = 'http://localhost:8000';
//URL  = "http://localhost:8080";

const API: any = {
  //User
  login: URL + '/login',
  signup: URL + '/signup',
  auth: `${URL}/auth`,
  updateInfo: `${URL}/users`,
  getClass: `${URL}/class`,

  //teacher
  createClass: `${URL}/create-class`,
  getStudent: `${URL}/students`,
  verifyStudent: `${URL}/verify-student`,
  //validation

  //Students
  addClass: `${URL}/add-class`,
  answer: `${URL}/answer`,
  submitAnswers: `${URL}/answer`,
  getAnswers: `${URL}/answer`,

  //Simulation
  createOrRetriveSimulation: `${URL}/simulation`,
  updateSimulation: `${URL}/simulation`,
  updateTest: `${URL}/simulation/test`,
  retriveTest: `${URL}/simulation/test`,

  retriveJobNames: `${URL}/jobs/names`,
  retriveJobDetail: `${URL}/jobs/`,
  assignJob: `${URL}/simulation/job`,
  getAssignedJob: `${URL}/simulation/job/`,
};

export { URL, API };
