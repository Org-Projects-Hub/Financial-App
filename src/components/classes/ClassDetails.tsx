import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';

const tempData = [
  { name: 'Ashish', simulationStage: 'pretest' },
  { name: 'Ashish', simulationStage: 'pretest' },
  { name: 'Ashish', simulationStage: 'simulation' },
  { name: 'Ashish', simulationStage: 'posttest' },
  { name: 'Ashish', simulationStage: 'posttest' },
  { name: 'Ashish', simulationStage: 'pretest' },
  { name: 'Ashish', simulationStage: 'simulation' },
  { name: 'Ashish', simulationStage: 'simulation' },
  { name: 'Ashish', simulationStage: 'pretest' },
  { name: 'Ashish', simulationStage: 'pretest' },
  { name: 'Ashish', simulationStage: 'pretest' },
];

const ClassDetails = () => {
  const [classInfo, setClassInfo] = useState({
    name: 'MyClass',
    date: '2019/01/20',
    authCode: 'anpao',
    students: tempData,
  });
  let { classId } = useParams<{ classId: string }>();

  useEffect(() => {
    api
      .getClassDetails(classId)
      .then((res) => {
        if (res.success) {
          setClassInfo(res.classInfo);
        }
      })
      .catch((err) => window.alert('404 Error'));
  }, []);

  const rowsGenerator = () => {
    return classInfo.students.map((item, i) => {
      let color =
        item.simulationStage == 'simulation'
          ? '#fcb23d'
          : item.simulationStage == 'pretest'
          ? 'rgb(4 85 148)'
          : 'rgb(125 182 220)';
      return (
        <tr key={i}>
          <td className="ta-center">{item.name}</td>
          <td className="ta-center uppercase">
            <span
              style={{
                backgroundColor: `${color}`,
                padding: '1% 2%',
                color: 'white',
              }}
            >
              {item.simulationStage}
            </span>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
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
        <div className="ta-center general-heading">
          {classInfo.name.toUpperCase()}
        </div>
        <hr />
        <div
          style={{ fontSize: '1.12em', textAlign: 'center', marginTop: '1%' }}
        >
          <p className="creation-date meta-txt">
            Created on: {new Date(classInfo.date).toLocaleString()}
          </p>
          <p className="student-no">
            No of students: {classInfo.students.length}
          </p>
          <p>
            <span>Auth Code: </span>
            <span className="ta-center txt-grey">{classInfo.authCode}</span>
          </p>
        </div>

        <div
          className="yellow-button"
          style={{ margin: 'auto', fontSize: '1.2em', marginTop: '1%' }}
        >
          View Class Stats
        </div>
        <div className="generic-card" style={{ marginTop: '1.7%' }}>
          <div
            className="general-heading ta-center"
            style={{ fontSize: '1.5em' }}
          >
            Students
          </div>
          <table style={{ width: '80%', margin: 'auto' }}>
            <tr className="uppercase">
              <th
                className="ta-center bold-font"
                style={{ fontSize: '1.35em' }}
              >
                Name
              </th>
              <th
                className="ta-center bold-font"
                style={{ fontSize: '1.35em' }}
              >
                Stage
              </th>
            </tr>
            {rowsGenerator()}
          </table>
        </div>
      </div>
    </>
  );
};

export default ClassDetails;
