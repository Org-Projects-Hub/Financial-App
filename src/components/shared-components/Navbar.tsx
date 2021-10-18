import React from 'react';
import styled from 'styled-components';
import { IconGear, Home, Game, BackPack } from 'assets';
import { NavLink } from 'react-router-dom';

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

const active = { textShadow: '2px 2px 4px #000000', color: 'white' };
const Navbar = ({
  showNav,
  hide,
}: {
  showNav: any;
  hide: any;
}): JSX.Element => {
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
    </div>
  );
};

export default Navbar;
