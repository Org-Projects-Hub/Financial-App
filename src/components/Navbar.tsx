import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Nav = styled.div`
  top: 0em;
  height: 100vh;
  display: grid;
  position: fixed;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  place-items: center;
  background: dodgerblue;
  z-index: 1;
  
  @media (max-width: 879px) {
     height: 50px;
     width: 100vw;
     top: calc(100% - 50px);
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-template-rows: 1fr;
  }

  `;

const FloatBtn = styled.button`
  position: fixed;
  bottom: 1em;
  left: 1em;
  border: 0;
  border-radius: 50%;
  @media (max-width: 879px) {
      display: none;
    }
  `;

  const FloatBtn2 = styled(FloatBtn)`
    left: 95%;
  `;

const active = {textShadow: "2px 2px 4px #000000" , color: "white"};
const Navbar = ({showNav, hide}: {showNav: any, hide: any})=> (
  <div>
    <Nav className={showNav? "show": "hide"}>
      <NavLink activeStyle={active}   className="nav-item txt-md" to="/setting"><i className="fas fa-cog"></i></NavLink>
      <NavLink activeStyle={active} className="nav-item txt-md" to="/home"><i className="fas fa-home"></i></NavLink>
      <NavLink activeStyle={active}  className="nav-item txt-md" to="/simulation"><i className="fas fa-gamepad"></i></NavLink>
      <NavLink activeStyle={active}  className="nav-item txt-md" to="/classes"><i className="fas fa-school"></i></NavLink>
    </Nav>
      <FloatBtn onClick={hide}><i className={ showNav? "fa fa-angle-left txt-md" : "fa fa-angle-right txt-md"}></i></FloatBtn>
      <FloatBtn2><a href="mailto:help@finapp.com"><i className="fas fa-question-circle  txt-md"></i></a></FloatBtn2>
  </div>
  );

export default Navbar;
