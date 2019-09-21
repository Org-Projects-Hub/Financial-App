import React, {useState} from 'react';
import Account from '../components/signup/Account';
import { Wrapper, Card, Grid, GridRow } from '../style/styled';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Admin from '../assets/admin.png';
import User from '../assets/user.png';

const MyCard = styled(Card)`
 cursor: pointer;
  &:hover {
      transform: scale(1.1);
      filter: drop-shadow(1px 1px 4px #0093DD);
      transition: 200ms ease-out;
  }`;

  const Header = styled.h3`
  background: -webkit-linear-gradient(-150deg, #4fc3f7, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  line-height: 0.75;
  text-transform: uppercase;
  color: #a483c5;
  `;

const MyWrapper = styled(Wrapper)`
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1748' height='1748' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23759fff' stroke-width='70.2' stroke-linecap='round' %3E%3Cline stroke='%239de6dd' x1='639' y1='727' x2='590' y2='776'/%3E%3Cpolyline stroke='%2385aee9' points='586 717 888 415 981 512 279 1215 120 1056 607 569'/%3E%3Cline stroke='%2361b1ff' x1='935' y1='494' x2='776' y2='653'/%3E%3Cline stroke='%234fa7e9' x1='425' y1='624' x2='488' y2='560'/%3E%3Cpolyline stroke='%2352baf5' points='745 685 198 1232 -24 1010 226 759'/%3E%3Cline stroke='%2363bee8' x1='383' y1='666' x2='393' y2='655'/%3E%3Cline stroke='%234ab7e0' x1='416' y1='569' x2='438' y2='547'/%3E%3Cline stroke='%2344c7f2' x1='194' y1='664' x2='237' y2='622'/%3E%3Cpolyline stroke='%236dd9f8' points='374 547 35 886 194 1045 618 622'/%3E%3Cline stroke='%2368d8f4' x1='681' y1='685' x2='671' y2='696'/%3E%3Cline stroke='%236cdbf4' x1='724' y1='516' x2='649' y2='590'/%3E%3Cline stroke='%2369cddf' x1='334' y1='776' x2='501' y2='611'/%3E%3Cpolyline stroke='%238beaf6' points='556 746 226 1077 353 1204 1052 505 956 410 713 653'/%3E%3Cline stroke='%2368a8ad' x1='258' y1='727' x2='385' y2='600'/%3E%3Cline stroke='%2392eeef' x1='671' y1='505' x2='639' y2='537'/%3E%3Cpolyline stroke='%23a7e0dc' points='162 696-24 883 71 978 353 696'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-repeat: no-repeat;
background-position: bottom right;
`;

// AccountPick componenet is so the user can choose what kind of account they have (Administrator or User),

const AccountPick = ({loggedin}: {loggedin: any}) => {

// Hook for storing the admin state
const [admin, setAdmin] = useState(null);
//function for setting admin to true
const makeAdmin = ()=>{ setAdmin(true) }
//function to reset admin
const clearAdmin = ()=>{ setAdmin(null) }

return(
  <div>
  {/*If the user has not made a choice on user or admin */}
  {admin == null ?

  <MyWrapper color="radial-gradient(to bottom, #733DEB, #24F195)" >
   <GridRow rows="3" style={{maxHeight: "98vh"}}>
        <Header className="center txt-green">Choose your Account Type:</Header>
        <Grid cols="2">
          {/**Card for admin account type
                onClick sets admin to true (User is an admin) */}
          <MyCard className="justify-end" onClick={makeAdmin}>
            <img  className="icon-md" src={Admin} alt="user"/>
            <h3 className="center">Admin</h3>
          </MyCard>

          {/**Card for User account type
                onClick sets admin to false (User is an User) */}
          <MyCard className="justify-start"  onClick={()=>setAdmin(false)}>
            <img  style={{paddingBottom: "1em"}} className="icon-md" src={User} alt="user"/>
            <h3 className="center">Users</h3>
          </MyCard>

               </Grid>
            <div className="txt-green bold">Already have an account? <Link to='/'>Log In</Link></div>
        </GridRow>
    </MyWrapper>

    :
    <Account  loggedin={loggedin}  clearAdmin={clearAdmin} isStudent={(admin !== true)}/>

    }
  </div>
  )
  };

const Signup = ({loggedin} : {loggedin : any} ) => {

const [status, setStatus] = useState(false);
const [job, setJob] = useState("STUDENT");

return(
  <AccountPick loggedin= {loggedin}/>
  );
}


export default Signup;
