import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../../style/simulation.css';

import Spinner from './Spinner';
import JobSummary from './JobSummary';

import data from '../../../json/Simulation.json'; // Data related to jobs
import BoothSelect from './BoothSelect';

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

  // Let sipnner set the career.
  useEffect(() => {}, []);

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
        {simStage === 'Job-selected' && (
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
              {myCareer.monthlySalary ? myCareer.monthlySalary.toFixed(2) : ''}
            </UserInfo>
            <BoothSelect
              setSimStage={setSimStage}
              setCurrentBooth={setCurrentBooth}
              currentIncome={myCareer.monthlySalary}
            />
          </div>
        )}
      </ScreenCenter>
    </Wrapper>
  );
};

export default RunSimulation;
