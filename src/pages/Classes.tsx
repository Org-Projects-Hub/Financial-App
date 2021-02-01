import React, { ChangeEventHandler, useEffect, useState } from 'react';
import backgroundImage from '../assets/backgrounds/bg-classes.svg';
import { StudentDashboard } from '../components';

const ClassesPage = ({ userType }: { userType: String }): JSX.Element => {
  return (
    <div
      className="bg-gradient fill-screen bg-image general-container "
      style={{ backgroundImage: `url(${backgroundImage})`, display: 'grid' }}
    >
      {userType == 'student' ? <StudentDashboard /> : null}
    </div>
  );
};

export default ClassesPage;
