import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Avatar from '../assets/helper.png';


const FloatBtn = styled.button`
  position: fixed;
  bottom: 1em;
  
  left: 1em;
  border: 0;
  border-radius: 50%;
  @media (max-width: 600px) {
      display: none;
    }
  `;

  const FloatBtn2 = styled(FloatBtn)`
    left: 95%;
  `;

const Hints = ()=> (
  <div>
      <FloatBtn2><img src={Avatar} className="icon-sm"/></FloatBtn2>
  </div>
  );

export default Hints;
