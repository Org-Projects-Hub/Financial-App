import React, {Component, useState} from 'react';
import styled from 'styled-components';
import { Grid, Wrapper, Card } from '../style/styled';
import SignupItem from './SignupItem';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {nameTest, usernameTest , emailTest, passwordTest, numberTest} from '../utils/utils';
import api from '../api';

        const Header = styled.div`
        font-size: 200%;
        color: #066;
        font-weight: bolder:
        text-align: center;
        padding-bottom: 5%;
        align-items: center;`;
        const Arrow = styled.button`
        border: 0;
        display: inline-block;
        border-radius: 50%;
        padding: .8em;
        font-weight: bolder;
        color: white;
        background: dodgerblue;`;

        const MyGrid = styled(Grid)`
        grid-template-columns: auto auto`;

const Account = ({loggedin}: {loggedin: any}) =>{
       const [state, setState] = useState(0);
       const [verified, setVerified] = useState(true);
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

                                     loggedin(res.token, res.user);
                                    } else {
                                      alert(res.message);
                                    }
                                  })
                                  .catch(err => alert(err));

                            };

        const el = [{header: "Enter your First Name", type: "text", placeholder : "First Name",  handler:nameTest, set: setFirstName, value: firstName},
                    {header: "Enter your Last Name", type: "text", placeholder : "Last Name", handler: nameTest, set: setLastName, value: lastName},
                    {header: "Enter your Email", type: "text", placeholder : "Email",  className:"full-row", handler: emailTest, set:setEmail, value: email},
                    {header: "Enter your Password", type: "password", placeholder : "Password",  className:"full-row", handler: usernameTest, set: setPassword, value: password}
                    ];
            return(
            <Wrapper className="center">
              <Card style={{minWidth: "400px"}}>
                      <Arrow  onClick={()=>{if(state > 0)
                                            {setState(state - 1)}
                                            else{

                                            }
                                      }}>
                        <i className="fas fa-arrow-left"></i>
                      </Arrow>

                      <Header> {el[state].header} </Header>
                       <SignupItem {...el[state]} />
                    {state < (el.length - 1) ?<Arrow className="right" onClick={()=>{ if(el[state].handler(el[state].value)){
                                                                                         setState(state + 1)}
                                                                                      else{
                                                                                        alert("Not Valid")
                                                                                      }
                                                                                    }
                                                                               }>
                        <i className="fas fa-arrow-right"></i>
                    </Arrow> :   <button className="btn btn-small waves-effect waves-light"  onClick={SignupAPI}>Create Account</button>}
                </Card>
              </Wrapper>
            )
};

export default Account;
