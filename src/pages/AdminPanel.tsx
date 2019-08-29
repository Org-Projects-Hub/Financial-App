import React, {useState, useEffect} from 'react';
import useInterval from '@use-it/interval';
import {Wrapper, Card, Grid} from '../style/styled';
import { SelectInput} from '../components';
import styled from 'styled-components';
import { setLocalStorage } from '../utils/utils';
import { Chart } from "react-google-charts";
import Loader from '../components/Loader';
const AdminPanel = ()=>{

 const options = ["All Users", "Age", "Gender", "Grade"];
const [pointer, setPointer] = useState(0);

  useInterval( ()=>{
  console.log(pointer);
  setPointer( pointer + 1 );
}, 1000);

    return (
      <Wrapper className="full-height">
        {options[pointer]}
      </Wrapper>
    );
  }
export default AdminPanel;
