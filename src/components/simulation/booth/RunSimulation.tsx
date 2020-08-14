import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../../style/simulation.css';

import Spinner from './Spinner';
import JobSummary from './JobSummary';

import data from '../../../json/Simulation.json'; // Data related to jobs
import BoothSelect from './BoothSelect';
import Booth from './Booth';

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 25% 50% 25%;
  place-items: center;
  justify-items: center;
`;

const ScreenCenter = styled.div`
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  text-align: center;
`;

const UserInfo = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  padding-top: 10%;
`;

interface career {
  position: String;
  monthlySalary: number;
  annualSalary: number;
  hourlyRate: number;
  federalTax: number;
  socialSecurity: number;
  medicare: number;
  stateTax: number;
  education: string;
}

const RunSimulation = (): JSX.Element => {
  const [simStage, setSimStage] = useState('Job-Selection'); //Used for switching between the stages of the simulation

  const [jobOptions, setJobOptions] = useState([]); // Job options available to players
  const [myCareer, setMyCareer] = useState<career | undefined>(undefined);
  const [currentBooth, setCurrentBooth] = useState(null);
  const [expenses, setExpenses] = useState(0);

  /**
   * Extracts job options from Simulation.json and stores in "jobOptions"
   */
  const getJobOptions = () => {
    let tempJobs = new Array();
    for (let job of data.jobs) {
      for (let occupation of job.occupations) {
        tempJobs.push(occupation.position);
      }
    }

    setJobOptions(tempJobs);
  };

  useEffect(() => {
    getJobOptions();
  }, []);

  const increaseExpenses = (newExpense: number) => {
    setExpenses(expenses + newExpense);
  };

  const getRemianingMoney = () => {
    return (myCareer.monthlySalary - expenses).toFixed(2);
  };

  return (
    <Wrapper>
      <ScreenCenter>
        {simStage === 'Job-Selection' && (
          <Spinner
            jobOptions={jobOptions}
            setMyCareer={setMyCareer}
            setSimStage={setSimStage}
          />
        )}
        {simStage === 'Job-Selected' && (
          <>
            <JobSummary career={myCareer} />{' '}
            <button
              className="customButton"
              style={{ marginTop: '2%' }}
              onClick={() => setSimStage('Booth-Selection')}
            >
              Continue
            </button>
          </>
        )}
        {simStage === 'Booth-Selection' && (
          <div>
            <UserInfo>
              {console.log(myCareer)}
              Remaining Income:{' '}
              {myCareer.monthlySalary ? getRemianingMoney() : ''}
            </UserInfo>
            <BoothSelect
              setSimStage={setSimStage}
              setCurrentBooth={setCurrentBooth}
              currentIncome={getRemianingMoney()}
            />
          </div>
        )}
        {simStage === 'Booth-Selected' && (
          <div>
            <Booth
              setSimStage={setSimStage}
              currentBooth={currentBooth}
              data={data}
              currentIncome={getRemianingMoney()}
              increaseExpenses={increaseExpenses}
            />
            <UserInfo>Remaining Income: {getRemianingMoney()}</UserInfo>
          </div>
        )}
      </ScreenCenter>
    </Wrapper>
  );
};

export default RunSimulation;
