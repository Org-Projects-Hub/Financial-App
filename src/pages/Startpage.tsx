import React, {useState} from 'react';
import {Wrapper, Banner, Logo, Desc, NextBanner,LoginPOS} from '../style/home';
import {Card} from '../style/styled';
import bannerlogo from '../assets/images/unitedWayLogoShadow.png';
import {LoginNumberTwo } from '../components'

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
                  {/* <Login login={login} loggedin={loggedin}/> */}
                  <LoginNumberTwo login={login} loggedin={loggedin} />
                </LoginPOS>

                <NextBanner></NextBanner>

              </Wrapper>
              
              </div>
              );}

export default Startpage;
