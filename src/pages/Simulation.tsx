import React, {useState} from 'react';
import styled from 'styled-components';
import {PrePostTest, SimulationStart} from '../components'
import {Wrapper} from '../style/styled';
import backgroundimg from "../assets/select.svg";

//Contains the entire Startpage, sets the gridarea and the background
const Container = styled.div`
  background-image : url(${backgroundimg});
  background-repeat:no-repeat;
  background-position: center;

`;

//Sets the
const Simulation =({user}:{user: any})=>
{
  //const [stage, setStage] = useState("pretest");
  const [stage, setStage] = useState("pretest");

  return (
      <Wrapper color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" className="center">
        <Container>
        <div className="top">Hello, {user.firstName}</div>
        {stage === "pretest" && <PrePostTest stage={stage} setStage={setStage} />}
        {stage === "simulation" && <SimulationStart stage={stage} setStage={setStage}/> }
        {stage === "posttest" && <PrePostTest stage={stage} setStage={setStage} />}
        </Container>
      </Wrapper>)
    };

export default Simulation;
 