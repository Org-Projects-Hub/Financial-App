import React, { useEffect, useState } from 'react';
import { TestController, RunSimulation } from '../components';
import { Wrapper } from '../style/styled';
import api from '../api';
import useStateCallback from '../utils/useStateCallback';

//Sets the
const Simulation = ({ user }: { user: any }): JSX.Element => {
  const [stage, setStage] = useStateCallback(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .createOrRetriveSimulation()
      .then((res) => {
        setStage(res.inProgress, () => setLoading(false));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!loading) {
      api
        .updateSimulation(stage)
        .catch((err) =>
          console.log('Something went wrong on our end! Please try again. ')
        );
    }
  }, [stage]);

  return (
    <Wrapper className="center">
      {stage === 'pretest' && (
        <TestController stage={stage} setStage={setStage} />
      )}
      {stage === 'simulation' && <RunSimulation setStage={setStage} />}
      {stage === 'posttest' && (
        <TestController stage={stage} setStage={setStage} />
      )}
    </Wrapper>
  );
};

export default Simulation;
