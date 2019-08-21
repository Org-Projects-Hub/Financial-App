import React, { useState } from 'react';
import Tests from './Tests.json';
import Question from './Question';
import styled from 'styled-components';
import { Card, Grid, GridColItem } from '../style/styled';


/**
 * Test.tsx
 *
 * @desc: Called by [PrePostTest].  Determines which test will be loaded based on testType prop
 * @param {string}   testType        determines which test questions/answers to render
 * @param {Function} setTestComplete sets testComplete boolean true in PrePostTest on test submission
 * @return TSX to be rendered.
 */

const NavButton = styled.button`
  background-color: #007fff;
  color: #ffffff;
  font-weight: bold;
  margin: 5px;
  min-width: 150px;
  min-height: 40px;
  border: 2px solid #1f3d7d;
  border-radius: 4px;

  &:focus {
    background-color: #007fff;
    border-color: #f8b332;
  }

  &:hover {
    background-color: #1f3d7d;
    cursor: pointer;
    border-color: #f8b332;
  }

  &:disabled {
    background-color: #7da2d6;
    color: #ffffff;
    border-color: #1f3d7d;
    cursor: not-allowed;
  }
`;

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
    
    while(qNum < questions.length){ /** render questions until all have been answered */
      return(
        <div className={answered} >
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
          <GridColItem colStart="1" colEnd="2" align="center"><button className="btn" onClick={(e) => prevQuestion()}>Back</button></GridColItem>
          <GridColItem colStart="2" colEnd="3" align="center"><button className="btn" onClick={(e) => setTestComplete(true)}>Submit</button></GridColItem>
        </Grid>
      </Grid>
    );
  }
  else {

  }
};

export default Test;
