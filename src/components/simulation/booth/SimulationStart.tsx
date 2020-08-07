import React, { useState, useEffect } from 'react';
import Wheel from './Wheel';
import styled from 'styled-components';
import data from '../../../json/Simulation.json';
import BoothSelect from './BoothSelect';
import Booth from './Booth';
import Summary from './Summary';
import PriceWarning from './PriceWarning';

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 25% 50% 25%;
  place-items: center;
  justify-items: center;
`;

const WheelPlace = styled.div`
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
`;

const Button = styled.div`
  grid-row: 3 / span 1;
`;

const UserInfo = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  padding-top: 10%;
`;

/**
 * SimulationStart.tsx
 *
 * @author: Nicholas Salter
 * @desc: Called by [Simulation]. Switches between the different stages of the simulation
 * @param {string}   stage        The current stage of the entire simulation (preTest, simulation, postTest)
 * @param {Function} setStage     Sets the overal stage of the simulation (preTest, simulation, postTest)
 * @return TSX to be rendered.
 */
const SimulationStart = ({ stage, setStage }: any): JSX.Element => {
  interface career {
    position: String;
    annualSalary: number;
    hourlyRate: number;
    federalTax: number;
    socialSecurity: number;
    medicare: number;
    stateTax: number;
    education: string;
  }

  const [edlevel, setEd] = useState(null); //Sets the users education level (Used in Wheel.tsx)
  const [job, setJob] = useState(null); //Sets the users job (Used in Wheel.tsx)
  const [career, setCareer] = useState(null);

  const [simStage, setSimStage] = useState(null); //Used for switching between the stages of the simulation
  const [currentBooth, setCurrentBooth] = useState(null);

  const { education } = data; //string array of the education options

  const [currentIncome, setIncome] = useState(null);

  const [jobOptions, setJobOptions] = useState(null);

  //Setting the simStage to education at the begging of the simuatlion
  if (stage === 'simulation' && simStage === null) setSimStage('job'); //CHANGED FOR DEBUGGING, SET TO {"education"} TO RUN PROPERLY

  const { jobs } = data;
  let x = new Array();
  let counter = 0;

  const setJobAndIncome = () => {
    if (job == null || currentIncome == null) {
      for (let i = 0; i < jobs.length; i++) {
        for (let j = 0; j < jobs[i].occupations.length; j++) {
          if (job == null && currentIncome == null) {
            x[counter] = jobs[i].occupations[j].position;
            counter++;
          } else if (job != null && currentIncome == null) {
            if (jobs[i].occupations[j].position == job) {
              var y = jobs[i].occupations[j].grossmonthly;
              setIncome(y); //CHANGE TO y FOR NORMAL PROCESSING

              var userCareer: career = {
                position: job,
                annualSalary: y * 12,
                hourlyRate: y / 160,
                federalTax: y * 0.15,
                socialSecurity: y * 0.06,
                medicare: y * 0.014,
                stateTax: y * 0.033,
                education: jobs[i].reqed,
              };

              setCareer(userCareer);
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    setJobAndIncome();
    setJobOptions(x);
    // console.table(x);
    // setJob(x[2]);
    // setSimStage('boothSelect');
  }, []);

  useEffect(() => {
    console.warn('Setting again!');
    setJobAndIncome();
    console.log(currentIncome);
  }, [job]);

  return (
    <Wrapper>
      <WheelPlace>
        {/**Displaying the spinner based on which stage the user is on */}

        {simStage === 'education' && (
          <Wheel
            input={education}
            stage={simStage}
            setChoice={setEd}
            setStage={setSimStage}
          />
        )}
        {simStage === 'job' ? (
          <>
            <Wheel
              input={jobOptions}
              stage={simStage}
              setChoice={setJob}
              setStage={setSimStage}
              career={career}
            />
          </>
        ) : (
          <></>
        )}
        {simStage == 'boothSelect' ? (
          <div>
            <UserInfo>
              Remaining Income: {currentIncome ? currentIncome.toFixed(2) : ''}
            </UserInfo>
            <BoothSelect
              setSimStage={setSimStage}
              setCurrentBooth={setCurrentBooth}
              currentIncome={currentIncome}
            />
          </div>
        ) : (
          <></>
        )}
        {simStage == 'booth' ? (
          <div>
            <Booth
              setSimStage={setSimStage}
              currentBooth={currentBooth}
              data={data}
              currentIncome={currentIncome}
              setIncome={setIncome}
            />
            <UserInfo>Remaining Income: {currentIncome.toFixed(2)}</UserInfo>
          </div>
        ) : (
          <></>
        )}

        {simStage == 'summary' && <Summary />}
        {simStage == 'pricewarning' && (
          <PriceWarning setSimStage={setSimStage} />
        )}
      </WheelPlace>
      {/**Display the button to take the PostTest when the user has reached the end of the simulation */}
      {simStage === 'postTest' && (
        <button className="btn" onClick={(e) => setStage('posttest')}>
          TO POSTTEST
        </button>
      )}
    </Wrapper>
  );
};
export default SimulationStart;
