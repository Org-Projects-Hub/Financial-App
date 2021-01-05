import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TestController, RunSimulation } from '../components';
import { Wrapper } from '../style/styled';
import backgroundImg from '../assets/backgrounds/bg-home.svg';
import api from '../api';

//Sets the
const Simulation = ({ user }: { user: any }): JSX.Element => {
  //const [stage, setStage] = useState("pretest");
  const [stage, setStage] = useState(null);
  const [sim_id, set_sim_id] = useState<string>(null);

  useEffect(() => {
    api
      .createOrRetriveSimulation()
      .then((res) => {
        set_sim_id(res._id);
        if (!res.inProgress) res.inProgress = 'pretest';
        setStage(res.inProgress);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .updateSimulation(stage)
      .catch((err) => console.log("Can't update Simulation stage "));
  }, [stage]);

  return (
    <Wrapper className="center">
      <div className="top">Hello, {user.firstName}</div>
      {stage === 'pretest' && (
        <TestController sim_id={sim_id} stage={stage} setStage={setStage} />
      )}
      {stage === 'simulation' && <RunSimulation sim_id={sim_id} />}
      {stage === 'posttest' && (
        <TestController sim_id={sim_id} stage={stage} setStage={setStage} />
      )}
    </Wrapper>
  );
};

export default Simulation;
