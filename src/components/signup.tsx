import React, {Component} from 'react';
import styled from 'styled-components';
import api from '../api';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";



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
  correct: boolean
}


export default class Signup extends React.Component <{}, Props>{

        constructor(props: Props){
                super(props);

                this.usernameCheck = this.usernameCheck.bind(this);

                this.state = {
                        job: '',
                        fName: '',
                        lName:'',
                        userName: '', // 8 < u < 30 
                        email:'', // email regect
                        age: 15, // 0 < a  < 120
                        school:'', 
                        pass:'',
                        correct: false,
                        cPass:''
                }
        }

        passMatch(e:any){


        }

        usernameCheck(e: React.ChangeEvent<HTMLInputElement>){
    
          this.setState({
            userName: e.target.value,
            correct: true
          })


          console.log("Username" + this.state.userName); 


        }

        render(){
                
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

        const firstName = React.createRef<HTMLInputElement>();
        const lastName = React.createRef<HTMLInputElement>();
        const email = React.createRef<HTMLInputElement>();
        const userName = React.createRef<HTMLInputElement>();
        const password = React.createRef<HTMLInputElement>();

                return(
                <Wrapper>
                <div className="row card">
                  <div className="row card-content">
                    <div className="center-align">
                      <Header>SIGN UP</Header>
                    </div>
                    <div className="row">
                      <div className="col S4">
                        <input type="text" ref={firstName} placeholder="First Name"
                        />
                      </div>
                      <div className="col s6"><input type="text" ref={lastName} placeholder="Last Name"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" value='username' onChange={this.usernameCheck} placeholder="Username"/></div>
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
                    <div className="center-align">
                      
                      {this.state.correct ?

                      <button className="btn btn-small waves-effect waves-light" onClick={
                        ()=>{

                          {/*const obj =  { firstName:firstName.current.value,
                                          lastName: lastName.current.value,
                                          password: password.current.value,
                                          email: email.current.value,
                                          userName: userName.current.value}
                          api.signup(obj); */}

                          console.log(userName);
                        }
                        }
                        >Create Account</button>

                        :

                        <></>

                      }

                      Already have an account?<Link to='../pages/startpage'> Log In</Link>
                    </div>
                  </div>
                </div>
                </Wrapper>
                
                )
        }

}