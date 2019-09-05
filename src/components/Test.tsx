import React, { useState } from 'react';
import Tests from './Tests.json';
import Question from './Question';
import QuestionList from './QuestionList';
import { Container, NavButton } from '../style/preposttest';
import { Card, Grid, GridColItem } from '../style/styled';


/**
 * Test.tsx
 *
 * @desc: Called by [PrePostTest].  Determines which test will be loaded based on testType prop
 * @param {string}   testType        determines which test questions/answers to render
 * @param {Function} setTestComplete sets testComplete boolean true in PrePostTest on test submission
 * @return TSX to be rendered.
 */

type Props = {
  testType: string,
  setTestComplete: Function
}

const Test = ({testType, setTestComplete}: Props)=> {
  const [qNum, setQNum] = useState(0);
  const [selections, setSelections] = useState([]);
  const [answered, setAnswered] = useState("fade-out");
  
  if(testType === 'pretest' || testType === 'posttest') {
    const questions = testType === 'pretest'?  Tests.testType.pretest.questions : Tests.testType.posttest.questions;
    const answers = testType === 'pretest'?  Tests.testType.pretest.answers : Tests.testType.posttest.answers;
    
    /**
     * Called when answer selected, updates states, saves user selection
     * @param id    question # associated w question
     * @param value user's selection
     */
    const storeSelection = (id: string, value: string) => {
      if(selections[qNum] === undefined) { /** if there is no answer for current question, add answer to selections array */
        setSelections([...selections, {
          id: id,
          value: value
        }])
      } else {  /** if question has been answered, but user went back to change answer */
        let tempArray = [...selections];
        tempArray[qNum].id = id;
        tempArray[qNum].value = value;
        setSelections(tempArray);
      }
    }

    const nextQuestion = () => {
      setAnswered("fade-out active");
      setTimeout(() =>setAnswered("fade-out"), 300);
      setTimeout(() =>setQNum(qNum+1), 300);
    }

    const prevQuestion = () => {
      setAnswered("fade-out active");
      setTimeout(() =>setAnswered("fade-out"), 300);
      setTimeout(() =>setQNum(qNum-1), 300);
    }

    const setQuestion = (selected: number) => {
      setAnswered("fade-out active");
      setTimeout(() =>setAnswered("fade-out"), 300);
      setTimeout(() => setQNum(selected));
    }
    
    while(qNum < questions.length){ /** render questions until all have been answered */
      return(
        <Grid cols="3" style={{width : "100%"}}>
          <QuestionList 
            answerList={selections} 
            questions={questions}
            current={qNum} 
            setQuestion={setQuestion} />

          <div style={{width: "100%", minWidth: "100%"}} className={answered} >
            <Question 
              id={questions[qNum].id.toString()} 
              question={questions[qNum].q} 
              answers={answers} 
              value={selections[qNum] === undefined? null : selections[qNum].value} /** set value to null if current question hasn't been answered */
              storeSelection={storeSelection} 
              total={questions.length} />
            <Grid cols="2">
              <GridColItem colStart="1" colEnd="2" align="start"><NavButton disabled={qNum <= 0} onClick={(e) => prevQuestion()}>PREVIOUS</NavButton> {/** if there is a previous question, display back button */}</GridColItem>
              <GridColItem colStart="2" colEnd="3" align="end">{<NavButton disabled={selections[qNum] === undefined} onClick={(e) => nextQuestion()}>NEXT</NavButton>} {/** if current question has answer, show next button */}</GridColItem>
            </Grid>
          </div>
        </Grid>
      );
    }

    return (
      <Grid cols="1">
        <GridColItem colStart="1" colEnd="3" align="center">
          <Card>
            {testType.charAt(0).toUpperCase() + testType.slice(1)} complete.
          </Card>
        </GridColItem>
        <Grid cols="2">
          <GridColItem colStart="1" colEnd="2" align="center"><NavButton onClick={(e) => prevQuestion()}>BACK</NavButton></GridColItem>
          <GridColItem colStart="2" colEnd="3" align="center"><NavButton onClick={(e) => setTestComplete(true)}>SUBMIT</NavButton></GridColItem>
        </Grid>
      </Grid>
    );
  }
  else {

  }
};

export default Test;
