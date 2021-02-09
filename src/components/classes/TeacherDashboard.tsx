import React from 'react';

const TeacherDashboard = () => {
  const temp = [
    {
      name: 'Hello',
      date: new Date().toISOString().slice(0, 10),
      noOfStudents: 23,
      authCode: 71203,
    },
    { name: 'Hello', date: Date.now(), noOfStudents: 23, authCode: 71203 },
    { name: 'Hello', date: Date.now(), noOfStudents: 23, authCode: 71203 },
  ];

  const classCardGenerator = () => {
    return temp.map((classInfo, i) => {
      return (
        <div className="class-card" key={i}>
          <div className="class-name bold-font bold">{classInfo.name}</div>
          <div className="creation-date meta-txt">
            Created on: {classInfo.date}
          </div>
          <div className="student-no">
            No of students: {classInfo.noOfStudents}
          </div>
          <div className="auth-code">
            <div>Auth Code</div>
            <div className="ta-center txt-grey">{classInfo.authCode}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div
      className="generic-card"
      style={{
        width: '50vw',
        margin: 'auto',
        minHeight: '80vh',
      }}
    >
      <div className="ta-center general-heading">Your Classes</div>
      <hr />
      {classCardGenerator()}
      <div className="yellow-button center-margin ">Create New Class</div>
    </div>
  );
};

export default TeacherDashboard;
