let URL  = "https://finapp.aayushh.com";
//URL  = "http://localhost:8080";

const API : any = {
  //User
  login: URL + "/login",
  signup: URL + "/signup",
  auth: `${URL}/auth`,
  updateInfo: `${URL}/update-info`,
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
   getAnswers: `${URL}/answer`
 }

export { URL , API };
