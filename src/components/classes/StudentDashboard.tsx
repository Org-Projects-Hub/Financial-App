import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../api';
import StudentAddClass from './StudentAddClass';

export interface classType {
  name: String;
  date: Date;
  createdBy: String;
  organization: String;
}

const StudentDashboard = (props: any) => {
  const [myClass, setMyClass] = useState<classType | null>(null);

  useEffect(() => {
    api
      .getMyClasses()
      .then((res) => {
        if (res.success) {
          if (res.classes.length > 0) {
            setMyClass(res.classes[0]);
          } else {
            setMyClass(null);
          }
        } else {
          window.alert(
            'Something went wrong \nPlease refresh the page and try again!'
          );
        }
      })
      .catch((err) => {
        // window.alert(
        //   'Something went wrong \nPlease refresh the page and try again!'
        // );
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
            Created on: {myClass.date}
          </div>
          <div>Teacher: {myClass.createdBy}</div>
          <div>Organization: {myClass.organization}</div>

          <div className="red-button" onClick={leaveClass}>
            Leave
          </div>
        </div>
      )}
    </>
  );
};

export default StudentDashboard;
