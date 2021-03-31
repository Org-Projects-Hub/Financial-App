import React, { useEffect, useState } from 'react';
import { CustomModal, Modal } from '../shared-components/Modal';
import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
import ClassDetails from './ClassDetails';
import api from '../../api';

const TeacherDashboard = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={TeacherHome}></Route>
      <Route path={`${path}/:classId`}>
        <ClassDetails />
      </Route>
    </Switch>
  );
};

const TeacherHome = () => {
  const [create, setCreate] = useState(false);
  const [newClassName, setNewClassName] = useState('');
  const [myClasses, setMyClasses] = useState(null);

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

    setCreate(false);
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
    console.table(myClasses);
    return myClasses.map((classInfo: any) => {
      return (
        <Link
          to={`/classes/${classInfo._id}`}
          style={{ color: 'black' }}
          className="class-card"
          id={classInfo._id}
          key={classInfo._id}
        >
          <div className="class-name bold-font bold">
            {classInfo.name.toUpperCase()}
          </div>
          <div className="creation-date meta-txt">
            Created on: {new Date(classInfo.date).toLocaleString()}
          </div>
          <div className="student-no">
            No of students: {classInfo.num_student}
          </div>
          <div className="auth-code">
            <div>Auth Code</div>
            <div className="ta-center txt-grey">{classInfo.authCode}</div>
          </div>
        </Link>
      );
    });
  };

  if (!myClasses) return null;
  else
    return (
      <div
        className="generic-card"
        style={{
          width: '50vw',
          margin: 'auto',
          minHeight: '80vh',
          maxHeight: '90vh',
          overflow: 'auto',
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
