import React, {useState} from 'react';
import styled from 'styled-components';
import {Pretest, Posttest} from '../components'
const Wrapper = styled.div`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;

const Simulation =({userName}:{userName: string})=>
{
  const [stage, setStage] = useState("pretest");
  
  return (
      <Wrapper className="center">
        <div className="top">Hello, {userName}</div>
        {stage === "pretest" && <Pretest setStage={setStage} />}
        {stage === "posttest" && <Posttest setStage={setStage} />}
      </Wrapper>)
    };

export default Simulation;
