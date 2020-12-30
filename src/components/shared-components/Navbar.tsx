import React from 'react';
import styled from 'styled-components';
import IconGear from '../../assets/icons/icon-gear.svg';
import Home from '../../assets/icons/icon-home.svg';
import Game from '../../assets/icons/icon-game.svg';
import BackPack from '../../assets/icons/icon-backpack.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

import { Hints } from '../index';
const Nav = styled.div`
  top: 0em;
  height: 100vh;
  display: grid;
  position: fixed;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  place-items: center;
  background: #005191;
  z-index: 10;
  @media (max-width: 879px) {
    height: 50px;
    width: 100vw;
    top: calc(100% - 50px);
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const Icon = styled.img`
  width: 2.25vw;
  src: ${(props) => props.src};
`;

//REMOVED DISPLAY
const FloatBtn = styled.button`
  position: fixed;
  bottom: 1em;
  right: 1em;
  border: 0;
  border-radius: 50%;
  @media (max-width: 879px) {
    display: none;
  }
`;

// const FloatBtn2 = styled(FloatBtn)`
//   left: 95%;
// `;

const active = { textShadow: '2px 2px 4px #000000', color: 'white' };
const Navbar = ({
  showNav,
  hide,
}: {
  showNav: any;
  hide: any;
}): JSX.Element => {
  const backButton = useSelector((state: RootState) => state.back);
  return (
    <div>
      <Nav className={showNav ? 'show' : 'hide'}>
        <NavLink activeStyle={active} className="nav-item txt-md" to="/setting">
          <Icon src={IconGear} alt="" />
        </NavLink>
        <NavLink activeStyle={active} className="nav-item txt-md" to="/">
          <Icon src={Home} alt="" />
        </NavLink>
        <NavLink
          activeStyle={active}
          className="nav-item txt-md"
          to="/simulation"
        >
          <Icon src={Game} alt="" />
        </NavLink>
        <NavLink activeStyle={active} className="nav-item txt-md" to="/classes">
          <Icon src={BackPack} alt="" />
        </NavLink>
      </Nav>
      {backButton.display ? (
        <FloatBtn onClick={() => backButton.backFunction()}>
          <i className="fa fa-angle-left txt-md"></i>
        </FloatBtn>
      ) : null}
      {/* Originally meant to show and hide the navabar 
    <FloatBtn onClick={hide}>
      <i
        className={
          showNav ? 'fa fa-angle-left txt-md' : 'fa fa-angle-right txt-md'
        }
      ></i>
    </FloatBtn> */}
      {/* <Hints
      msg={['Welcome to FinApp!', 'Take the Simulation when you are ready']}
    /> */}
    </div>
  );
};

export default Navbar;
