import React from 'react';
import { Card } from 'style/styled';
import { ListHeading, Line } from 'style/preposttest';
import { Link } from 'react-router-dom';

const RedirectToClass = () => {
  return (
    <>
      <Card
        width="45vw"
        style={{
          margin: '20vh auto 0',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5em 4em 2em',
        }}
      >
        <ListHeading>PLEASE JOIN A CLASS FIRST</ListHeading>
        <Line />
        <br />
        <div className="ta-center" style={{ fontSize: '1em' }}>
          You must join a class before taking the simulation. Ask your teacher
          for a 5 digit code of your class.
        </div>
        <Link to="/classes">
          <div
            className="yellow-button"
            style={{ margin: 'auto', marginTop: '1em' }}
          >
            Join Class
          </div>
        </Link>
      </Card>
    </>
  );
};

export default RedirectToClass;
