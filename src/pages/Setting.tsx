import React from 'react';
import {Wrapper, Card, Grid} from '../style/styled';
import {SettingItem} from '../components';
import styled from 'styled-components';

const Setting = ()=>{
  const fields = [{name: "First Name" , value : "Sonam"},
                  {name: "Last Name", value:"Sonam"},
                  {name: "Username", value:"Sonam5"},
                  {name: "Phone", value:"3185828"},
                  {name:"Email", value:"sonam@gmail.com"}
                ];
    return (
      <Wrapper>
       <div className="container full-height" >
       <Grid color="1">
          <button className="btn justify-end">Logout</button>
      </Grid>
      {fields.map((data,i)=><SettingItem {...data} key={i} />)}
        </div>
      </Wrapper>
    );
  }
export default Setting;
