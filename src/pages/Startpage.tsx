import React, {useState} from 'react';
//Styling components for the home page in hom.ts
import {Wrapper, Banner, Logo, Desc, NextBanner,LoginPOS} from '../style/home';
//logo for the "site identity"
import bannerlogo from '../assets/images/unitedWayLogoShadow.png';
//component for the login card and functionality
import {LoginNumberTwo } from '../components'



/*
* Start page of the entire site, where users will get an overview of what this app is about, and where they will
* login or creat their accounts
*/
const Startpage = ({login, loggedin}:{login: any, loggedin: any})=>{
return(
            <div>
              <Wrapper>

                <Banner></Banner>

                <Logo href="http://www.unitedwaynela.org/"> <img style={{height:"90%", objectFit: "contain"}} src={bannerlogo} /></Logo>

                <Desc>
                    Here is a description of Dollars and $ense, what this app is about, why it was created, and what you will learn.
                </Desc>
                
                <LoginPOS>
                  
                  {/* Calling the LoginNumberTwo component with two props
                    @prop login an APi function for logging a user in
                    @prop loggedin a boolean to check if a user is logged in or not*/}
                  <LoginNumberTwo login={login} loggedin={loggedin} />

                </LoginPOS>


              </Wrapper>
              
              </div>
              );}

export default Startpage;
