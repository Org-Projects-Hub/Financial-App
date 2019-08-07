import React, {useState} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import LoginLogo from '../assets/images/UnitedWayLogo.png';


const Login = ({login, loggedin}:{login: any, loggedin: any})=>{
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

  return(<div>
          <div className="wrapper-item-center"  style={{ width:"100%", maxWidth: "600px" }}>
            <form onSubmit={(e:any)=>{e.preventDefault(); login({email, password})}} className="container center" >
                <div className="row card full-on-mobile">
                <div className="card-image " style={{padding:"2em"}}>
                    <img src={LoginLogo} alt="Origin Logo"/>
              </div>
                <div className="">
                  <div className="row card-content">
                    <div className="input-field col s12">
                      <input placeholder={"Username or Email"} name="email" onChange={(e: any)=>{setEmail(e.target.value)}}/>
                      <input placeholder={"Password"} type="password" name="password" onChange={(e: any)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className=" col s12 center">
                      <p><a href="*">Forget Password ?</a></p>
                    </div>
                    <div className=" col s12 center">
                      <p><NavLink to="/signup">Sign Up</NavLink></p>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col m12">
                      <p className="center-align">
                        <button className="btn btn-small waves-effect waves-light" onClick={()=>login({email, password})}>Login</button>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </form>
          </div>
      </div>);}

export default Login;
