import React from 'react';
import logo from '../assets/images/unitedWayLogoShadow.png';
import {Card} from '../style/styled';
import styled from 'styled-components'
import {Wrapper, Banner, Logo, Desc, LoginPOS, Button} from '../style/home';
import {NavLink} from 'react-router-dom';

const Admin = styled.div`
grid-column: 3 / span 1;
grid-row: 4 / span 1;
`;

const Position = styled.div`
grid-column: 3 / span 1;
gird-row: 3 span 1;
`;
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
      <Admin>
        <button className="btn">
        <NavLink to='/admin-pannel'>ADMIN PANEL</NavLink>
        </button>
      </Admin>

</Wrapper>

export default Home;
