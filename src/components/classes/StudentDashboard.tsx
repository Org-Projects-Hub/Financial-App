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
        if (res.success) {
          setMyClass(res.classDetails);
        }
        setLoading(false);
      })
      .catch((err) => {
        window.alert(
          'Something went wrong \nPlease refresh the page and try again!'
        );
      });
  }, []);

  const leaveClass = () => {
    let confirm = window.confirm('Are you sure you want to leave this class?');
    if (confirm) {
      let handleError = () => {
        window.alert(
          'Something went wrong! \nPlease refresh the page and try again.'
        );
      };

      api
        .leaveClass()
        .then((res) => {
          if (!res.success) handleError();
          else {
            setMyClass(null);
          }
        })
        .catch((err) => {
          handleError();
        });
    }
  };

  return (
    <>
      {!loading ? (
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
      ) : null}
    </>
  );
};

export default StudentDashboard;
