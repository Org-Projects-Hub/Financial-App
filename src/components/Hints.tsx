import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Avatar from '../assets/helper.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
  const Float = styled.div`
  position: fixed;
  bottom: 1em;
  right: 10px;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-height: 600px) {
         display: none;
      }
  @media (max-width: 879px) {
       display: none;
    }
  `;

  const Message = styled.div`
    background: white;
    max-width: 15em;
    padding: .3em .8em;
    border-radius: 8px;
    vertical-align: middle;
    display: grid;
    align-items: center;
  `;

  const Img = styled.img`
    border-radius: 50%;
    border: 1px solid white;
    width: 5em;
    margin-left: 2px;
    height: auto;
  `;

const Hints = ({msg} : any)=> {
  const [pointer, setPointer ]  = useState(0);

  const increasePointer = () =>{
    if(pointer < msg.length - 1){
      setPointer(pointer + 1);
    }
  }

 return(
   <ReactCSSTransitionGroup
   transitionName="example"
   transitionAppear={true}
   transitionAppearTimeout={500}
   transitionEnterTimeout={500}
  transitionLeaveTimeout={300}
   transitionEnter={true}
   transitionLeave={true}>
       <Float onClick = {increasePointer} className="pointer">
        <Message>{msg[pointer]}</Message>
        <div>
        <Img src={Avatar} className="icon-sm"/>
        </div>
      </Float>
 </ReactCSSTransitionGroup>
  );
}

export default Hints;
