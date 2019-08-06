import React from 'react';
import styled from 'styled-components';
import { Header } from '../components';
import {Wrapper} from '../style/styled';
import { Link } from 'react-router-dom';


const Home = ({user}:{user: any} )=>

  <Wrapper color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)" ><Header />
    <div className="top">Hello, {user.firstName}</div>
    <i className="fas fa-igloo txt-xl"></i>
    <h1>Home</h1>
    <Link to="/admin-pannel"><button className="btn">Go to Admin Page</button></Link>
  </Wrapper>;

export default Home;
