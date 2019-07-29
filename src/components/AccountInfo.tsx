import React, {Component, useState} from 'react';
import styled from 'styled-components';
import {Grid} from '../style/styled';
import SignupItem from './SignupItem';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {nameTest, usernameTest , emailTest, passwordTest, numberTest} from '../utils/utils';
import api from '../api';
const Wrapper = styled.div`
        background-color: #dde1ea;
        display: grid;
        height: 100vh;
        place-items: center;`;

        const Header = styled.div`
        font-size: 200%;
        font-weight: bolder:
        text-align: center;
        padding-bottom: 5%;
        align-items: center;`;

const AccountInfo= ({loggedin}: {loggedin: any}) =>{

       const [firstName, setFirstName] = useState("");
       const [lastName, setLastName] = useState("");
       const [username, setUsername] = useState("");
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const [phoneNumber, setPhoneNumber] = useState("");

       const SignupAPI = ()=>{  const obj = {firstName, lastName, username,email, password};
                                console.log(obj);
                                api.signup(obj)
                                .then(res => {
                                    if (res.success) {
                                     alert(res.message);
                                     loggedin({user : "ss"});
                                    } else {
                                      alert(res.message);
                                    }
                                  })
                                  .catch(err => alert(err));

                            };

        const el = [{type: "text", placeholder : "First Name",  handler:nameTest, set: setFirstName, value: firstName},
                    {type: "text", placeholder : "Last Name", handler: nameTest, set: setLastName, value: lastName},
                    {type: "text", placeholder : "Username", className:"full-row", handler:usernameTest, set: setUsername, value: username},
                    {type: "text", placeholder : "Email",  className:"full-row", handler: emailTest, set:setEmail, value: email},
                    {type: "password", placeholder : "Password",  className:"full-row", handler: usernameTest, set: setPassword, value: password},
                    {type: "text", placeholder : "Phone Number",  className:"full-row", handler: numberTest, set: setPhoneNumber, value: phoneNumber}
                    ];
            return(
            <Wrapper>
                <div className="row card"  style={{ width:"90%", maxWidth: "550px" }}>
                  <div className="row card-content">
                    <div className="center-align">
                      <Header> SIGN UP</Header>
                    </div>
                    <Grid cols="2">
                      {el.map((item ,i )=> <SignupItem {...item} key={i}/>)}
                    </Grid>
                    <div className="center-align">
                        <button className="btn btn-small waves-effect waves-light"  onClick={SignupAPI}>Create Account</button>
                        <br/> <br/>Already have an account? <Link to='/'>Log In</Link>
                    </div>
                  </div>
                </div>
              </Wrapper>
            )
};

export default AccountInfo;
