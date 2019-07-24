import React, {Component, useState} from 'react';
import styled from 'styled-components';
import {Grid} from '../style/styled';
import SignupItem from './SignupItem';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {nameTest, usernameTest, emailTest, passwordTest} from '../utils/utils';

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

const AccountInfo= (props: any) =>{
        const el = [{type: "text", placeholder : "First Name", handler: (e: any)=>{console.log(e.target.value)}},
                    {type: "text", placeholder : "Last Name", handler: (e: any)=>{console.log(e.target.value)}},
                    {type: "text", placeholder : "Username", className:"full-row", handler: (e: any)=>{console.log(e.target.value)}},
                    {type: "text", placeholder : "Email",className:"full-row",  handler: (e: any)=>{console.log(e.target.value)}},
                    {type: "password", placeholder : "Password", className:"full-row", handler: (e: any)=>{console.log(e.target.value)}},
                    {type: "text", placeholder : "Phone Number", className:"full-row", handler: (e: any)=>{console.log(e.target.value)}}

                    ];
            return(
            <Wrapper>
                <div className="row card">
                  <div className="row card-content">
                    <div className="center-align">
                      <Header> {props.job} SIGN UP</Header>
                    </div>
                    <Grid cols="2">
                      {
                      el.map((item ,i )=> <SignupItem {...item} key={i}/>)
                      }
                    </Grid>
                    <div className="center-align">
                        <button className="btn btn-small waves-effect waves-light" type='submit' onClick={()=> <Link to ='/'></Link> }>Create Account</button>
                        {/*()=>{
                          {/*const obj =  {
                                          firstName:firstName.current.value,
                                          lastName: lastName.current.value,
                                          password: password.current.value,
                                          email: email.current.value,
                                          userName: userName.current.value}
                          api.signup(obj);

                        }
*/                      }

                        <br/> <br/>Already have an account? <Link to='/'>Log In</Link>

                    </div>
                  </div>
                </div>
              </Wrapper>
            )
};

export default AccountInfo;
