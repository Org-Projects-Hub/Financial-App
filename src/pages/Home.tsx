import React from 'react';
import styled from 'styled-components';
import banner from '../assets/images/web banner.png';
import logo from '../assets/images/unitedWayLogoShadow.png';
import {Slider} from '../components';
import {Card} from '../style/styled';


const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  text-align: center
  display: grid;
  min-height:100vh;
  grid-template-columns: repeat(5, 1fr);;
  grid-template-rows: 15% repeat(4, 1fr);
  align-items: stretch;
  place-items: stretch;
  `;


const Banner = styled.img`
grid-column: 1 / span 5;
grid-row: 1 / span 1;
justify-self: stretch;
align-self: stretch;
`;

const Logo = styled.a`
grid-column: 1 / span 1;
grid-row: 1 / span 1;
justify-self: stretch;
align-self: stretch;
z-index:1;
`;

const SlidePos = styled.div`
grid-column: 2 / span 3;
grid-row: 2 / span 2;
justify-self: stretch;
align-self: stretch;
`;

const Desc = styled.div`
grid-column: 2 / span 2;
grid-row: 4 / span 2;
align-self: stretch;
justify-self: stretch;
`;


const Home = ({user}:{user: any})=>

<Wrapper>
    
      <Banner src={banner}/>

      <Logo href="http://www.unitedwaynela.org/"> <img style={{height:"90%"}} src={logo} /></Logo>

      <SlidePos>
        <Slider/>
      </SlidePos>

      <Desc>
        <Card style={{height: "90%", backgroundColor: "rgb(191, 31, 23)"}}>
          Here is a description of Dollars and $ense, what this app is about, why it was created, and what you will learn.
        </Card>
      </Desc>

</Wrapper>

export default Home;
