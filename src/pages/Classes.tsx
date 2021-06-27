import React from 'react';
import { classes_background } from 'assets';
import { StudentDashboard, TeacherDashboard } from 'components';

import 'style/classes.css';

const ClassesPage = ({ userType }: { userType: String }): JSX.Element => {
  return (
    <div
      className="bg-gradient fill-screen bg-image general-container "
      style={{ backgroundImage: `url(${classes_background})`, display: 'grid' }}
    >
      {userType == 'student' ? <StudentDashboard /> : <TeacherDashboard />}
    </div>
  );
};

export default ClassesPage;
