import React from 'react';
import {
  NumberStr,
  QuestionStr,
  OptionButton,
  ListHeading,
  Line,
} from 'style/preposttest';
import { Card, Grid } from 'style/styled';

const TestInfoCard = ({
  stage,
  setShowInfoCard,
}: {
  stage: string;
  setShowInfoCard: any;
}) => {
  return (
    <Card width="50vw" style={{ margin: '20vh auto', padding: '2%' }}>
      {stage == 'pretest' ? (
        <ListHeading>HOW WELL DO YOU KNOW YOUR FINANCES?</ListHeading>
      ) : (
        <ListHeading>DID YOU LEARN SOMETHING NEW?</ListHeading>
      )}
      <Line />
      <div style={{ fontSize: '1.1em', margin: '2%' }}>
        {stage == 'pretest' ? (
          <>
            <div>
              Before we start, let's see how much do you know about personal
              finance.
            </div>
            <div>
              We will ask you some questions. Answer each question based on your
              current knowledge.
            </div>
          </>
        ) : (
          <>
            <div>
              Before we end this simulation, let's check how you opinions
              regarding personal finance have changed.
            </div>
          </>
        )}
      </div>

      <div
        className="yellow-button"
        style={{ margin: '3% auto 0' }}
        onClick={() => setShowInfoCard(false)}
      >
        Continue
      </div>
    </Card>
  );
};

export default TestInfoCard;
