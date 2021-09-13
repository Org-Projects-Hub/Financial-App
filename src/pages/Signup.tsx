import React, { useState } from 'react';
import SignupForm from '../components/signup/SignupForm';
import { Wrapper, Card, Grid, GridRow } from 'style/styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { adminIcon, userIcon } from 'assets';
import api from 'api';

const MyCard = styled(Card)`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(1px 1px 4px #0093dd);
    transition: 200ms ease-out;
  }
`;

/**
 * AccountPick componenet is so the user can choose what kind of account they have (Teacher or Student),
 * @param setAdmin Hook to update account type in Signup component
 */
const AccountPick = ({ setAdmin }: { setAdmin: any }): JSX.Element => {
  //function for setting admin to true
  const makeAdmin = () => {
    setAdmin(true);
  };

  return (
    <div style={{ height: '100vh' }}>
      <GridRow rows="3" style={{ maxHeight: '98vh' }} className="general-font">
        <h3 className="center white-text bold-font uppercase">
          Choose your Account Type:
        </h3>
        <Grid cols="2">
          {/**Card for admin account type
                onClick sets admin to true (User is an teacher) */}
          <MyCard className="justify-end" onClick={makeAdmin}>
            <img className="icon-md" src={adminIcon} alt="user" />
            <h3 className="center">Teacher</h3>
          </MyCard>

          {/**Card for User account type
                onClick sets admin to false (User is an student) */}
          <MyCard className="justify-start" onClick={() => setAdmin(false)}>
            <img
              style={{ paddingBottom: '1em' }}
              className="icon-md"
              src={userIcon}
              alt="user"
            />
            <h3 className="center">Student</h3>
          </MyCard>
        </Grid>

        {/* Redirection to login  page*/}
        <div
          className="white-text"
          style={{ marginTop: '2em', alignSelf: 'baseline' }}
        >
          Already have an account?{' '}
          <Link to="/" style={{ textDecoration: 'underline' }}>
            Log In
          </Link>
        </div>
      </GridRow>
    </div>
  );
};

/**
 * Component rendered on "/signup". Provides signup option to user and upon success, logs then in
 * @param loginUser A function passed down by App.tsx to set the token in the browser and update the loggedin state of the App
 */

const Signup = ({ loginUser }: { loginUser: any }) => {
  // Hook for accoun type
  const [admin, setAdmin] = useState(null);

  /**
   * Function called by SignupForm.tsx to signup user
   * @param values contains the values entered by user in SignupForm.tsx
   */
  const SignupAPI = (values: any) => {
    values['isStudent'] = admin !== true;

    api
      .signup(values)
      .then((res) => {
        loginUser(res);
      })
      .catch((err) => {
        alert(err.message);
        setAdmin(null);
      });
  };

  return (
    <>
      {/* User needs to select the account type before reaching the signup form */}
      {admin == null ? (
        <AccountPick setAdmin={setAdmin} />
      ) : (
        <SignupForm SignupAPI={SignupAPI} />
      )}
    </>
  );
};

export default Signup;
