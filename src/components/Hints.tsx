import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Avatar from '../assets/helper.png';



  const Float = styled.div`
  position: fixed;
  bottom: 1em;
  right: 10px;
    display: grid;
      grid-template-columns: auto auto;
  `;

  const Message = styled.div`
    background: white;
    max-width: 15em;
    padding: .3em .8em;
    border-radius: 8px;
  `;

  const Img = styled.img`
    border-radius: 50%;
    border: 1px solid white;
    width: 5em;
    margin-left: 2px;
    height: auto;
  `;

  const Notification = styled.div`
    background: red;
    color: white;
    font-weight: bold;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 10px;
    text-align: center;
    position: relative;
    top: 5px;
  `;

const Hints = ()=> (
      <Float>
        <Message>Hello! Please enter all your information correctly to access the app.</Message>
        <div>
        {//<Notification>1</Notification>
        }
        <Img src={Avatar} className="icon-sm"/>
        </div>
      </Float>
  );

export default Hints;
