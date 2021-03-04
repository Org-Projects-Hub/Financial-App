import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GridColItem, Button } from '../../style/styled';
import { useState, useEffect } from 'react';
import { CustomModal, Modal } from '../shared-components/Modal';
import api from '../../api';

const ClassDiv = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 2%;
  background: white;
  cursor: pointer;
  border: 2px solid blue;
  border-radius: 1em;
  transition: box-shadow 500ms;
  z-index: 3;

  &:hover {
    box-shadow: 5px 5px 15px 1px gray;
  }
`;

const StartButton = styled(Button)`
  position: relative;
  top: 12%;
  min-height: 35px;
  width: 5%;
  grid-column-start: 3;
  grid-column-end: 4;
  color: white;
  background-color: #36c459;
`;

const StudentDashboard = (props: any) => {
  const [code, setCode] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [myClass, setMyClass] = useState(null);

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
        window.alert(
          'Something went wrong \nPlease refresh the page and try again!'
        );
      });
  }, []);

  useEffect(() => {
    if (code.length != 5) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [code]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.length > 5) {
      return;
    } else {
      setCode(value);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // api call
  };

  const modalBody = () => {
    return (
      <div>
        <p className="bold" style={{ fontSize: '1.15em' }}>
          Class 1
        </p>
        <p className="meta-txt">Created by: Ashish Dev</p>
        <p>Organization: University of Louisiana Monroe</p>
      </div>
    );
  };

  const ModalActions = () => {
    return (
      <div>
        <button
          className="yellow-button"
          style={{ minWidth: '10%', marginRight: '1%' }}
        >
          Yes
        </button>
        <button
          className="blue-button"
          style={{ minWidth: '10%', marginRight: '1%' }}
        >
          No
        </button>
      </div>
    );
  };

  return (
    <>
      {!myClass ? (
        <div
          className="generic-card"
          style={{ margin: 'auto', width: '65vw', marginTop: '15%' }}
        >
          <div className="general-heading">Join A Class</div>
          <div className="ta-center">
            Enter the 5 digit code provided by your instructor to join a class
          </div>
          <div className="ta-center" style={{ margin: '1% 0' }}>
            <input
              className="ta-center"
              type="text"
              style={{ width: '60%' }}
              onChange={handleChange}
              value={code}
            />
          </div>
          <button className="yellow-button center" disabled={disabled}>
            Submit
          </button>
        </div>
      ) : null}

      {showConfirmation ? (
        <CustomModal
          header={'Is this your class?'}
          body={modalBody}
          actions={ModalActions}
          close={() => setShowConfirmation(false)}
        />
      ) : null}
    </>
  );
};

export default StudentDashboard;
