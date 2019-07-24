import React, {Component, useState} from 'react';  
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"; 
import {nameTest, usernameTest, emailTest, passwordTest} from '../utils/utils'; 

        const Wrapper = styled.div`
        background-color: #dde1ea;
        display: grid;
        height: 100vh;
        place-items: center;
        `;

        const Header = styled.div`
        font-size: 200%;
        font-weight: bolder:
        text-align: center;
        padding-bottom: 5%;
        align-items: center;`;
            
const AccountInfo= (props: any) =>{   


        const [valid, setValid] = useState(false);    
        
        const firstName = React.createRef<HTMLInputElement>();
        const lastName = React.createRef<HTMLInputElement>();
        const email = React.createRef<HTMLInputElement>();
        const userName = React.createRef<HTMLInputElement>();
        const password = React.createRef<HTMLInputElement>();
        const pnumber = React.createRef<HTMLInputElement>();
            
            return(
            <Wrapper>
                <div className="row card">
                  <div className="row card-content">
                    <div className="center-align">
                      <Header> {props.job} SIGN UP</Header>
                    </div>
                    <div className="row">
                      <div className="col S4">


                        <input type="text" ref={firstName} placeholder="First Name"
                               onChange={(e:any)=>{ setValid(nameTest(e.target.value)) }}
                        />

                        {console.log(firstName)}
                        
                        {!firstName === null? 
                        
                          !valid?
                          
                          "Name is not Valid"
                          :
                          "Name is Valid"
                        
                          
                        :

                        ""
                        }

                      </div>
                      <div className="col s6"><input type="text" ref={lastName}  placeholder="Last Name"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" ref={userName} placeholder="Username"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" ref={email} placeholder="Email Address"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text"  ref={pnumber} placeholder="Phone Number (Optional)"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="password" ref={password} placeholder="Password"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="password" placeholder="Confirm Password"/></div>
                    </div>
                    <div className="center-align">
                        <button className="btn btn-small waves-effect waves-light" type='submit'>Create Account</button>
                        {/*()=>{

                          {/*const obj =  { 
                                          firstName:firstName.current.value,
                                          lastName: lastName.current.value,
                                          password: password.current.value,
                                          email: email.current.value,
                                          userName: userName.current.value}
                          api.signup(obj);

                          console.log(userName);
                        }

                        >Create Account</button>*/}

                        <br/> <br/>Already have an account? <Link to='/'>Log In</Link>

                    </div>
                  </div>
                </div>
                </Wrapper> 
            )
};

export default AccountInfo;