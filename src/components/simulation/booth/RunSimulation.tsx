import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../../style/simulation.css';

import Spinner from './Spinner';
import JobSummary from './JobSummary';

import data from '../../../json/Simulation.json'; // Data related to jobs
import BoothSelect from './BoothSelect';
import Booth from './Booth';
import api from '../../../api';

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
  padding: 4% 0;
  color: white;

  font-size: 1.05em;
  font-weight: 500;
`;

export interface career {
  position: String;
  monthlySalary: number;
  annualSalary: number;
  hourlyRate: number;
  federalTax: number;
  socialSecurity: number;
  medicare: number;
  stateTax: number;
  education: string;
  afterTaxMontlySalary: number;
}

const tempCareer = {
  annualSalary: 31137.600000000002,
  education: 'HighSchool Diploma',
  federalTax: 389.22,
  hourlyRate: 16.2175,
  medicare: 36.327200000000005,
  monthlySalary: 2594.8,
  position: 'Carpenter',
  socialSecurity: 155.68800000000002,
  stateTax: 85.62840000000001,
  afterTaxMontlySalary: 1190.235648,
};

const RunSimulation = (): JSX.Element => {
  const [simStage, setSimStage] = useState('Job-Selection'); //Used for switching between the stages of the simulation

  const [jobOptions, setJobOptions] = useState([]); // Job options available to players
  const [myCareer, setMyCareer] = useState<career | undefined>(tempCareer);
  const [currentBooth, setCurrentBooth] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [visitedBooths, setVisitedBooths] = useState([]);

  useEffect(() => {
    // Get jon names from backend and store it in jobOptions
    api
      .getJobNames()
      .then((res) => {
        setJobOptions(res);
      })
      .catch((err) => console.log(err));
  }, []);

  /**
   * Update Salary after a career is selected
   */
  useEffect(() => {
    setCurrentBalance(myCareer.afterTaxMontlySalary);
  }, [myCareer]);

  /**
   * Decreases the value of "currentBalance" after a purchase in "Booth" component
   * @param newExpense The dollar amount of a new expense
   */
  const purchase = (newExpense: number) => {
    setCurrentBalance(currentBalance - newExpense);
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
            <JobSummary career={myCareer} />
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
              Remaining Income:{' '}
              {myCareer.afterTaxMontlySalary ? currentBalance.toFixed(2) : ''}
            </UserInfo>
            <BoothSelect
              setSimStage={setSimStage}
              setCurrentBooth={setCurrentBooth}
              visitedBooths={visitedBooths}
              setVisitedBooths={setVisitedBooths}
              currentBalance={currentBalance}
            />
          </div>
        )}
        {simStage === 'Booth-Selected' && (
          <div>
            <Booth
              setSimStage={setSimStage}
              currentBooth={currentBooth}
              data={data}
              currentBalance={currentBalance}
              increaseExpenses={purchase}
              remainingBalance={currentBalance.toFixed(2)}
            />
            {/* <UserInfo>Remaining Income: {currentBalance.toFixed(2)}</UserInfo> */}
          </div>
        )}
      </ScreenCenter>
    </Wrapper>
  );
};

export default RunSimulation;
