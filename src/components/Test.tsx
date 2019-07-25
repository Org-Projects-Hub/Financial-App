
import React from 'react';
import Tests from './Tests.json';
import Question from './Question';
import { getThemeProps } from '@material-ui/styles';
import {Card} from '../style/styled';

const Test = (props: any)=>
{

  



  if(props.testType === 'pretest' || props.testType === 'posttest') {
    const questions = props.testType === 'pretest'?  Tests.testType.pretest.questions : Tests.testType.posttest.questions;
    const answers = props.testType === 'pretest'?  Tests.testType.pretest.answers : Tests.testType.posttest.answers;


    return(
      <>
        {questions.map((question, i) =>
          <Question {...question} answers={answers} key={i}/>)}
      </>
    );
  } else {

  }




};



export default Test;
