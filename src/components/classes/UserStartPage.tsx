import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Class, UserModal, Loader, TakeSimModal } from '..';
import { Border, Container, AddClass, Grid } from '../../style/styled';
import { getInitClasses, createNewClass, joinClass } from './classApi';
import noData from '../../assets/no-data.svg';
import { Action, ClassState, reducer } from './reducer';

const JoinClass = styled(AddClass)``;
const TakeSim = styled(AddClass)`
  bottom: 26%;
`;

let initialState: ClassState = {
  class: [],
  contentLoaded: false,
  error: false,
  modal: false,
};

//This page is the container for the first page that a user sees when they log in, it renders the simulations / current class components and all the buttons.
const UserStartPage = (props: any): JSX.Element => {
  const [takeSimModal, setTakeSimModal] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  let { user } = props;

  // determines button color depending on account type
  let buttonBackgroundColor =
    user.account === 'teacher'
      ? '#d6a862'
      : user.account === 'student'
      ? '#649d96'
      : '#ffa51a';
  useEffect(() => {
    getInitClasses(dispatch);
  }, []);
  return (
    <>
      {state.contentLoaded ? (
        <Border>
          <Container>
            {/* if there are classes in the classObjs array, loop over each element, if not display <p> tag */}
            {state.class.length >= 1 ? (
              state.class.map((cla: any, index: number) => (
                // for every element in the classObjs array, display a class component while also passing the index, the classObj, and the current user to props
                <Class classObj={cla} userObj={user} key={index} />
              ))
            ) : (
              <div style={{ textAlign: 'center', fontSize: '200%' }}>
                <div className="centered-img">
                  <img className="img-lg" src={noData} alt="No Data" />
                  <p className="center bold">No classes registered</p>
                </div>
              </div>
            )}
            {/* This is where all the buttons are rendered on the page, in a browser the position is fixed so it doesn't matter
                            where they are, but on mobile the position is changed to relative so they need to be at the bottom so they stack on the page. */}
            <Grid cols="1">
              {
                // if the user is a teacher, display the AddClass Component
                user.account === 'teacher' ? (
                  <div>
                    <AddClass
                      style={{ backgroundColor: buttonBackgroundColor }}
                      onClick={() => dispatch({ type: 'ACTIVATE_MODAL' })}
                    >
                      Add Class
                    </AddClass>
                    <UserModal
                      createNewClass={(data: any) =>
                        createNewClass(dispatch, data)
                      }
                      accountType={user.account}
                      backgroundColor={buttonBackgroundColor}
                      modalTitle="Enter Class Name"
                      inputText="Class Name"
                      buttonText="Create"
                      show={state.modal}
                      onClose={() => dispatch({ type: 'ACTIVATE_MODAL' })}
                    ></UserModal>
                  </div>
                ) : (
                  // if the user is a student, display the JoinClass Component
                  <div>
                    <JoinClass
                      style={{ backgroundColor: buttonBackgroundColor }}
                      onClick={() => dispatch({ type: 'ACTIVATE_MODAL' })}
                    >
                      Join Class
                    </JoinClass>
                    <TakeSim
                      style={{ backgroundColor: buttonBackgroundColor }}
                      onClick={() => setTakeSimModal(true)}
                    >
                      Take Simulation
                    </TakeSim>
                    <UserModal
                      joinClass={(code: string) => joinClass(dispatch, code)}
                      accountType={user.account}
                      backgroundColor={buttonBackgroundColor}
                      modalTitle="Enter Class Code"
                      inputText="Class Code"
                      buttonText="Join"
                      show={state.modal}
                      onClose={() => dispatch({ type: 'ACTIVATE_MODAL' })}
                    ></UserModal>
                    <TakeSimModal
                      backgroundColor={buttonBackgroundColor}
                      show={takeSimModal}
                      onClose={() => setTakeSimModal(false)}
                    ></TakeSimModal>
                  </div>
                )
              }
            </Grid>
          </Container>
        </Border>
      ) : (
        <Loader />
      )}{' '}
    </>
  );
};

export default UserStartPage;
