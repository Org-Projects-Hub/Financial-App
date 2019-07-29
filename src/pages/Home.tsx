import React from 'react';
import styled from 'styled-components';
import banner from '../assets/images/web banner.png';
import logo from '../assets/images/unitedWayLogoShadow.png';
import {Slider} from '../components';


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
grid-column: 3 / span 1;
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

const Home = ({userName}:{userName: string})=>

<Wrapper>
    
      <Banner src={banner}/>

      <Logo href="http://www.unitedwaynela.org/"> <img style={{height:"90%"}} src={logo} /></Logo>

      <SlidePos>
        <Slider/>
      </SlidePos>

</Wrapper>

export default Home;
