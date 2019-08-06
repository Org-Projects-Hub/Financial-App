import React from 'react';
<<<<<<< HEAD
import banner from '../assets/images/web banner.png';
import logo from '../assets/images/unitedWayLogoShadow.png';
import {Card} from '../style/styled';
import {Link} from "react-router-dom"; 
import {Wrapper, Banner, Logo, Desc, Login, Button, Background} from '../style/home';
import Startpage from './Startpage';




const Home = ({user}:{user: any})=>
<Background>
<Wrapper>
  <Banner>TEST</Banner>

       <Logo href="http://www.unitedwaynela.org/"> <img style={{height:"90%", objectFit: "contain"}} src={logo} /></Logo>

      <Desc>
        <Card style={{height: "90%", backgroundColor: "#84CEFA"}}>
          Here is a description of Dollars and $ense, what this app is about, why it was created, and what you will learn.
        </Card>
      </Desc>

      <Login>
        <Startpage {}/>
      </Login>

</Wrapper>
</Background>
=======
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
>>>>>>> 34959c4d5af49620ca854bdecc5340b58f0a05f0

export default Home;
