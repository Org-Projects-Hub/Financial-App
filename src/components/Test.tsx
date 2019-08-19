import React, { useState } from 'react';
import Tests from './Tests.json';
import Question from './Question';
import { Card, Grid, GridColItem } from '../style/styled';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
  const [answered, setAnsered] = useState(false);
  const [clicked, setClicked] = useState(false)
  
  if(testType === 'pretest' || testType === 'posttest') {
    const questions = testType === 'pretest'?  Tests.testType.pretest.questions : Tests.testType.posttest.questions;
    const answers = testType === 'pretest'?  Tests.testType.pretest.answers : Tests.testType.posttest.answers;
    
    /**
     * Called when answer selected, updates states, saves user selection
     * @param id    question # associated w question
     * @param value user's selection
     */
    const nextQuestion = (id: string, value: string) => {
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

      if(selections.length < questions.length) { /** increment question number */
        setQNum(qNum => qNum+1);
      }
    }

    const prevQuestion = () => {
      setQNum(qNum => qNum-1);
    }
    
    while(qNum < questions.length){ /** render questions until all have been answered */
      return(
        <div>
          <Question 
            id={questions[qNum].id.toString()} 
            question={questions[qNum].q} 
            answers={answers} 
            value={selections[qNum] === undefined? null : selections[qNum].value} 
            nextQuestion={nextQuestion} 
            total={questions.length} />
          <Grid cols="2">
            <GridColItem colStart="1" colEnd="2" align="start">{qNum > 0 && <button className="btn" onClick={(e) => prevQuestion()}>Previous</button>} {/** if there is a previous question, display back button */}</GridColItem>
            <GridColItem colStart="2" colEnd="3" align="end">{selections[qNum] !== undefined && <button className="btn" onClick={(e) => setQNum(qNum => qNum+1)}>Next</button>} {/** if current question has answer, show next button */}</GridColItem>
          </Grid>
          {console.log(qNum)}
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
