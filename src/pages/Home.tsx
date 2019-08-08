import React from 'react';
import logo from '../assets/images/unitedWayLogoShadow.png';
import {Card} from '../style/styled';
import {Wrapper, Banner, Logo, Desc, LoginPOS, Button} from '../style/home';




const Home = ({user}:{user: any})=>
<Wrapper>
  <Banner>TEST</Banner>

       <Logo href="http://www.unitedwaynela.org/"> <img style={{height:"90%", objectFit: "contain"}} src={logo} /></Logo>

      <Desc>
        <Card style={{height: "90%", backgroundColor: "#84CEFA"}}>
          Here is a description of Dollars and $ense, what this app is about, why it was created, and what you will learn.
        </Card>
      </Desc>

      <LoginPOS>
        <Button>TO SIMULATION</Button>
      </LoginPOS>

</Wrapper>

export default Home;
