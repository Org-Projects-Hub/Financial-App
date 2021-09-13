import React, { Suspense, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import './style/App.css';
import './style/animations.css';
import { Navbar, Loader } from './components';
import {
  Setting,
  Simulation,
  Startpage,
  Signup,
  ClassesPage,
  Login,
} from './pages';
import api from './api';
import { logoutTimer, setLocalStorage } from './utils/utils';

const initUser: userType = {
  phone: '',
  organization: '',
  email: '',
  lastName: '',
  firstName: '',
  username: '',
  type: '',
};

type userType = {
  phone: String;
  organization: String;
  email: String;
  lastName: String;
  firstName: String;
  username: String;
  type: String;
};

type stateType = {
  loggedin: boolean;
  tokenChecked: boolean;
  showNav: boolean;
  user: userType;
  modal: boolean;
};

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const [state, setState] = useState<stateType>({
    loggedin: false,
    tokenChecked: false,
    showNav: true,
    user: initUser,
    modal: false,
  });

  const getUserInfo = (): boolean => {
    api
      .auth()
      .then((res) => {
        setState({
          ...state,
          loggedin: true,
          user: res.user,
          tokenChecked: true,
        });
        logoutTimer();
      })
      .catch((err) => {
        if (err.status == 404) alert(err.message);
        setState({ ...state, loggedin: false, tokenChecked: true });
      });

    return true;
  };

  const loginUser = (res: any) => {
    setState({ ...state, loggedin: true, user: res.user });
    setLocalStorage('finapp-token', res.token);
    logoutTimer();
    redirect('/');
  };

  useEffect(() => {
    if (!state.tokenChecked) getUserInfo();
  }, []);

  const logout = () => {
    setLocalStorage('finapp-token', '');
    setState({ ...state, loggedin: false });
  };

  const redirect = (url: string) => {
    history.push(url);
  };

  const loginBasedRedirect = () => {
    let url = location.pathname;
    if (!state.loggedin) {
      if (url == '/login' || url == '/signup') return;
      else redirect('/login');
    } else {
      if (url == '/signup' || url == '/login') redirect('/');
    }
  };

  const fallback = () => {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          background:
            'linear-gradient(90deg, rgba(83, 158, 208, 1) 15%, rgba(75, 151, 202, 1) 33%, rgba(0, 81, 145, 1) 100%)',
        }}
      ></div>
    );
  };

  return (
    <>
      {state.tokenChecked ? (
        <div className={`${state.loggedin ? 'grid-main' : ''} bg-gradient`}>
          <Navbar
            showNav={state.showNav && state.loggedin}
            hide={() => {
              setState({ ...state, showNav: !state.showNav });
            }}
          />
          <Suspense fallback={fallback()}>
            <Switch>
              {loginBasedRedirect()}

              <Route
                path="/classes"
                render={() => <ClassesPage userType={state.user.type} />}
              />
              <Route
                path="/Simulation"
                render={() => <Simulation user={state.user} />}
              />
              <Route
                path="/setting"
                render={() => (
                  <Setting
                    logout={logout}
                    getUserInfo={getUserInfo}
                    user={state.user}
                  />
                )}
              />

              <Route
                path="/signup"
                render={() => <Signup loginUser={loginUser} />}
              />
              <Route
                exact
                path="/login"
                render={() => <Login loginUser={loginUser} />}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <Startpage
                    loginUser={loginUser}
                    loggedin={state.loggedin}
                    logout={logout}
                  />
                )}
              />
            </Switch>
          </Suspense>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
