
import React from 'react';
import Tests from './Tests.json';
import Question from './Question';
import { getThemeProps } from '@material-ui/styles';

const Test = (props: any)=>
{

  if(props.testType === 'pretest' || props.testType === 'posttest') {
    return(
      <div>
        {Tests.testType.pretest.questions.map((question, i) =>
          <Question {...question} answers={Tests.testType.pretest.answers} key={i}/>)}
      </div>
    );
  } else {

  }
};



export default Test;
