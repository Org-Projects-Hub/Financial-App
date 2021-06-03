import React, { useEffect, useState } from 'react';
import { TestController, RunSimulation } from '../components';
import { Wrapper } from '../style/styled';
import api from '../api';

//Sets the
const Simulation = ({ user }: { user: any }): JSX.Element => {
  const [stage, setStage] = useState(null);

  useEffect(() => {
    api
      .createOrRetriveSimulation()
      .then((res) => {
        setStage(res.inProgress);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (stage) {
      api
        .updateSimulation(stage)
        .catch((err) =>
          console.log('Something went wrong on our end! Please try again. ')
        );
    }
  }, [stage]);

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
