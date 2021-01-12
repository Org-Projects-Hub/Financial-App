import React, { useState, useEffect, useRef, useMemo } from 'react';
import api from '../../../api';
import SpinnerSVG from '../../../assets/spinner.svg';

/**
 * @author: Ashish DEv
 * @desc: Called by RunSimulation.tsx to show the spinning element where the palyer chooses a job.
 * @param getJobDetail: Function to set the new career and to move the selection to next step
 */
const Spinner = ({ getJobDetail }: any): JSX.Element => {
  const [spinning, setSpinning] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [selection, setSelection] = useState(-1);
  const [jobOptions, setJobOptions] = useState([]); // Job options available to players

  /**
   * gets the jobOptions from backend and set loading to false
   */
  useEffect(() => {
    api
      .getJobNames()
      .then((res) => {
        setJobOptions(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
   * Uses getJobDetail function to set the career of the user and moves the simulation to next step.
   * @param selected The job selected by user.
   */
  const nextStep = (selected: any = jobOptions[selection]) => {
    getJobDetail(selected, true);
  };

  if (loading) return null;
  else
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
          <button
            onClick={() => {
              spinning && nextStep();
            }}
          >
            STOP
          </button>
        </div>
      </div>
    );
};

export default Spinner;
