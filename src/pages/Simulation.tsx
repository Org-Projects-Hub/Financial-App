import React, { useEffect, useState } from 'react';
import {
  TestController,
  RunSimulation,
  Evaluation,
  Additional_Resources,
} from 'components';
import { evaluationValsType, simulation_stages } from 'types/shared';
import { Wrapper } from 'style/styled';
import api from 'api';
import useStateCallback from 'utils/useStateCallback';
import ReactDOM from 'react-dom';

//Sets the
const Simulation = ({ user }: { user: any }): JSX.Element => {
  const [stage, setStage] = useStateCallback<simulation_stages>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [evaluationVals, setEvaluationVals] = useState<evaluationValsType>({
    balance: 0,
    income: 0,
    rent: 0,
    food: 0,
    transport: 0,
  });

  useEffect(() => {
    api
      .createOrRetriveSimulation()
      .then((res) => {
        setStage(res.inProgress, () => setLoading(false));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!loading && stage !== 'additional') {
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
      {stage === 'simulation' && (
        <RunSimulation
          setStage={setStage}
          setEvaluationVals={setEvaluationVals}
        />
      )}
      {stage === 'evaluation' && (
        <Evaluation propVals={evaluationVals} setStage={setStage} />
      )}
      {stage === 'additional' && <Additional_Resources setStage={setStage} />}
      {stage === 'posttest' && (
        <TestController stage={stage} setStage={setStage} />
      )}
    </Wrapper>
  );
};

export default Simulation;
