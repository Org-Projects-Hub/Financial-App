import React, { useState, useEffect } from 'react';
import Tests from '../../../json/Tests.json';
import Question from './Question';
import QuestionList from './QuestionList';
import { Container, NavButton } from '../../../style/preposttest';
import { Card, Grid, GridColItem } from '../../../style/styled';
import api from '../../../api';


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
  CompleteTest: Function
}

const Test = ({testType, CompleteTest}: Props):JSX.Element=> {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(function() {
    window.addEventListener('resize', handleWindowSizeChange);
    console.log("componentwillmount");

    return function cleanup() {
      window.removeEventListener('resize', handleWindowSizeChange);
      console.log("componentwillUNmount");
    }
  });

  const isMobile = width <= 500;

  const [qNum, setQNum] = useState(0);
  const [selections, setSelections] = useState([]);
  const [answered, setAnswered] = useState("fade-out");
  
  if(testType === 'pretest' || testType === 'posttest') {
    const questions = testType === 'pretest'?  Tests.testType.pretest.questions : Tests.testType.posttest.questions;
    const answers = testType === 'pretest'?  Tests.testType.pretest.answers : Tests.testType.posttest.answers;
    
    /**
     * Called when answer selected, sends selection to backend
     * @param id     question number
     * @param answer user's selection
     */
    const SubmitAnswer = (id: string, answer : string) => { //move this to test component
      const obj = {answer: answer, typesType: testType, q_id: id}; //makes typesType accept test var
      
      console.log(obj);
      
      api.answer(obj)
      .then(res => {
        if (res.success) {
          console.log("success")
        } else {
          //alert(res.message);
        }
      })
        .catch(err => console.log(err));
    };

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

    /**
     * Called when answer selected, stores in selections hook & backend
     * @param id     question number
     * @param answer user's selection
     */
    const Save = (id: string, answer: string) => { //move this to test component
      SubmitAnswer (id, answer);
      storeSelection(id, answer);
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
      if(isMobile) { //if on mobile device/smaller screen
        return(
            <div style={{width: "100%", minWidth: "100%"}} className={answered} >
              <Question 
                id={questions[qNum].id.toString()} 
                question={questions[qNum].q} 
                answers={answers} 
                value={selections[qNum] === undefined? null : selections[qNum].value} /** set value to null if current question hasn't been answered */
                Save={Save}
                total={questions.length} />
              <Grid cols="2">
                <GridColItem colStart="1" colEnd="2" align="start"><NavButton disabled={qNum <= 0} onClick={(e) => prevQuestion()}>PREVIOUS</NavButton> {/** if there is a previous question, display back button */}</GridColItem>
                <GridColItem colStart="2" colEnd="3" align="end">{<NavButton disabled={selections[qNum] === undefined} onClick={(e) => nextQuestion()}>NEXT</NavButton>} {/** if current question has answer, show next button */}</GridColItem>
              </Grid>
            </div>
        );
      } else {
        return(
          <Grid cols="3">
  
            <GridColItem colStart="1" colEnd="2" align="center">
              <QuestionList 
                answerList={selections} 
                questions={questions}
                current={qNum} 
                setQuestion={setQuestion} />
            </GridColItem>
  
            <GridColItem colStart="2" colEnd="3" align="center">
              <div style={{width: "100%", minWidth: "100%"}} className={answered} >
                <Question 
                  id={questions[qNum].id.toString()} 
                  question={questions[qNum].q} 
                  answers={answers} 
                  value={selections[qNum] === undefined? null : selections[qNum].value} /** set value to null if current question hasn't been answered */
                  Save={Save}
                  total={questions.length} />
                <Grid cols="2">
                  <GridColItem colStart="1" colEnd="2" align="start"><NavButton disabled={qNum <= 0} onClick={(e) => prevQuestion()}>PREVIOUS</NavButton> {/** if there is a previous question, display back button */}</GridColItem>
                  <GridColItem colStart="2" colEnd="3" align="end">{<NavButton disabled={selections[qNum] === undefined} onClick={(e) => nextQuestion()}>NEXT</NavButton>} {/** if current question has answer, show next button */}</GridColItem>
                </Grid>
              </div>
            </GridColItem>
  
          </Grid>
        );
      }
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
          <GridColItem colStart="2" colEnd="3" align="center"><NavButton onClick={(e) => CompleteTest()}>SUBMIT</NavButton></GridColItem>
        </Grid>
      </Grid>
    );
  }
};

export default Test;
