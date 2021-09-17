import React, { useEffect, useState } from 'react';
import { CustomModal } from '../shared-components/Modal';
import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
import { ClassDetails, ClassStats } from '../index';
import api from 'api';
import { Card } from 'style/styled';
import { Line, ListHeading } from 'style/preposttest';

const TeacherDashboard = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={TeacherHome}></Route>
      <Route path={`${path}/stats/:authCode`}>
        <ClassStats />
      </Route>
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
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [loading, setLoading] = useState(true);

  const updateClassList = () => {
    api
      .getMyClasses()
      .then((res) => {
        setMyClasses(res.classes);
      })
      .catch((err) => {
        if (err.status === 401) setIsAuthorized(false);
        else alert(err.message);
      })
      .finally(() => setLoading(false));

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
        alert('Class Created Successfully!!');
        updateClassList();
      })
      .catch((err) => {
        alert(err.message);
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

  if (loading) return null;
  else if (!isAuthorized)
    return (
      <Card
        width="45vw"
        style={{
          margin: '20vh auto 0',
          display: 'flex',
          flexDirection: 'column',
          height: 'fit-content',
        }}
      >
        <ListHeading>Authorization Required!</ListHeading>
        <Line />
        <br />
        <div
          className="ta-center"
          style={{ fontSize: '1.2em', marginBottom: '1rem' }}
        >
          <p>
            You aren't authorized to create classes and invite students to the
            simulation. Please contact United Way of Northeast Louisiana at{' '}
            <u>spendsmart@unitedwaynela.org</u> to get authorized.
          </p>
          <br />
          <p>
            Please mention your full name and affiliated organization in the
            email.
          </p>
        </div>
      </Card>
    );
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
        {myClasses ? (
          <>{classCardGenerator()}</>
        ) : (
          <div style={{ height: '5vh' }}></div>
        )}
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
