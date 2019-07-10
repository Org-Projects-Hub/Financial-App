import React from 'react';
import styled from 'styled-components';
import './Startpage.css';
import Logo from '../assets/images/logo_on.png';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #dde1ea;
  display: grid;
  height: 100vh;
  grid-template-columns: 29% 42% 29%;
  place-items: center;
  `;

const Startpage = ({login, onChange, createAccount}:{login: any, onChange: any,createAccount: any})=>
{
return(
                  <Wrapper>
                    <div className="wrapper-item-left"></div>
                    <div className="wrapper-item-center">
                      <div className="container center" >
                          <div className="row card full-on-mobile">
                          <div className="card-image " style={{padding:"2em"}}>
                              <img src={Logo} alt="LSBDC Logo"/>
                        </div>
                          <div className="">
                            <div className="row card-content">
                              <div className="input-field col s12">
                                <input placeholder={"Username or Email"} onChange={onChange}/>
                                <input placeholder={"Password"} type="password" onChange={onChange}/>
                              </div>
                              <div className=" col s12 center">
                                <p><a href="*">Forget Password ?</a></p>
                              </div>
                              <div className=" col s12 center">
                                <p><a href="/Signup" onClick={createAccount}>Sign Up</a></p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col m12">
                                <p className="center-align">
                                  <button className="btn btn-small waves-effect waves-light" onClick={login}>Login</button>
                                </p>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                    </div>
                    <div className="wrapper-item-right"></div>

                    </Wrapper>);}
export default Startpage;
