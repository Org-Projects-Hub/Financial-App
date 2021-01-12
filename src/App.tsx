import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import './style/App.css';
import './style/animations.css';
import { Navbar, Modal, Loader, Login } from './components';
import {
  Setting,
  Simulation,
  Startpage,
  Signup,
  UserStartPage,
  // ClassDashboard,
  AdminPanel,
} from './pages';
import api from './api';
import { getLocalStorage, setLocalStorage } from './utils/utils';
import openSocket from 'socket.io-client';

type AppProps = {
  loggedin: boolean;
  tokenChecked: boolean;
  showNav: boolean;
  user: object;
  modal: boolean;
};

const GetInfoContext = createContext(null);
// const socket = openSocket('http://localhost:8000');

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const [state, setState] = useState({
    loggedin: false,
    tokenChecked: false,
    showNav: true,
    user: {},
    modal: false,
  });

  const getUserInfo = (): boolean => {
    api
      .auth()
      .then((res) => {
        if (res.success) {
          setState({
            ...state,
            loggedin: true,
            user: res.user,
            tokenChecked: true,
          });
          // this.socketSubscribe(res.user.email);
        } else {
          setState({ ...state, loggedin: false, tokenChecked: true });
        }
      })
      .catch((err) => {
        console.log(err);

        setState({ ...state, loggedin: false, tokenChecked: true });
      });

    return true;
  };

  const socketSubscribe = (email: string): void => {
    // socket.emit('join', email);
    // socket.on('msg', (res: any) => {
    //   alert(`New Student Requested to Join a Class!`);
    // });
  };

  const loginUser = (res: any) => {
    setState({ ...state, loggedin: true, user: res.user });
    setLocalStorage('token', res.token);
    redirect('/');
  };

  useEffect(() => {
    if (!state.tokenChecked) getUserInfo();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const logout = () => {
    setLocalStorage('token', '');
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
      if (url == '/signup') redirect('/');
    }
  };

  return (
    <>
      {state.tokenChecked ? (
        <Switch>
          {loginBasedRedirect()}
          <div className={`${state.loggedin ? 'grid-main' : ''} bg-gradient`}>
            <GetInfoContext.Provider value="message">
              <Navbar
                showNav={state.showNav && state.loggedin}
                hide={() => {
                  setState({ ...state, showNav: !state.showNav });
                }}
              />

              <Route
                path="/classes"
                render={() => <UserStartPage user={state.user} />}
              />
              {/* <Route
                      path="/classDashboard"
                      render={() => <ClassDashboard user={user} />}
                    /> */}
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
              <Route path="/admin-pannel" render={() => <AdminPanel />} />
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
            </GetInfoContext.Provider>

            <Route
              path="/signup"
              render={() => <Signup loginUser={loginUser} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login loginUser={loginUser} />}
            />
          </div>
        </Switch>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
