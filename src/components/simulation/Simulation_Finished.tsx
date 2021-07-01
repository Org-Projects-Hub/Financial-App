import React, { MouseEvent } from 'react';
import { Card } from 'style/styled';
import { ListHeading, Line } from 'style/preposttest';
import { setStageType } from 'types/shared';

const Simulation_Finished: React.FC<{}> = () => {
  /**
   * Open the resource in a new tab
   * @param e Anchor click event
   */
  const openResource = (e: MouseEvent<HTMLAnchorElement>) => {
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
      <ListHeading>The End</ListHeading>
      <Line />
      <br />
      <div className="ta-center" style={{ fontSize: '1em' }}>
        Thank you for taking this simulation. We hope that our application left
        you with a basic understanding of personal finances. Remember,
        maintaining a healthy financial life is an important skill.
      </div>
    </Card>
  );
};

export default Simulation_Finished;
