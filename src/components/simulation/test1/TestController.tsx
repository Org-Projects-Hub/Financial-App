import React, { useState, useEffect } from 'react';
import Tests from '../../../json/Tests.json';
import TestLayout from './TestLayout';
import api from '../../../api';

interface Props {
  stage: string;
  setStage: Function;
}

const TestController = (props: Props): JSX.Element => {
  //get questions & answers
  const questionList = Tests.questions;
  const answerList = Tests.answers;
  const [qNum, setQNum] = useState(0); //question number
  const [selections, setSelections] = useState([]); //selected answers
  const [answered, setAnswered] = useState('fade-out'); //for transition

  /**
   * Called by Save when answer selected, updates states, saves user selection
   * @param number    question # associated w question
   * @param answer    user's selection
   */
  const storeSel = (number: number, answer: string) => {
    if (selections[qNum] === undefined) {
      /** if there is no answer for current question, add answer to selections array */
      setSelections([
        ...selections,
        {
          id: number,
          value: answer,
        },
      ]);
      console.log(selections, qNum);
    } else {
      /** if question has been answered, but user went back to change answer */
      let tempArray = [...selections];
      tempArray[qNum].id = number;
      tempArray[qNum].value = answer;
      setSelections(tempArray);
    }
  };

  /**
   * Called by Save when answer selected, sends selection to backend
   * @param number  question number
   * @param answer  user's selection
   */
  const submit = (number: number, answer: string) => {
    const obj = { answer: answer, typesType: props.stage, q_id: number }; //makes typesType accept test var
    api
      .answer(obj)
      .then((res) => {
        if (res.success) {
          console.log('success');
        } else {
          //alert(res.message);
        }
      })
      .catch((err) => console.log(err));
  };

  /**
   * Called by [TestLayout]'s child component [QuestionCard] when user selects answer to question
   * @param number  question number
   * @param answer  user's selection
   */
  const Save = (number: number, answer: string) => {
    storeSel(number, answer);
    submit(number, answer);
  };

  const nextStageConfirmation = () => {
    let confirmed = window.confirm(
      "Are you sure you want to move to the next stage? \nYou won't be able to change your answers."
    );
    if (confirmed) props.setStage('simulation');
  };

  /**
   * Navigate to next or previous question via [TestLayout]
   */
  const next = () => {
    if (selections.length == questionList.length) nextStageConfirmation();
    else {
      setAnswered('fade-out active');
      setTimeout(() => setAnswered('fade-out'), 300);
      setTimeout(() => setQNum(qNum + 1), 300);
    }
  };

  const back = () => {
    setAnswered('fade-out active');
    setTimeout(() => setAnswered('fade-out'), 300);
    setTimeout(() => setQNum(qNum - 1), 300);
  };

  /**
   * Navigate to specific question number via [TestLayout]'s child component [QuestionList]
   * @param selected number of question user clicked
   */
  const set = (selected: number) => {
    setAnswered('fade-out active');
    setTimeout(() => setAnswered('fade-out'), 300);
    setTimeout(() => setQNum(selected));
  };

  //consolidate props for children
  const nav = { next, back, set };
  const data = {
    current: qNum,
    questions: questionList,
    answers: answerList,
    selections: selections,
    answered: answered,
  };

  return (
    <>
      <button className="button" onClick={() => props.setStage('simulation')}>
        To Simulation
      </button>
      <TestLayout nav={nav} save={Save} data={data} />
    </>
  );
};

export default TestController;
