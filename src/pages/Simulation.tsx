import React, { useState } from 'react';
import styled from 'styled-components';
import { TestController, RunSimulation } from '../components';
import { Wrapper } from '../style/styled';
import backgroundImg from '../assets/backgrounds/bg-home.svg';

//Sets the
const Simulation = ({ user }: { user: any }): JSX.Element => {
  //const [stage, setStage] = useState("pretest");
  const [stage, setStage] = useState('pretest');

  return (
    <Wrapper className="center">
      <div className="top">Hello, {user.firstName}</div>
      {stage === 'pretest' && (
        <TestController stage={stage} setStage={setStage} />
      )}
      {stage === 'simulation' && <RunSimulation />}
      {stage === 'posttest' && (
        <TestController stage={stage} setStage={setStage} />
      )}
    </Wrapper>
  );
};

export default Simulation;
