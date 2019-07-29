import React, {useState} from 'react';
import {AccountPick} from '../components'

const Signup = ({loggedin} : {loggedin : any} ) => {

const [status, setStatus] = useState(false);
const [job, setJob] = useState("STUDENT");

return(
  <AccountPick loggedin= {loggedin}/>
  );
}


export default Signup;
