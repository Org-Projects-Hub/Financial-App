import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  text-align: center;

`;

const Home = ()=> <Wrapper className="center"><i className="fas fa-igloo txt-xl"></i><h1>Home</h1></Wrapper>;

export default Home;
