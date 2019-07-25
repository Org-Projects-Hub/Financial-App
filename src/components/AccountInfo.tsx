import React, {Component, useState} from 'react';
import styled from 'styled-components';
import {Grid} from '../style/styled';
import SignupItem from './SignupItem';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {nameTest, usernameTest , emailTest, passwordTest, numberTest} from '../utils/utils';

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
        const el = [{type: "text", placeholder : "First Name",  handler:nameTest},
                    {type: "text", placeholder : "Last Name", handler: nameTest},
                    {type: "text", placeholder : "Username", className:"full-row", handler:usernameTest},
                    {type: "text", placeholder : "Email",  className:"full-row", handler: emailTest},
                    {type: "password", placeholder : "Password",  className:"full-row", handler: usernameTest},
                    {type: "text", placeholder : "Phone Number",  className:"full-row", handler: numberTest}
                    ];
            return(
            <Wrapper>
                <div className="row card"  style={{ width:"90%", maxWidth: "550px" }}>
                  <div className="row card-content">
                    <div className="center-align">
                      <Header> {props.job} SIGN UP</Header>
                    </div>
                    <Grid cols="2">
                      {el.map((item ,i )=> <SignupItem {...item} key={i}/>)}
                    </Grid>
                    <div className="center-align">
                        <button className="btn btn-small waves-effect waves-light" type='submit' >Create Account</button>
                        <br/> <br/>Already have an account? <Link to='/'>Log In</Link>
                    </div>
                  </div>
                </div>
              </Wrapper>
            )
};

export default AccountInfo;
