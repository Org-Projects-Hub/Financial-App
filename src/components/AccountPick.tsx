import React, {Component, useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AccountInfo from './AccountInfo'
import changeStatus from '../pages/Signup';
import { Wrapper, Card, Grid } from '../style/styled';
import Admin from '../assets/admin.png';
import User from '../assets/user.png';

const Header = styled.div`
font-size: 200%;
font-weight: bolder:
text-align: center;
align-items: center;`;


const MyCard = styled(Card)`
  &:hover {
      transform: scale(1.1);
      transition: 200ms ease-out;
  }
`;


const AccountPick = ({loggedin}: {loggedin: any}) => {
const [admin, setAdmin] = useState(null);
return(
  <div>
  {admin == null ?
  <Wrapper color="radial-gradient(to bottom, #733DEB, #24F195)" >
        <Header className="center">Choose your Account Type:</Header>
        <Grid cols="2">
          <MyCard className="justify-end" onClick={()=>setAdmin(true)}>
            <img  className="icon-md" src={Admin} alt="user"/>
            <h3 className="center">Amin</h3>
          </MyCard>

          <MyCard className="justify-start"  onClick={()=>setAdmin(false)}>
            <img  style={{paddingBottom: "1em"}} className="icon-md" src={User} alt="user"/>
            <h3 className="center">Users</h3>
          </MyCard>
               </Grid>
            <br/>Already have an account? <Link to='/'>Log In</Link>
    </Wrapper>

    :
    <AccountInfo  loggedin={loggedin}/>

    }
  </div>
  )
  };

export default AccountPick;
