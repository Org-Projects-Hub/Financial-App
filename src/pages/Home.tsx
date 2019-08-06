import React from 'react';
import banner from '../assets/images/web banner.png';
import logo from '../assets/images/unitedWayLogoShadow.png';
import {Card} from '../style/styled';
import {Link} from "react-router-dom"; 
import {Wrapper, Banner, Logo, Desc, Login, Button, Background} from '../style/home';
import Startpage from './Startpage';




const Home = ({user}:{user: any})=>
<Background>
<Wrapper>
  <Banner>TEST</Banner>

       <Logo href="http://www.unitedwaynela.org/"> <img style={{height:"90%", objectFit: "contain"}} src={logo} /></Logo>

      <Desc>
        <Card style={{height: "90%", backgroundColor: "#84CEFA"}}>
          Here is a description of Dollars and $ense, what this app is about, why it was created, and what you will learn.
        </Card>
      </Desc>

      <Login>
        <Startpage {}/>
      </Login>

</Wrapper>
</Background>

export default Home;
