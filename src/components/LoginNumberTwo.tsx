import React, {useState} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import LoginLogo from '../assets/images/UnitedWayLogo.png';
import {Card} from '../style/styled';


const LoginNumberTwo = ({login, loggedin}:{login: any, loggedin: any})=> {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <form className="login-form" onSubmit={(e:any)=>{e.preventDefault(); login({email, password})}} >
            <img style={{borderRadius: "1em", padding: "1%"}} src={LoginLogo} alt="Origin Logo"/>
            <input className="login-input" placeholder={"Username or Email"} name="email" onChange={(e: any)=>{setEmail(e.target.value)}}/>
            <input className="login-input" placeholder={"Password"} type="password" name="password" onChange={(e: any)=>{setPassword(e.target.value)}}/>

            <div className="ta-center" style={{padding: "1%"}}>
                <p>Forget Password ?</p>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
            
            <div className="ta-center" style={{padding: "5%"}}>
                <button className="btn btn-small waves-effect waves-light" onClick={()=>login({email, password})}>Login</button>
            </div>
        </form>
    );
}

export default LoginNumberTwo;
