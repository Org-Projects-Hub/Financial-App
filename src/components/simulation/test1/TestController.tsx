import React, { useState, useEffect, useRef } from 'react';
import Tests from '../../../json/Tests.json';
import TestLayout from './TestLayout';
import api from '../../../api';

interface Props {
  stage: string;
  setStage: Function;
  sim_id: string;
}
const TestController = (props: Props): JSX.Element => {
  //get questions & answers
  const questionList = Tests.questions;
  const answerList = Tests.answers;
  const [qNum, setQNum] = useState(0); //question number
  const [selections, setSelections] = useState(new Array(11)); //selected answers
  const [answered, setAnswered] = useState('fade-out'); //for transition

  let store: any = useRef();

  useEffect(() => {
    store.current = { ...props, selections };
    window.addEventListener('unload', () => {
      submitAnswers();
    });

    return () => {
      submitAnswers(
        store.current.sim_id,
        store.current.stage,
        store.current.selections
      );

      window.removeEventListener('unload', () => {
        submitAnswers();
      });
    };
  }, []);

  useEffect(() => {
    store.current = { ...store.current, selections };
  }, [selections]);

  useEffect(() => {
    store.current = { ...store.current, ...props };
  }, [props]);

  /**
   * Called by Save when answer selected, updates states, saves user selection
   * @param qNumber    question # associated w question
   * @param answer    user's selection
   */
  const storeSel = (qNumber: number, answer: number) => {
    let temp = [...selections];
    temp[qNumber] = answer;

    setSelections(temp);
  };

  const submitAnswers = (
    sim_id = props.sim_id,
    testType = props.stage,
    answers = selections
  ) => {
    api.updateTest({
      sim_id,
      testType,
      answers,
    });
  };

  /**
   * Called by [TestLayout]'s child component [QuestionCard] when user selects answer to question
   * @param qNumber  question number
   * @param answer  user's selection
   */
  const Save = (qNumber: number, answer: string) => {
    storeSel(qNumber, parseInt(answer));
    // submitAnswers(qNumber, answer);
  };

  const nextStageConfirmation = () => {
    let confirmed = window.confirm(
      "Are you sure you want to move to the next stage? \nYou won't be able to change your answers."
    );
    if (confirmed) {
      props.setStage('simulation');
      submitAnswers();
    }
  };

  /**
   * Navigate to next or previous question via [TestLayout]
   */
  const next = (withFinish: Boolean) => {
    if (withFinish) nextStageConfirmation();
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
