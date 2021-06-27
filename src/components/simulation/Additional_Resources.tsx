import React, { MouseEvent } from 'react';
import { Card } from 'style/styled';
import { ListHeading, Line } from 'style/preposttest';
import { setStageType } from 'types/shared';

const Additional_Resources: React.FC<{ setStage: setStageType }> = ({
  setStage,
}) => {
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
      <ListHeading>Additional Resources</ListHeading>
      <Line />
      <br />
      <div
        className="ta-center"
        style={{ fontSize: '1.2em', marginBottom: '1rem' }}
      >
        <a className="pointer" onClick={openResource}>
          Click here
        </a>{' '}
        to view more resources and learn more about personal and business
        finance
      </div>
      <button
        className="yellow-button center-margin"
        onClick={() => setStage('posttest')}
      >
        Continue
      </button>
    </Card>
  );
};

export default Additional_Resources;
