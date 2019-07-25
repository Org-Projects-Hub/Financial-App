import React from 'react';
import styled from 'styled-components';
import banner from '../assets/images/web banner.png';
import logo from '../assets/images/unitedWayLogoShadow.png';

const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  text-align: center
  z-index:-1;`;


const Banner = styled.img`
top:0;
left:0;
position:absolute;
z-index:0;
width:200%;
height:25%;
`;

const Logo = styled.img`
position:absolute;
top:0;
left:42.5%;
margin-left:auto;
margin:right:auto;
z-index:1;
`;


const Home = ({userName}:{userName: string})=>
  <Wrapper>
    <Banner src={banner} />
    <Logo src={logo} />
  </Wrapper>;

export default Home;
