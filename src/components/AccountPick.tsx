import React, {Component, useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Account from './Account'
import changeStatus from '../pages/Signup';
import { Wrapper, Card, Grid, GridRow } from '../style/styled';
import Admin from '../assets/admin.png';
import User from '../assets/user.png';

const MyCard = styled(Card)`
 cursor: pointer;
  &:hover {
      transform: scale(1.1);
      filter: drop-shadow(1px 1px 4px #0093DD);
      transition: 200ms ease-out;
  }`;


const AccountPick = ({loggedin}: {loggedin: any}) => {
const [admin, setAdmin] = useState(null);
const makeAdmin = ()=>{ setAdmin(true) }
const clearAdmin = ()=>{ setAdmin(null) }
return(
  <div>
  {admin == null ?
  <Wrapper color="radial-gradient(to bottom, #733DEB, #24F195)" >
   <GridRow rows="3" style={{maxHeight: "98vh"}}>
        <h3 className="center txt-green">Choose your Account Type:</h3>
        <Grid cols="2">
          <MyCard className="justify-end" onClick={makeAdmin}>
            <img  className="icon-md" src={Admin} alt="user"/>
            <h3 className="center">Amin</h3>
          </MyCard>

          <MyCard className="justify-start"  onClick={()=>setAdmin(false)}>
            <img  style={{paddingBottom: "1em"}} className="icon-md" src={User} alt="user"/>
            <h3 className="center">Users</h3>
          </MyCard>
               </Grid>
            <div className="txt-green bold">Already have an account? <Link to='/'>Log In</Link></div>
        </GridRow>
    </Wrapper>

    :
    <Account  loggedin={loggedin}  clearAdmin={clearAdmin}/>

    }
  </div>
  )
  };

export default AccountPick;
