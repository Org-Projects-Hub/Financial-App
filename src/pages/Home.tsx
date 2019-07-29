import React from 'react';
import styled from 'styled-components';
import { Header } from '../components';
import {Wrapper} from '../style/styled';

const Home = ({user}:{user: any} )=>
  <Wrapper color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)" className=""><Header />
    <div className="top">Hello, {user.firstName}</div>
    <i className="fas fa-igloo txt-xl"></i>
    <h1>Home</h1>
  </Wrapper>;

export default Home;
