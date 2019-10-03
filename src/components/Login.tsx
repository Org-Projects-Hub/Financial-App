import React, {useState} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import LoginLogo from '../assets/images/UnitedWayLogo.png';

const Img = styled.img`
 borderRadius: "1em";
 overflow: "hidden";
 width:auto;
 width:75%;`;

const Login = ({login, loggedin}:{login: any, loggedin: any}):JSX.Element=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      /* for for entire login card 
      @function onSubmit preventDefault prevents blank data,
           login is the api function that sets the users email and password
      */
      <form className="login-form" onSubmit={(e:any)=>{e.preventDefault(); login({email, password})}} >
          
          <Img src={LoginLogo} alt="Origin Logo"/>
          
          {/* sets the uers email to the input value */}
          <input className="login-input" placeholder={"Username or Email"} name="email" onChange={(e: any)=>{setEmail(e.target.value)}}/>
          
          {/* sets the uers password to the input value */}
          <input className="login-input" placeholder={"Password"} type="password" name="password" onChange={(e: any)=>{setPassword(e.target.value)}}/>

          <div className="ta-center" style={{padding: "1%"}}>
              <p>Forget Password ?</p>
              {/* redirect to Sign Up page when clicked*/}
              <NavLink to="/signup">Sign Up</NavLink>

          </div>
          {/*Button for submit, sends the users email and password to the login function declared in App.tsx to be verified  */}
          <div className="ta-center" style={{padding: "5%"}}>
              <button className="btn btn-small waves-effect waves-light" onClick={()=>login({email, password})}>Login</button>
          </div>
          
      </form>
  );
}

export default Login;
