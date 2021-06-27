import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { signup_background as LoginBg } from 'assets';
import api from 'api';

/**
 * This component contains the Login form shown in "/login" page
 * @param loginUser A function passed down by App.tsx to set the token in the browser and update the loggedin state of the App
 */

const Login = ({ loginUser }: { loginUser: any }): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState(null);

  /**
   * Function that login the user in the browser. Called by form submit
   * Uses the loginUser function passed down by App.tsx
   */
  const login = () => {
    api
      .login({ email, password })
      .then((res) => {
        // If login is not successful, show error beneath the form inputs
        if (res.success) {
          loginUser(res);
        } else {
          setErrMessage(res.message);
        }
      })
      .catch((err) => alert(err));
  };

  return (
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
          {/* sets the users email to the input value */}
          <input
            className="login-input"
            placeholder={'Username or Email'}
            name="email"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />

          {/* sets the users password to the input value */}
          <input
            className="login-input"
            placeholder={'Password'}
            type="password"
            name="password"
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />

          {/* Div containing the login button and the signup option */}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              marginTop: `${errMessage ? '0' : '1em'}`, // Margin based on existence of error message
            }}
          >
            {/* p Only Displayed when there is an error while logging in */}
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
        {/*
        
        To be Done
        <div className="topic">
          <p>Dollars & $ense Reality Fair</p>
          <p>
            Login to Join United Way NELA's financial education simulation. Have
            fun!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
