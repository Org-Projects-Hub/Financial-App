import React, {
  FC,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import '../../../style/simulation.css';
import { ListHeading, Line } from '../../../style/preposttest';
import { Card } from '../../../style/styled';
import Criterias from './Criterias';
import { evaluationValsType, simulation_stages } from 'types/shared';

interface propsType {
  vals: evaluationValsType;
  setStage: Dispatch<SetStateAction<simulation_stages>>;
}

const Evaluation: FC<propsType> = ({ vals, setStage }) => {
  const [criteriaVals, setCriteriaVals] = useState<
    Array<{ show: String | number; positive: Boolean }>
  >([]);
  const [criteraNo, setCriteriaNo] = useState<number>(0);
  const [loading, setLoading] = useState<Boolean>(true);

  const savingTarget = 0.15;
  const rentTarget = 0.2;
  const foodTarget = 0.07;

  /**
   * Initiate {@link criteriaVals} state with values for each criteria
   */
  useEffect(() => {
    let info: Array<{
      show: String | number;
      positive: Boolean;
      pMsg?: number;
    }> = [];

    // balance criteria
    let sp = vals.balance / vals.income;
    if (vals.balance < 0) info.push({ show: vals.balance, positive: false });
    else if (sp < savingTarget)
      info.push({ show: (sp * 100).toFixed(2) + '%', positive: true, pMsg: 1 });
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
    else info.push({ show: 'Public Transportation', positive: true, pMsg: 0 });

    setCriteriaVals(info);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (criteraNo == 4) {
      setStage('posttest');
    }
    setLoading(false);
  }, [criteraNo]);

  return (
    <Card width="50vw" className="evalCard">
      <ListHeading>Evaluation</ListHeading>
      <Line />
      {!loading && (
        <Criterias no={criteraNo} propVal={criteriaVals[criteraNo]} />
      )}
      <button
        className="yellow-button"
        style={{ margin: '3% auto 0' }}
        onClick={() => {
          setLoading(true);
          setCriteriaNo(criteraNo + 1);
        }}
      >
        Continue
      </button>
    </Card>
  );
};

export default Evaluation;
