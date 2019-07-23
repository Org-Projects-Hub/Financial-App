import React, {Component, useState} from 'react';
import styled from 'styled-components';
import api from '../api';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {nameTest, usernameTest, emailTest, passwordTest} from '../utils/utils';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControlLabel';




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
align-items: center;`;
  


const Signup= ()=>{


        const [valid, setValid] = useState(false);
        const firstName = String;
        const lastName = React.createRef<HTMLInputElement>();
        const email = React.createRef<HTMLInputElement>();
        const userName = React.createRef<HTMLInputElement>();
        const password = React.createRef<HTMLInputElement>();
        const pnumber = React.createRef<HTMLInputElement>();
        
        const [jobSelected, setJobSelected] = useState(false);
        const [job, setJob] = useState("STUDENT"); 

        const [selection, setSelection] = useState(false);


      
        
        return(
                <div>
                
                {jobSelected ?

                <Wrapper>
                <div className="row card">
                  <div className="row card-content">
                    <div className="center-align">
                      <Header> {job} SIGN UP</Header>
                    </div>
                    <div className="row">
                      <div className="col S4">


                        <input type="text" ref={firstName} placeholder="First Name"
                               onChange={(e:any)=>{ setValid(nameTest(e.target.value)) }}
                        />
                        {!valid ? "Name not Valid" : "Name is Valid"}
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
                    <div className="row card-content" style={{height: "30em", width: "20em"}}>
                      <div className="center-align">
                        <Header>Are you a:</Header>
                      </div>
                        <RadioGroup onChange={(e: any) =>(setJob(e.target.value))}>
                          <FormControlLabel
                            value="STUDENT"
                            control={<Radio color="primary" />}
                            label="Student"
                            checked={job === "STUDENT"}
                          />
                          <FormControlLabel
                            value="TEACHER"
                            control={<Radio color="primary" />}
                            label="Teacher"
                          />
                          <FormControlLabel
                            value="OTHER"
                            control={<Radio color="primary" />}
                            label="Other"
                          />
                        </RadioGroup>
                      <button type="submit" className="btn btn-small waves-effect waves-light" style={{margin: "33%"}}onClick={() => setJobSelected(true)}> 
                        Submit
                      </button>
                      
                        <br/>Already have an account? <Link to='/'>Log In</Link>

                    </div>
                  </div>
                </Wrapper>
                
                }
                
                </div>
                
      
                )
                
        }


export default Signup;