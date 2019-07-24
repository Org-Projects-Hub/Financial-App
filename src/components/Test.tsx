
import React from 'react';
import Tests from './Tests.json';
import Question from './Question';
import { getThemeProps } from '@material-ui/styles';
import {Card} from '../style/styled';

const Test = (props: any)=>
{

  if(props.testType === 'pretest' || props.testType === 'posttest') {
    return(
      <>
        {Tests.testType.pretest.questions.map((question, i) =>
          <Question {...question} answers={Tests.testType.pretest.answers} key={i}/>)}
      </>
    );
  } else {

  }




};



export default Test;
