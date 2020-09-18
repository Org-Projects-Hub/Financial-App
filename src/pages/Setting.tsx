import React from 'react';
import { Wrapper, Grid, Card } from '../style/styled';
import styled from 'styled-components';
import { SettingItem, InfoModal } from '../components';
import settingSvg from '../assets/settings.svg';
import backgroundImg from '../assets/backgrounds/bg-settings.svg';

const Wrap = styled(Wrapper)`
  text-align: center;
  display: grid;
  grid-template-columns: 70% auto;
  background-position: left center;
  @media only screen and (max-width: 690px) {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.div`
  text-align: center;
  display: grid;
  min-width: 100%;
  background-image: url(${settingSvg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
`;

// const Intro = () => ;
const Setting = ({
  logout,
  user,
  getUserInfo,
}: {
  logout: any;
  user: any;
  getUserInfo: any;
}): JSX.Element => {
  const fields = [
    { name: 'First Name', value: user.firstName, field: 'firstName' },
    { name: 'Last Name', value: user.lastName, field: 'lastName' },
    { name: 'Username', value: user.username, field: 'username' },
    { name: 'Phone', value: '', field: 'phone' },
    { name: 'Email', value: user.email, field: 'email' },
  ];

  const [modal, setModal] = React.useState(true);
  const [info, setInfo] = React.useState(true);
  return (
    <Wrapper className="full-height" backgroundImg={backgroundImg}>
      <div
        className="container settingPage"
        style={{
          backgroundColor: 'rgb(255 255 255 / 0.9)',
          marginTop: '8%',
          padding: '0px 3% 0.5% 3%',
          borderRadius: '10px',
          fontSize: '1.10rem',
          fontWeight: 200,
          color: 'gray',
        }}
      >
        <Grid cols="1">
          <div className="general-heading " style={{ margin: '2%' }}>
            Settings
          </div>
        </Grid>
        {fields.map((data, i) => (
          <SettingItem getUserInfo={getUserInfo} {...data} key={i} />
        ))}

        {/* Terms, Data Policy and Cookies Policy. */}
        <div
          className="yellow-button"
          style={{ margin: '3% auto' }}
          onClick={() => {
            logout();
          }}
        >
          LOG OUT
        </div>
      </div>
    </Wrapper>
  );
};
export default Setting;
