import React, {useState} from 'react';
import styled from 'styled-components';
import {PrePostTest, SimulationStart} from '../components'
import {Wrapper} from '../style/styled';

const Simulation =({user}:{user: any})=>
{
  //const [stage, setStage] = useState("pretest");
  const [stage, setStage] = useState("pretest");

  return (
      <Wrapper color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" className="center">
        <div className="top">Hello, {user.firstName}</div>
        {stage === "pretest" && <PrePostTest stage={stage} setStage={setStage} />}
        {stage === "simulation" && <SimulationStart stage={stage} setStage={setStage}/> }
        {stage === "posttest" && <PrePostTest stage={stage} setStage={setStage} />}
      </Wrapper>)
    };

export default Simulation;
 