import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import LoginLogo from '../assets/images/UnitedWayLogo.png';
import LoginBg from '../assets/backgrounds/bg-signup.png';
import api from '../api';

const Img = styled.img`
  borderradius: '1em';
  overflow: 'hidden';
  width: auto;
  width: 75%;
`;

const Login = ({
  loginUser,
  loggedin,
}: {
  loginUser: any;
  loggedin: any;
}): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState(null);

  const login = () => {
    api
      .login({ email, password })
      .then((res) => {
        if (res.success) {
          loginUser(res);
        } else {
          setErrMessage(res.message);
          return res.message;
        }
      })
      .catch((err) => alert(err));
  };

  return (
    /* for for entire login card 
        @function onSubmit preventDefault prevents blank data,
             login is the api function that sets the users email and password
        */
    <div style={{ height: '100vh', display: 'flex' }}>
      <div className="login-form-container">
        <img src={LoginBg} style={{ height: '100%' }} />

        <form
          className="auth-form"
          onSubmit={(e: any) => {
            e.preventDefault();
            login();
          }}
        >
          {/* <Img src={LoginLogo} alt="Origin Logo" /> */}

          {/* sets the uers email to the input value */}
          <input
            className="login-input"
            placeholder={'Username or Email'}
            name="email"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />

          {/* sets the uers password to the input value */}
          <input
            className="login-input"
            placeholder={'Password'}
            type="password"
            name="password"
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              marginTop: `${errMessage ? '0' : '1em'}`,
            }}
          >
            <p
              hidden={errMessage ? false : true}
              style={{
                gridColumn: '1/2 span',
                color: 'red',
                fontSize: '0.75em',
              }}
            >
              {errMessage}
            </p>
            <button
              type="submit"
              className="yellow-button"
              style={{
                fontSize: '1.25em',
                padding: '.25em 1em',
                alignSelf: 'center',
              }}
            >
              LOGIN
            </button>
            <div style={{ textAlign: 'right' }}>
              <p>Forgot Password?</p>

              {/* redirect to Sign Up page when clicked*/}
              <NavLink to="/signup">Sign Up</NavLink>
            </div>
          </div>
        </form>
        <div className="topic">
          <p>Dollars & $ense Reality Fair</p>
          <p>
            Login to Join United Way NELA's financial education simulation. Have
            fun!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
