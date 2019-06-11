import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Nav = styled.div`
  top: 0em;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  background: dodgerblue;
  transition: 300ms ease-out;`;

const FloatBtn = styled.button`
  position: fixed;
  bottom: 1em;
  left: 1em;
  border: 0;
  border-radius: 50%;`;

const active = {filter: "drop-shadow(30px 10px 4px gray);", textShadow: "2px 2px 4px #000000" , color: "white"};
const Navbar = ({showNav, hide})=> (
  <div>
    <Nav className={showNav? "show": "hide"}>
      <NavLink activeStyle={active}   className="nav-item txt-md" to="/setting"><i className="fas fa-cog"></i></NavLink>
      <NavLink activeStyle={active} className="nav-item txt-md" to="/home"><i className="fas fa-home"></i></NavLink>
      <NavLink activeStyle={active}  className="nav-item txt-md" to="/Simulation"><i className="fas fa-gamepad"></i></NavLink>
    </Nav>
      <FloatBtn onClick={hide}><i className={ showNav? "fa fa-angle-left txt-md" : "fa fa-angle-right txt-md"}></i></FloatBtn>
  </div>
  );

export default Navbar;
