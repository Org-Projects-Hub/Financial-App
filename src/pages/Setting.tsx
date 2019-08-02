import React from 'react';
import {Wrapper, Card, Grid} from '../style/styled';
import {SettingItem} from '../components';
import styled from 'styled-components';
import { setLocalStorage } from '../utils/utils';
const Setting = ({logout, user}: {logout: any, user: any})=>{
  const fields = [{name: "First Name" , value : user.firstName},
                  {name: "Last Name", value: user.lastName},
                  {name: "Username", value: user.username},
                  {name: "Phone", value:""},
                  {name:"Email", value: user.email}
                ];
    return (
      <Wrapper className="full-height">
       <div className="container" >
       <Grid cols="1">
          <button className="btn justify-end" onClick={()=>{logout()}}>Logout</button>
      </Grid>
      {fields.map((data,i)=><SettingItem {...data} key={i} />)}
      <div className="center bold txt-sm">Terms, Data Policy and Cookies Policy.</div>
        </div>
      </Wrapper>
    );
  }
export default Setting;
