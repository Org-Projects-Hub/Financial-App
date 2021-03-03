import React, { useEffect, useState } from 'react';
import { CustomModal, Modal } from '../shared-components/Modal';
import api from '../../api';

const TeacherDashboard = () => {
  const [create, setCreate] = useState(false);
  const [newClassName, setNewClassName] = useState('');
  const [myClasses, setMyClasses] = useState([]);
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

  const updateClassList = () => {
    api
      .getMyClasses()
      .then((res) => {
        if (res.success) {
          setMyClasses(res.classes);
        } else {
          window.alert(
            'Something went wrong \nPlease refresh the page and try again!'
          );
        }
      })
      .catch((err) => {
        window.alert(
          'Something went wrong \nPlease refresh the page and try again!'
        );
      });
  };

  useEffect(() => {
    updateClassList();
  }, []);

  const createClass = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    api
      .createNewClass(newClassName)
      .then((res) => {
        if (res.success) {
          window.alert('Class Created Successfully!!');
          updateClassList();
        } else {
          window.alert(
            'Something went wrong \nPlease refresh the page and try again!'
          );
        }
      })
      .catch((err) => {
        window.alert(
          'Something went wrong \nPlease refresh the page and try again!'
        );
      });
  };

  const ModalBody = () => {
    return (
      <>
        <form action="">
          <div className="ui input">
            <input
              type="text"
              name="name"
              value={newClassName}
              placeholder="Name of Class"
              onChange={(e) => setNewClassName(e.target.value)}
            />
          </div>
        </form>
      </>
    );
  };

  const ModalActions = () => {
    return (
      <>
        <div
          className="yellow-button"
          style={{ padding: '1.5%', margin: 'auto' }}
          onClick={createClass}
        >
          Submit
        </div>
      </>
    );
  };

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
      <div
        className="yellow-button center-margin "
        onClick={() => setCreate(true)}
      >
        Create New Class
      </div>
      {create ? (
        <CustomModal
          header={'Create New Class'}
          body={ModalBody}
          actions={ModalActions}
          close={() => setCreate(false)}
        />
      ) : null}
    </div>
  );
};

export default TeacherDashboard;
