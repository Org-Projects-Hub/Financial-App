import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 100vh;
  width: 100%;
  text-align: center;
`;

const Simulation =({userName})=> <Wrapper className="center"><div className="top">Hello, {userName}</div><i className="fas fa-dice-four txt-xl"></i><h1>Simulation</h1></Wrapper>;

export default Simulation;
