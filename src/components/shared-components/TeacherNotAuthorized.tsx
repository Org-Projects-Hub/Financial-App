import React from 'react';
import { Card } from 'style/styled';
import { ListHeading, Line } from 'style/preposttest';

const TeacherNotAuthorized = () => {
  return (
    <Card
      width="45vw"
      style={{
        margin: '20vh auto 0',
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content',
      }}
    >
      <ListHeading>Authorization Required!</ListHeading>
      <Line />
      <br />
      <div
        className="ta-center"
        style={{ fontSize: '1.2em', marginBottom: '1rem' }}
      >
        <p>
          You aren't authorized to create classes and invite students to the
          simulation. Please contact United Way of Northeast Louisiana at{' '}
          <u>spendsmart@unitedwaynela.org</u> to get authorized.
        </p>
        <br />
        <p>
          Please mention your full name and affiliated organization in the
          email.
        </p>
      </div>
    </Card>
  );
};

export default TeacherNotAuthorized;
