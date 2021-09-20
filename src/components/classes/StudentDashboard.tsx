import React from 'react';
import { useState, useEffect } from 'react';
import api from 'api';
import StudentAddClass from './StudentAddClass';

export interface classType {
  name: String;
  date: Date;
  createdBy: String;
  organization: String;
}

const StudentDashboard = (props: any) => {
  const [myClass, setMyClass] = useState<classType | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    api
      .getStudentClass()
      .then((res) => {
        setMyClass(res.classDetails);
      })
      .catch((err) => {
        window.alert(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const leaveClass = () => {
    let confirm = window.confirm('Are you sure you want to leave this class?');
    if (confirm) {
      api
        .leaveClass()
        .then((res) => {
          setMyClass(null);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  if (loading) return null;
  else
    return (
      <>
        {!myClass ? (
          <StudentAddClass setMyClass={setMyClass} />
        ) : (
          <div
            className="generic-card"
            style={{
              minWidth: '40vw',
              margin: 'auto',
              marginTop: '15vh',
            }}
          >
            <div className="ta-center general-heading">Your Class</div>
            <hr />
            <br />
            <div className="bold-font bold" style={{ fontSize: '1.5em' }}>
              {myClass.name}
            </div>
            <div className="creation-date meta-txt">
              Created on: {new Date(myClass.date).toLocaleString()}
            </div>
            <div>Teacher: {myClass.createdBy}</div>
            <div>Organization: {myClass.organization}</div>

            <div
              className="red-button"
              onClick={leaveClass}
              style={{ marginTop: '2%' }}
            >
              Leave
            </div>
          </div>
        )}
      </>
    );
};

export default StudentDashboard;
