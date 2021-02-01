import React from 'react';
import backgroundImage from '../assets/backgrounds/bg-classes.svg';

const ClassesPage = (): JSX.Element => {
  return (
    <div
      className="bg-gradient fill-screen bg-image general-container "
      style={{ backgroundImage: `url(${backgroundImage})`, display: 'grid' }}
    ></div>
  );
};

export default ClassesPage;
