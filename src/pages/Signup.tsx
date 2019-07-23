import React ,{ useState, useRef } from 'react';
import styled from 'styled-components';
import './Startpage.css';
import api from '../api';


const Wrapper = styled.div`
  background-color: #dde1ea;
  display: grid;
  height: 100vh;
  place-items: center;
  `;

  const Header = styled.div`
  font-size: 250%;
  font-weight: bolder:
  text-align: center;
  padding-bottom: 10%;
  padding-left: 30%;
  text-decoration: underline;`;

const Signup = ({login, onChange}:{login: any, onChange: any})=>{
  const firstName = React.createRef<HTMLInputElement>();
  const lastName = React.createRef<HTMLInputElement>();
  const email = React.createRef<HTMLInputElement>();
  const userName = React.createRef<HTMLInputElement>();
  const password = React.createRef<HTMLInputElement>();
            return  (<Wrapper className="wrapper-item-center">
                <div className="row card">
                  <div className="row card-content">
                    <p className="center-align">
                      <Header>SIGN UP</Header>
                    </p>
                    <div className="row">
                      <div className="col S4">
                        <input type="text" ref={firstName} placeholder="First Name"
                        />
                      </div>
                      <div className="col s6"><input type="text" ref={lastName} placeholder="Last Name"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" ref={userName} placeholder="Username"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" ref={email} placeholder="Email Address"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text"  placeholder="Phone Number (Optional)"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="password" ref={password} placeholder="Password"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="password" placeholder="Confirm Password"/></div>
                    </div>
                    <p className="center-align">
                      <button className="btn btn-small waves-effect waves-light" onClick={
                        ()=>{

                          const obj =  { firstName:firstName.current.value,
                                          lastName: lastName.current.value,
                                          password: password.current.value,
                                          email: email.current.value,
                                          userName: userName.current.value}
                          console.log(obj);
                        }
                        }
                        >Create Account</button>
                    </p>
                  </div>
                </div>
              </Wrapper>);}
export default Signup;
