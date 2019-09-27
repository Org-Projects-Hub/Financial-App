import React from 'react';
import { Wrapper, Grid, Card } from '../style/styled';
import styled from 'styled-components';
import { SettingItem, InfoModal } from '../components';
import settingSvg from '../assets/settings.svg';

const Wrap = styled(Wrapper)`
text-align: center;
display: grid;
grid-template-columns: 70% auto;
background-position:left center;
@media only screen and (max-width : 690px) {
  grid-template-columns: 1fr;
  }`;

const ImgContainer = styled.div`
text-align: center;
display: grid;
min-width: 100%;
background-image : url(${settingSvg});
background-repeat:no-repeat;
background-size: contain;
background-position:left center;`;


// const Intro = () => ;
const Setting = ({ logout, user, getUserInfo }: { logout: any, user: any, getUserInfo: any }):JSX.Element => {
  const fields = [{ name: "First Name", value: user.firstName, field: "firstName" },
  { name: "Last Name", value: user.lastName, field: "lastName" },
  { name: "Username", value: user.username, field: "username" },
  { name: "Phone", value: "", field: "phone" },
  { name: "Email", value: user.email, field: "email" }
  ];
  const [modal, setModal] = React.useState(true);
  const [info, setInfo] = React.useState(true);
  return (
      <Wrapper className="full-height">
        <div className="container" >
          <Grid cols="1">
            <button className="btn justify-end" onClick={() => { logout() }}>Logout</button>
          </Grid>
          {fields.map((data, i) => <SettingItem getUserInfo={getUserInfo} {...data} key={i} />)}
          <div className="center bold txt-sm">Terms, Data Policy and Cookies Policy.</div>
        </div>
      </Wrapper>
  );
}
export default Setting;
