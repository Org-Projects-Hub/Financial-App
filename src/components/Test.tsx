
import React from 'react';
import Tests from './Tests.json';
import Question from './Question';
import { getThemeProps } from '@material-ui/styles';

const Test = (props: any)=>
{

  if(props.testType === 'pretest' || props.testType === 'posttest') {
    const questions = (props.testType === 'pretest') ? Tests.testType.pretest.questions : Tests.testType.posttest.questions;
    const answers = (props.testType === 'pretest') ? Tests.testType.pretest.answers : Tests.testType.posttest.answers;

    return(
      <div>
        {questions.map((question, i) =>
          <Question {...question} answers={answers} key={i}/>)}
      </div>
    );
  } else {

  }
};



export default Test;
