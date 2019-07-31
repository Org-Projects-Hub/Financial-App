import React from 'react';
import Tests from './Tests.json';
import Question from './Question';
import { getThemeProps } from '@material-ui/styles';
import {Card} from '../style/styled';

/**
 * Test.tsx
 *
 * @desc: Called by [Pretest].  Determines which test will be loaded based on testType prop.
 * @param {any} props - contains prop(s): testType - determines which test questions/answers to render.
 * @return TSX to be rendered.
 */

const Test = (props: any)=>
{
  /** if testType is pre/posttest, different questions will be rendered with all the same answer choices */
  if(props.testType === 'pretest' || props.testType === 'posttest') {
    /** retreive all questions of pre/post test, and save to "questions" var */
    const questions = props.testType === 'pretest'?  Tests.testType.pretest.questions : Tests.testType.posttest.questions;
    /** retreive all answers of pre/post test, and save to "answers" var */
    const answers = props.testType === 'pretest'?  Tests.testType.pretest.answers : Tests.testType.posttest.answers;

    return(
      /** 
       * Map each question on "questions" var, and send each question with answers as props
       * to [Question] to be formatted. 
       */
      <>
          {questions.map((question, i) =>
          <Question {...question} answers={answers} key={i}/>)}
      </>
    );
  } 
  /** else, different questions with corresponding answer choices will be rendered based on testType */
  else { 

  }
};

export default Test;
