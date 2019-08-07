import React, {useState} from 'react';
import styled from 'styled-components';
import HomePageBackgroundImage from '../assets/images/homepage-background.jpg';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {Wrapper, Banner, Logo, Desc, Button, Background, LoginPOS} from '../style/home';
import {Card} from '../style/styled';
import bannerlogo from '../assets/images/unitedWayLogoShadow.png';
import { Login2 } from '../components';

const Startpage = ({login, loggedin}:{login: any, loggedin: any})=>{
return(
            <Background>
              <Wrapper>

                <Banner></Banner>

                <Logo href="http://www.unitedwaynela.org/"> <img style={{height:"90%", objectFit: "contain"}} src={bannerlogo} /></Logo>

                <Desc>
                  <Card style={{height: "90%", backgroundColor: "#84CEFA"}}>
                    Here is a description of Dollars and $ense, what this app is about, why it was created, and what you will learn.
                  </Card>
                </Desc>
                
                <LoginPOS>
                  <Login2 login={login} loggedin={loggedin}/>
                </LoginPOS>

              </Wrapper>
            </Background>);}

export default Startpage;
