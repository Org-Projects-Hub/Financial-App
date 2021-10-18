import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Card } from 'style/styled';
import { ListHeading, Line } from 'style/preposttest';
import { setStageType } from 'types/shared';

const ContinueTimer: React.FC<{
  setContinueType: Dispatch<SetStateAction<number>>;
}> = ({ setContinueType }) => {
  const [timer, setTimer] = useState<number>(300000);
  const timerRef = useRef(timer);
  timerRef.current = timer;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timerRef.current - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    timerRef.current = timer;
    if (timer <= 0) setContinueType(3);
  }, [timer]);

  const getTime = () => {
    var minutes: number = Math.floor(timer / 60000);
    var seconds: number = parseInt(((timer % 60000) / 1000).toFixed(0));

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <button
      className="yellow-button center-margin"
      onClick={(e) => e.preventDefault()}
      style={{ cursor: 'not-allowed' }}
    >
      {timer > 0 ? `Continue in [${getTime()}]` : 'Continue'}
    </button>
  );
};

const Additional_Resources: React.FC<{ setStage: setStageType }> = ({
  setStage,
}) => {
  // The type of continue button to show
  const [continueType, setContinueType] = useState<number>(1);

  /**
   * Open the resource in a new tab
   * @param e Anchor click event
   */
  const openResource = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    window
      .open(
        'https://www.capitalone.com/learn-grow/business-resources/',
        '_blank'
      )
      .focus();
  };

  return (
    <Card
      width="45vw"
      style={{
        margin: '20vh auto 0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ListHeading>Additional Resources</ListHeading>
      <Line />
      <br />
      <div
        className="ta-center"
        style={{ fontSize: '1.2em', marginBottom: '1rem' }}
      >
        Let's look at some additional resources to help you learn more about
        personal and business finance
      </div>
      {continueType == 1 && (
        <button
          className="blue-button center-margin"
          onClick={(e) => {
            openResource(e);
            setContinueType(2);
          }}
        >
          Let's Go!
        </button>
      )}
      {continueType == 2 && <ContinueTimer setContinueType={setContinueType} />}
      {continueType == 3 && (
        <button
          className="yellow-button center-margin"
          onClick={() => setStage('posttest')}
        >
          Continue
        </button>
      )}
    </Card>
  );
};

export default Additional_Resources;
