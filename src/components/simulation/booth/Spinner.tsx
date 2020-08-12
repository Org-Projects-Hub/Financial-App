import React, { useState, useEffect } from 'react';
import SpinnerSVG from '../../../assets/spinner.svg';
import data from '../../../json/Simulation.json';

/**
 * @author: Ashish DEv
 * @desc: Called by RunSimulation.tsx to show the spinning element where the palyer chooses a job.
 * @param jobOptions The job options avilable to the player
 * @param setSimStage Function to move the simulation forward
 * @param setMyCareer Function to change the career of the player
 */
const Spinner = ({
  jobOptions,
  setSimStage,
  setMyCareer,
}: any): JSX.Element => {
  const [spinning, setSpinning] = useState(false);
  const [selection, setSelection] = useState(-1);

  /**
   * Opening Statement of the spinner
   */
  const getOpeningStatement = () => {
    return (
      <>
        CHOOSE YOUR JOB!
        <br /> <br />
        Hit SPIN to start and STOP to choose your Career
      </>
    );
  };

  /**
   * Periodically changes the option displayed on screen
   */
  useEffect(() => {
    if (spinning) {
      setTimeout(() => {
        setSelection((selection + 1) % jobOptions.length);
      }, 200);
    }
  }, [selection]);

  /**
   * Called by STOP button
   */
  const nextStep = () => {
    setSpinning(false);
    getCareer();
    setSimStage('Job-selected');
  };

  /**
   * Called by nextStep to get career data from Simulation.json
   * sets career in RunSimulation.tsx
   */
  const getCareer = () => {
    for (let job of data.jobs) {
      for (let occupation of job.occupations) {
        if (occupation.position === jobOptions[selection]) {
          let y = occupation.grossmonthly;
          setMyCareer({
            position: occupation.position,
            monthlySalary: y,
            annualSalary: y * 12,
            hourlyRate: y / 160,
            federalTax: y * 0.15,
            socialSecurity: y * 0.06,
            medicare: y * 0.014,
            stateTax: y * 0.033,
            education: job.reqed,
          });
          return;
        }
      }
    }
  };

  return (
    <div className="spinnerContainer">
      <img src={SpinnerSVG} className="spinner" />
      <div className="spinnerText">
        <span
          className={`${spinning ? 'wheel-animate' : 'wheel-stationary'}`}
          style={{ width: '100%', height: '80%' }}
        >
          {selection !== -1 ? jobOptions[selection] : getOpeningStatement()}
        </span>
      </div>
      <div className="spinnerButtons">
        <button
          onClick={() => {
            if (!spinning) {
              setSelection(0);
              setSpinning(true);
            }
          }}
        >
          SPIN
        </button>
        <span style={{ display: 'inline-block', width: '30%' }}></span>
        <button onClick={() => spinning && nextStep()}>STOP</button>
      </div>
    </div>
  );
};

export default Spinner;
