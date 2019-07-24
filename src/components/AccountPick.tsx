import React, {Component, useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AccountInfo from './AccountInfo'
import changeStatus from '../pages/Signup';



const Wrapper = styled.div`
background-color: #dde1ea;
display: grid;
height: 100vh;
place-items: center;
`;

const Header = styled.div`
font-size: 200%;
font-weight: bolder:
text-align: center;
padding-bottom: 5%;
align-items: center;`;


const AccountPick = () => {

const [job, setJob] = useState("STUEDNT");
const [flag, setFlag] = useState(false)

return(
  <div>
  {!flag ?
  <Wrapper>
      <div className="row card">
        <div className="row card-content" style={{height: "30em", width: "20em"}}>
          <div className="center-align">
            <Header>Choose your Account Type:</Header>
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
          <button type="submit"
                  className="btn btn-small waves-effect waves-light"
                  style={{margin: "33%"}}
                  onClick={()=> setFlag(!flag)}>
            Submit
          </button>

            <br/>Already have an account? <Link to='/'>Log In</Link>

        </div>
      </div>
    </Wrapper>

    :
    <AccountInfo job={job}/>

    }
  </div>
  )
  };

export default AccountPick;
