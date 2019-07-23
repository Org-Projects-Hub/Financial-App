
import React from 'react';
import Tests from './Tests.json';
import Question from './Question';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 75%;
  margin: auto;
`;

const Test = (props: any)=>
{

  if(props.testType === 'pretest' || props.testType === 'posttest') {
    return(
      <Wrapper>
        {Tests.testType.pretest.questions.map((question, i) =>
          <Question {...question} answers={Tests.testType.pretest.answers} key={i}/>)}
      </Wrapper>
    );
  } else {

  }
};



export default Test;
