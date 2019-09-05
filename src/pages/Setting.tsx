import React from 'react';
import {Wrapper, Grid} from '../style/styled';
import {SettingItem , InfoModal} from '../components';
import settingSvg from '../assets/settings.svg';
const Setting = ({logout, user, getUserInfo}: {logout: any, user: any, getUserInfo: any})=>{
  const fields = [{name: "First Name" , value : user.firstName, field: "firstName"},
                  {name: "Last Name", value: user.lastName, field: "lastName"},
                  {name: "Username", value: user.username, field: "username"},
                  {name: "Phone", value:"",field: "phone"},
                  {name:"Email", value: user.email, field: "email"}
                ];
    const [modal , setModal] = React.useState(true);
    return (
      <Wrapper className="full-height">
       <div className="container" >
       <Grid cols="1">
       {modal && <InfoModal img={settingSvg} close={()=>{setModal(false)}} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"} />}
          <button className="btn justify-end" onClick={()=>{logout()}}>Logout</button>
      </Grid>
      {fields.map((data,i)=><SettingItem getUserInfo={getUserInfo} {...data} key={i} />)}
      <div className="center bold txt-sm">Terms, Data Policy and Cookies Policy.</div>
        </div>
      </Wrapper>
    );
  }
export default Setting;
