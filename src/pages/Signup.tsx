import React, {Component, useState} from 'react';
import styled from 'styled-components';
import api from '../api';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {nameTest} from '../utils/utils';
type Props = {
  job: string,
  fName: string,
  lName: string,
  userName: string,
  email: string,
  age: number,
  school: string,
  pass: string,
  cPass: string,
  correct: boolean,
  valid: boolean,
  jobPicked: boolean
}




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
padding-left: 30%;`;

const Signup= ()=>{


        const [valid, setValid] = useState(false);
        const firstName = React.createRef<HTMLInputElement>();
        const lastName = React.createRef<HTMLInputElement>();
        const email = React.createRef<HTMLInputElement>();
        const userName = React.createRef<HTMLInputElement>();
        const password = React.createRef<HTMLInputElement>();
        const pnumber = React.createRef<HTMLInputElement>();

        var jobSelected: boolean= false;
        var job: string ="";



        function jobSelect(x: string){

          if(x === "s")
          {
            job = "student";
          }
          else if(x === "t")
          {
            job = "teacher";
          }
          else if (x === "o")
          {
            job = "other";
          }


        }

        function handleSubmit(){
         jobSelected = true;
        }
                
                  return(
                <div>
                
                {jobSelected ?

                <Wrapper>
                <div className="row card">
                  <div className="row card-content">
                    <div className="center-align">
                      <Header>SIGN UP</Header>
                    </div>
                    <div className="row">
                      <div className="col S4">


                        <input type="text" ref={firstName} placeholder="First Name"
                               onChange={(e:any)=>{ setValid(nameTest(e.target.value)) }}
                        />
                        {!valid? "Name not Valid" : "Name is Valid"}
                      </div>
                      <div className="col s6"><input type="text" ref={lastName}  placeholder="Last Name"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" ref={userName} placeholder="Username"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" ref={email} placeholder="Email Address"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text"  ref={pnumber} placeholder="Phone Number (Optional)"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="password" ref={password} placeholder="Password"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="password" placeholder="Confirm Password"/></div>
                    </div>
                    <div className="center-align">
                        <button className="btn btn-small waves-effect waves-light" type='submit'>Create Account</button>
                        {/*()=>{

                          {/*const obj =  { firstName:firstName.current.value,
                                          lastName: lastName.current.value,
                                          password: password.current.value,
                                          email: email.current.value,
                                          userName: userName.current.value}
                          api.signup(obj);

                          console.log(userName);
                        }

                        >Create Account</button>*/}

                        <br/> <br/>Already have an account? <Link to='/'>Log In</Link>

                    </div>
                  </div>
                </div>
                </Wrapper>
                
                :
                  
                <Wrapper>
                  <div className="row card">
                    <div className="row card-content">
                      <div className="center-align">
                        <Header>Are you a:</Header>
                      </div>
                      <div className="row">
                      <ul>
                        <li>
                        <label>Student</label>
                          <input type="radio" name="job" value="student" onClick={() => jobSelect("s")}/>
                        </li>
                
                        <li>
                        <label>Teacher</label>
                          <input type="radio" name="job" value="teacher" onClick={() => jobSelect("t")}/>
                        </li>
                        <li>
                        <label>Other</label>
                          <input type="radio" name="job" value="other" onClick={() => jobSelect("o")}/>
                        </li>
                      </ul>
                      </div>
                      <button type="submit" onClick={() => handleSubmit()}/>
                    </div>
                  </div>
                </Wrapper>
                
                }
                
                </div>
                
      
                )
                
        }


export default Signup;
