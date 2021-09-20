import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import 'style/simulation.css';
import { ListHeading, Line } from 'style/preposttest';
import { Card } from 'style/styled';
import Criterias from './Criterias';
import { evaluationValsType, setStageType } from 'types/shared';
import api from 'api';

interface propsType {
  propVals: evaluationValsType;
  setStage: setStageType;
}

const Evaluation: FC<propsType> = ({ propVals, setStage }) => {
  /**
   * Props for Criterias component
   */
  const [criteriaVals, setCriteriaVals] = useState<
    Array<{ show: String | number; positive: Boolean }>
  >([]);
  /**
   * Current Criteria
   */
  const [criteraNo, setCriteriaNo] = useState<number>(0);
  /**
   * Manages fade-out effects
   */
  const [loading, setLoading] = useState<Boolean>(true);
  /**
   * Ensures criteriaVals state is initialized to prevent null error in Criterias component
   */
  const [initialRender, setInitialRender] = useState<Boolean>(true);

  const savingTarget = 0.15;
  const rentTarget = 0.2;
  const foodTarget = 0.07;

  /**
   * Initiate {@link criteriaVals} state with values for each criteria
   */
  useEffect(() => {
    let vals: evaluationValsType = propVals;
    let info: Array<{
      show: String | number;
      positive: Boolean;
      pMsg?: number;
    }> = [];

    api
      .getEvalVals()
      .then((res) => {
        vals = res.evalVals;

        // balance criteria
        let sp = vals.balance / vals.income;
        if (vals.balance < 0)
          info.push({ show: vals.balance, positive: false });
        else if (sp < savingTarget)
          info.push({
            show: (sp * 100).toFixed(2) + '%',
            positive: true,
            pMsg: 1,
          });
        else {
          info.push({ show: vals.balance, positive: true, pMsg: 0 });
        }

        // Rent criteria
        let rp = vals.rent / vals.income;
        if (rp > rentTarget)
          info.push({ show: (rp * 100).toFixed(2) + '%', positive: false });
        else info.push({ show: (rp * 100).toFixed(2) + '%', positive: true });

        // Food criteria
        let fp = vals.food / vals.income;
        if (fp > foodTarget)
          info.push({ show: (fp * 100).toFixed(2) + '%', positive: false });
        else info.push({ show: (fp * 100).toFixed(2) + '%', positive: true });

        // Tranportation
        if (vals.transport >= 920)
          info.push({ show: 'New Vehicle', positive: false });
        else if (vals.transport >= 490)
          info.push({ show: 'Used Vehicle', positive: true, pMsg: 1 });
        else
          info.push({ show: 'Public Transportation', positive: true, pMsg: 0 });
        setCriteriaVals(info);
      })
      .catch((err) => window.alert(err.message))
      .finally(() => {
        setLoading(false);
        setInitialRender(false);
      });
  }, []);

  useEffect(() => {
    if (criteraNo == 4) {
      setStage('additional');
    }
  }, [criteraNo]);

  /**
   * Controlled update of the states to ensure a fade-out effect
   */
  const manageFadeOut = () => {
    setLoading(true); // sets className of Card to "fade-out active"

    setTimeout(() => {
      // Batched update so that there is no flickering when Criterias component re-renders
      ReactDOM.unstable_batchedUpdates(() => {
        setCriteriaNo(criteraNo + 1);
        setLoading(false);
      });
    }, 320);
  };

  return (
    <Card
      width="50vw"
      className={`evalCard ${loading ? 'fade-out active' : 'fade-out'}`}
    >
      <ListHeading>Evaluation</ListHeading>
      <Line />
      {!initialRender && criteraNo < 4 && (
        <Criterias no={criteraNo} propVal={criteriaVals[criteraNo]} />
      )}
      <button
        className="yellow-button"
        style={{ margin: '3% auto 0' }}
        onClick={manageFadeOut}
      >
        Continue
      </button>
    </Card>
  );
};

export default Evaluation;
