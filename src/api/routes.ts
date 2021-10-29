let URL = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  URL = 'http://localhost:8000';
} else {
  URL = 'https://api.uwnelafinapp.com';
}

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

  // Organizations
  getOrganizationNames: `${URL}/organizations/`,
  getOrganizationDetails: `${URL}/organizationdetails`,
  getBoothsInfo: `${URL}/booths/`,

  updateEvalVals: `${URL}/users/evalVals`,

  //Classes
  createNewClass: `${URL}/class/`,
  getMyClasses: `${URL}/class`,
  getStudentClass: `${URL}/users/student/class_info`,
  getStudentAuthorized: `${URL}/users/student/authorize`,
  getClassDetailsbyAuth: `${URL}/class/`,
  getClassDetails: `${URL}/class/details/`,
  leaveClass: `${URL}/class/leave`,
  getClassStats: `${URL}/class/classStat/`,
};

export { URL, API };
