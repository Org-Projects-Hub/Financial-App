import React from 'react';
import styled from 'styled-components';
import { Header } from '../components';
import {Wrapper} from '../style/styled';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Home = ({user}:{user: any} )=>
<ReactCSSTransitionGroup
transitionName="opacity"
transitionAppear={true}
transitionAppearTimeout={500}
transitionEnterTimeout={500}
transitionLeaveTimeout={300}
transitionEnter={true}
transitionLeave={true}><>
  <Wrapper color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)" ><Header />
    <div className="top">Hello, {user.firstName}</div>
    <i className="fas fa-igloo txt-xl"></i>
    <h1>Home</h1>
    <Link to="/admin-pannel"><button className="btn">Go to Admin Page</button></Link>
  </Wrapper></></ReactCSSTransitionGroup>;

export default Home;
