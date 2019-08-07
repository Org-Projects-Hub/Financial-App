import React, {useState} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import LoginLogo from '../assets/images/UnitedWayLogo.png';

const Wrapper = styled.div`
text-align: center
height: 100%;
display: grid;
grid-template-columns: 15% 5% auto 15% 5%;
grid-template-rows: 15vh 40vh auto;
align-items: stretch;
place-items: stretch;
background: white;
box-shadow: 0 .25em .5em rgba(0,0,0,.5);
border-radius: .5em;
`;

const Logo = styled.img`
grid-column: 3 / span 1;
grid-row: 2 / span 1;
align-self: stretch;
justify-self: stretch;
`;

const Input = styled.div`
grid-column: 3 / span 1;
grid-row: 3 / span 1;
align-self: stretch;
justify-self: stretch;
`;

const Login2 = ({login, loggedin}:{login: any, loggedin: any})=>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
return(

    <div>
        
        <form onSubmit={(e:any)=>{e.preventDefault(); login({email, password})}} className="container center" >
        <Wrapper>
        <Logo src={LoginLogo}/>

        <Input>
            <input placeholder={"Username or Email"} name="email" onChange={(e: any)=>{setEmail(e.target.value)}}/>
            <input placeholder={"Password"} type="password" name="password" onChange={(e: any)=>{setPassword(e.target.value)}}/>
            <p><a href="*">Forget Password ?</a></p>
            <p><NavLink to="/signup">Sign Up</NavLink></p>
            <button className="btn btn-small waves-effect waves-light" onClick={()=>login({email, password})}>Login</button>
        </Input>

        </Wrapper>
        </form>

    </div>
)

};   

export default Login2;