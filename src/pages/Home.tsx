import React from 'react';
import styled from 'styled-components';
import {Header} from '../components';
const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  text-align: center;`;

const Home = ({userName}:{userName: string})=>
  <Wrapper className=""><Header />
    <div className="top">Hello, {userName}</div>
    <i className="fas fa-igloo txt-xl"></i>
    <h1>Home</h1>
  </Wrapper>;

export default Home;
