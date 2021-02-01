import React from 'react';
import { Wrapper, Grid, Card } from '../style/styled';
import { SettingItem, InfoModal } from '../components';
import backgroundImg from '../assets/backgrounds/bg-settings.svg';

const Setting = ({
  logout,
  user,
  getUserInfo,
}: {
  logout: any;
  user: any;
  getUserInfo: any;
}): JSX.Element => {
  const updatableFields = [
    { name: 'First Name', value: user.firstName, field: 'firstName' },
    { name: 'Last Name', value: user.lastName, field: 'lastName' },
    { name: 'Phone', value: user.phone, field: 'phone' },
  ];

  const notUpdatableFields = [
    { name: 'Username', value: user.username, field: 'username' },
    { name: 'Email', value: user.email, field: 'email' },
  ];

  const [modal, setModal] = React.useState(true);
  const [info, setInfo] = React.useState(true);

  return (
    <Wrapper className="fill-screen" backgroundImg={backgroundImg}>
      <div
        className="container settingPage generic-card"
        style={{
          marginTop: '8%',
          padding: '0px 3% 0.5% 3%',
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
        {updatableFields.map((data, i) => (
          <SettingItem
            getUserInfo={getUserInfo}
            userEmail={user.email}
            {...data}
            updatable={true}
            key={i}
          />
        ))}
        {notUpdatableFields.map((data, i) => (
          <SettingItem
            getUserInfo={getUserInfo}
            {...data}
            updatable={false}
            key={i}
          />
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
