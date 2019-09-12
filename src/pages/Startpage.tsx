import React, {useState} from 'react';
import {Wrapper, Banner, Logo, Desc, Logoutbutton,LoginPOS} from '../style/home';
import bannerlogo from '../assets/images/unitedWayLogoShadow.png';
import {LoginNumberTwo } from '../components'
import styled from 'styled-components';


/*
* Start page of the entire site, where users will get an overview of what this app is about, and where they will
* login or creat their accounts
*/
const Startpage = ({login, loggedin, logout}:{login: any, loggedin: any, logout: any})=>{
return(
            <div>
              <Wrapper>

                <Banner></Banner>

                <Logo href="http://www.unitedwaynela.org/"> <img style={{height:"90%", objectFit: "contain"}} src={bannerlogo} /></Logo>

                <Desc>
                    Here is a description of Dollars and $ense, what this app is about, why it was created, and what you will learn.
                </Desc>

                {loggedin !== true ? 

                  <LoginPOS>
                    
                    {/* Calling the LoginNumberTwo component with two props
                      @prop login an APi function for logging a user in
                      @prop loggedin a boolean to check if a user is logged in or not*/}
                    <LoginNumberTwo login={login} loggedin={loggedin} />

                  </LoginPOS>

                :

                  <Logoutbutton onClick={()=>logout()}> sign out </Logoutbutton>

                }


              </Wrapper>
              
              </div>
              );}

export default Startpage;
