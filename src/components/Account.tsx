import React, {Component, useState} from 'react';
import styled from 'styled-components';
import { Grid, Wrapper, Card } from '../style/styled';
import SignupItem from './SignupItem';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {nameTest, usernameTest , emailTest, passwordTest, numberTest} from '../utils/utils';
import api from '../api';
import {Modal, Hints} from './index';

        const Header = styled.div`
        font-size: 200%;
        color: #066;
        font-weight: bolder:
        text-align: center;
        padding-bottom: 5%;
        align-items: center;
        background: -webkit-linear-gradient(-150deg, #4fc3f7, #006666);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        line-height: 0.75;
        color: #a483c5;
        `;
        const Arrow = styled.button`
        border: 0;
        display: inline-block;
        border-radius: 50%;
        padding: .8em;
        font-weight: bolder;
        color: white;
        margin: .5em 0;
        background: #00bfa5`;

        const MyWrapper = styled(Wrapper)`
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1748' height='1748' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23759fff' stroke-width='70.2' stroke-linecap='round' %3E%3Cline stroke='%239de6dd' x1='639' y1='727' x2='590' y2='776'/%3E%3Cpolyline stroke='%2385aee9' points='586 717 888 415 981 512 279 1215 120 1056 607 569'/%3E%3Cline stroke='%2361b1ff' x1='935' y1='494' x2='776' y2='653'/%3E%3Cline stroke='%234fa7e9' x1='425' y1='624' x2='488' y2='560'/%3E%3Cpolyline stroke='%2352baf5' points='745 685 198 1232 -24 1010 226 759'/%3E%3Cline stroke='%2363bee8' x1='383' y1='666' x2='393' y2='655'/%3E%3Cline stroke='%234ab7e0' x1='416' y1='569' x2='438' y2='547'/%3E%3Cline stroke='%2344c7f2' x1='194' y1='664' x2='237' y2='622'/%3E%3Cpolyline stroke='%236dd9f8' points='374 547 35 886 194 1045 618 622'/%3E%3Cline stroke='%2368d8f4' x1='681' y1='685' x2='671' y2='696'/%3E%3Cline stroke='%236cdbf4' x1='724' y1='516' x2='649' y2='590'/%3E%3Cline stroke='%2369cddf' x1='334' y1='776' x2='501' y2='611'/%3E%3Cpolyline stroke='%238beaf6' points='556 746 226 1077 353 1204 1052 505 956 410 713 653'/%3E%3Cline stroke='%2368a8ad' x1='258' y1='727' x2='385' y2='600'/%3E%3Cline stroke='%2392eeef' x1='671' y1='505' x2='639' y2='537'/%3E%3Cpolyline stroke='%23a7e0dc' points='162 696-24 883 71 978 353 696'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: bottom right;
        `;
const Account =({loggedin , clearAdmin, isStudent}: {loggedin: any, clearAdmin : any, isStudent: any}) => {
       const [state, setState] = useState(0);
       const [clicked, setClicked] = useState(false)
       const [modal, setModal] = useState(false);
       const [valid, setValid] = useState(false);
       const [firstName, setFirstName] = useState("");
       const [lastName, setLastName] = useState("");
       const [username, setUsername] = useState("");
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const [phoneNumber, setPhoneNumber] = useState("");

       const SignupAPI = ()=>{  const obj = {firstName, lastName, username,email, password, isStudent};
                                console.log(obj);
                                api.signup(obj)
                                .then(res => {
                                    if (res.success) {
                                     loggedin(res.token, res.user);
                                    } else {
                                      alert(res.message);
                                    }
                                  })
                                  .catch(err => alert(err));
                            };

        const el = [{header: "Enter your First Name", type: "text", placeholder : "First Name",  handler:nameTest, set: setFirstName, value: firstName},
                    {header: "Enter your Last Name", type: "text", placeholder : "Last Name", handler: nameTest, set: setLastName, value: lastName},
                    {header: "Enter your Email", type: "text", placeholder : "Email",  className:"full-row", handler: emailTest, set:setEmail, value: email},
                    {header: "Enter your Password", type: "password", placeholder : "Password",  className:"full-row", handler: usernameTest, set: setPassword, value: password}
                    ];

          const nextInput = () =>{
                                if(el[state].handler(el[state].value)){
                                  if(state < (el.length - 1)){
                                    setValid(el[state + 1].handler(el[state + 1].value));
                                    setState(state + 1);
                                    setClicked(true);
                                    setTimeout(()=>setClicked(false), 700);
                                    }
                                  else{
                                    SignupAPI()
                                    }
                                  }
                                  else{
                                    setModal(true);
                                 }
                            }

        const prevInput = () => {
                            if(state > 0){
                                setValid(el[state - 1].handler(el[state - 1].value));
                                setState(state - 1);
                                setClicked(true);
                                setTimeout(()=>setClicked(false), 700);
                              }
                              else{
                                  clearAdmin();
                              }
                        }
            return(
            <MyWrapper className="center">
              {modal && <Modal text={`Invalid ${el[state].placeholder}! Enter it Again.`} close={()=>{setModal(false)}}/ >}
              <Card className={clicked? "flip": ""}   style={{minWidth: "320px", maxWidth: "98vw"}} >
                      <Arrow  onClick={prevInput}>
                        <i className="fas fa-arrow-left"></i>
                      </Arrow>

                      <Header> {el[state].header} </Header>

                       <SignupItem {...el[state]} valid={valid} setValid={setValid} nextInput={nextInput}/>

                       <div className="center bold txt-green">{`${state + 1} of ${el.length}`}</div>
                    {state < (el.length - 1) ? <Arrow className="right" onClick={nextInput}>
                        <i className="fas fa-arrow-right"></i>
                    </Arrow> :   <button className="btn btn-small waves-effect waves-light"  onClick={nextInput}>Create Account</button>}
                </Card>
                <Hints msg={["Welcome to FinApp!","Please enter all your information correctly to access the app."]}/>
              </MyWrapper>
            )
};

export default Account;
