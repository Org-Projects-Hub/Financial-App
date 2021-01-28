import React, { useState } from 'react';
import {
  Wrapper,
  Banner,
  Logo,
  Desc,
  DescText,
  DescTitle,
  Logoutbutton,
  LoginPOS,
} from '../style/home';
import bannerlogo from '../assets/images/unitedWayLogoShadow.png';
import { Login } from '../components';

/*
 * Start page of the entire site, where users will get an overview of what this app is about, and where they will
 * login or creat their accounts
 */
const Startpage = ({
  loginUser,
  loggedin,
  logout,
}: {
  loginUser: any;
  loggedin: boolean;
  logout: any;
}): JSX.Element => {
  return (
    <>
      {
        loggedin ? (
          <div>
            <Wrapper>
              <>
                <Desc>
                  <div className="desc-title">Dollars & $ense Reality Fair</div>
                  <DescText>
                    The United Way of Northeast Louisiana Dollars & $ense
                    Reality Fair is a financial education simulation during
                    which high school students actively learn how to make better
                    financial decisions and gain knowledge of budgeting, saving,
                    and spending.
                  </DescText>
                </Desc>
                <Logoutbutton onClick={() => logout()}> sign out </Logoutbutton>
              </>
            </Wrapper>
          </div>
        ) : null
        // <LoginPOS>
        //   {/* Calling the LoginNumberTwo component with two props
        //           @prop login an APi function for logging a user in
        //           @prop loggedin a boolean to check if a user is logged in or not*/}
        //   <Login login={login} loggedin={loggedin} />
        // </LoginPOS>
        // <Login loginUser={loginUser} />
      }
    </>
  );
};

export default Startpage;
