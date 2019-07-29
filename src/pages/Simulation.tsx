import React, {useState} from 'react';
import styled from 'styled-components';
import {Pretest, Posttest} from '../components'
import {Wrapper} from '../style/styled';

const Simulation =({user}:{user: any})=>
{
  const [stage, setStage] = useState("pretest");

  return (
      <Wrapper color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" className="center">
        <div className="top">Hello, {user.firstName}</div>
        {stage === "pretest" && <Pretest setStage={setStage} />}
        {stage === "posttest" && <Posttest setStage={setStage} />}
      </Wrapper>)
    };

export default Simulation;
