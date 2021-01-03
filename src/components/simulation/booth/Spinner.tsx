import React, { useState, useEffect } from 'react';
import api from '../../../api';
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
   * Periodically changes the option displayed on screen by increasing value of "selection"
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
    api
      .getJobDetail(jobOptions[selection].replaceAll('/', '_')) // String needs to be fixed before sending to backend
      .then((occupation) => {
        let y = occupation.annual_salary / 12; // Monthly salary
        let { training, credit } = occupation;
        setMyCareer({
          position: jobOptions[selection],
          monthlySalary: y.toFixed(2),
          annualSalary: occupation.annual_salary,
          hourlyRate: y / 160,
          federalTax: y * 0.15,
          socialSecurity: y * 0.06,
          medicare: y * 0.014,
          stateTax: y * 0.033,
          insurance: y * 0.035,
          education: 'Bachelor',
          training,
          credit,
          afterTaxMontlySalary:
            y - y * (0.15 + 0.06 + 0.014 + 0.033 + 0.035) - training - credit,
        });

        setSimStage('Job-Selected'); // Change the state of "RunSimulation" component when donw
      })
      .catch((err) => console.log(err));
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
