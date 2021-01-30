import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SignupBg from '../../assets/backgrounds/bg-signup.png';
import OrgLookup from './OrgLookup';

/**
 * A Signup form asking user for account details
 * @param SignupAPI Function for API call that performs signup user action
 */
const SignupForm = ({ SignupAPI }: { SignupAPI: (values: any) => void }) => {
  const [basicInfo, setBasicInfo] = useState({
    fname: '',
    lname: '',
    email: '',
  });

  const [password, setPassword] = useState('');
  const [cPassword, setcPassword] = useState('');

  // Which fields have valid values
  const [acceptable, setAcceptable] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
    cPassword: false,
  });

  const [orgListState, setOrgListState] = useState(false); // Show <OrgLookup />?
  const [organization, setOrganization] = useState(''); // User's organization

  const emailRef: React.RefObject<HTMLInputElement> = React.createRef();
  const cPasswordRef: React.RefObject<HTMLInputElement> = React.createRef();

  /**
   * Updates "basicInfo" state based on new data
   * @param event Onchange event of input fields
   */
  const infoHandler = (event: React.FormEvent<HTMLInputElement>) => {
    let { name } = event.currentTarget;
    setBasicInfo({ ...basicInfo, [name]: event.currentTarget.value });
  };

  /**
   * Propts the display of <OrgLookup />
   * @param event Form submit event
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOrgListState(true);
  };

  /**
   * Calls the SignupAPI with form data
   */
  const signUpUser = () => {
    SignupAPI({
      password,
      organization,
      email: basicInfo.email,
      lastName: basicInfo.lname,
      firstName: basicInfo.fname,
    });
  };

  /**
   * Regex Function to check the validity of email provided
   * @param email email provided by user
   */
  function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  /**
   * Function to check email validity and show error in email field if needed
   * @param event event created by the email field
   */
  const emailChecker = (event: React.FormEvent<HTMLInputElement>) => {
    let email = event.currentTarget.value;

    // Empty field means no error
    let error = email.length !== 0 && !validateEmail(email) ? true : false;

    if (event.type !== 'change' || !error) {
      setError(emailRef, error);
    }

    updateAcceptableValues(!error, 'email', basicInfo.email);
  };

  /**
   * Function to show a red underline in an input field with invalid data
   * @param ref Reference of the input field
   * @param showError whether to show error or not
   */
  const setError = (
    ref: React.RefObject<HTMLInputElement>,
    showError: boolean
  ) => {
    let color = showError ? 'red' : '#9e9e9e';

    ref.current.style.borderBottomColor = color;
  };

  useEffect(() => {
    setcPassword(''); // Change in pasword clears the cPassword field
  }, [password]);

  useEffect(() => {
    passwordChecker();
  }, [cPassword]);

  /**
   * Compares "confirm password" field to the password field
   */
  const passwordChecker = () => {
    let len = cPassword.length;

    let error =
      len > password.length ||
      password.substring(0, len) !== cPassword.substring(0, len)
        ? true
        : false;

    setError(cPasswordRef, error); //Show error in the field
    if (!error && password === cPassword) {
      updateAcceptableValues(true, 'cPassword', cPassword);
    } else {
      updateAcceptableValues(false, 'cPassword', cPassword);
    }
  };

  /**
   * Updates "acceptable" state
   * @param isAcceptable is field acceptable?
   * @param name Name of the field
   * @param value Value of the field
   */
  const updateAcceptableValues = (
    isAcceptable: boolean,
    name: string,
    value: string
  ) => {
    if (isAcceptable && value.length > 0) {
      setAcceptable({
        ...acceptable,
        [name]: true,
      });
    } else setAcceptable({ ...acceptable, [name]: false });
  };

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div className="login-form-container">
        <img src={SignupBg} style={{ height: '100%' }} />

        {orgListState ? (
          <OrgLookup
            signUpUser={signUpUser}
            setSelectedOrganization={setOrganization}
          />
        ) : (
          <form className="auth-form signup-form " onSubmit={handleSubmit}>
            <input
              className="login-input "
              placeholder={'First Name'}
              value={basicInfo.fname}
              style={{ marginRight: '1em' }}
              onChange={infoHandler}
              onBlur={() =>
                updateAcceptableValues(true, 'fname', basicInfo.fname)
              }
              name="fname"
            />
            {/* sets the uers password to the input value */}
            <input
              className="login-input"
              placeholder={'Last Name'}
              value={basicInfo.lname}
              onChange={infoHandler}
              name="lname"
              onBlur={() =>
                updateAcceptableValues(true, 'lname', basicInfo.lname)
              }
            />
            <input
              className="login-input"
              placeholder={'Email'}
              ref={emailRef}
              value={basicInfo.email}
              name="email"
              style={{ gridColumn: '1/span 2' }}
              onChange={(e) => {
                infoHandler(e);
                emailChecker(e);
              }}
              onBlur={emailChecker}
            />
            <input
              className="login-input "
              placeholder={'Password'}
              type="password"
              style={{ marginRight: '1em' }}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => updateAcceptableValues(true, 'password', password)}
            />
            <input
              className="login-input "
              placeholder={'Confirm Password'}
              type="password"
              style={{ marginRight: '1em' }}
              name="confirm_password"
              ref={cPasswordRef}
              value={cPassword}
              onChange={(e) => setcPassword(e.target.value)}
            />

            <div
              style={{
                gridColumn: '1/span 2',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginTop: '1em',
              }}
            >
              <button
                className="yellow-button"
                disabled={
                  Object.values(acceptable).includes(false) ||
                  Object.values(acceptable).includes(null)
                    ? true
                    : false
                }
                type="submit"
                style={{
                  fontSize: '1.25em',
                  padding: '.25em 1em',
                  alignSelf: 'center',
                }}
              >
                NEXT
              </button>
              <div
                style={{
                  textAlign: 'right',
                  paddingTop: '4%',
                  color: '#005191',
                }}
              >
                <Link to="/">Back to Sign In</Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
