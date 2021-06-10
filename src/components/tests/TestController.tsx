import React, { useEffect, useRef, useState } from 'react';
import Tests from '../../json/Tests.json';
import { TestLayout } from '../index';
import api from '../../api';
import useStateCallback from '../../utils/useStateCallback';
import TestInfoCard from './TestInfoCard';

interface Props {
  stage: string;
  setStage: Function;
}

const useBackendConnection = (stage: string) => {
  const [qNum, setQNum] = useStateCallback(null); //question number
  const [selections, setSelections] = useStateCallback(new Array(11)); //selected answers
  const [loading, setLoading] = useState(true);
  const [showInfoCard, setShowInfoCard] = useState(true);

  let store: any = useRef(); //used to access selections state in componentWillUnmount

  useEffect(() => {
    store.current = { stage, selections };
    retriveTest();

    /**
     * componentWillUnmount
     * Submits the answers to backend before unmounting
     */
    return () => {
      let { stage, selections } = store.current;
      submitAnswers(stage, selections);
    };
  }, []);

  /**
   * Updates the store ref
   */
  useEffect(() => {
    store.current = { ...store.current, selections };
  }, [selections]);

  const changePointer = (answers: any) => {
    let current = answers.length - 1;

    for (let i = 0; i < answers.length; i++) {
      if (!answers[i]) {
        current = i;
        break;
      }
    }

    setQNum(current, () => setLoading(false));
  };

  /**
   * Retrive answers from backend
   */
  const retriveTest = () => {
    api
      .retriveTest(stage)
      .then((res: Array<number>) => {
        setSelections(res, changePointer);
        setShowInfoCard(res.every((element) => element === null));
      })
      .catch((err) => console.log(err));
  };

  /**
   * Submits the cuurent answers to backend
   * @param testType "pretest" or "posttest"
   * @param answers current answers
   */
  const submitAnswers = (testType: string, answers: any) => {
    api.updateTest({
      testType,
      answers,
    });
  };

  return {
    qNum,
    setQNum,
    selections,
    setSelections,
    loading,
    showInfoCard,
    setShowInfoCard,
  };
};

const TestController = (props: Props): JSX.Element => {
  //get questions & answers
  const questionList = Tests.questions;
  const answerList = Tests.answers;

  const {
    qNum,
    setQNum,
    selections,
    setSelections,
    loading,
    showInfoCard,
    setShowInfoCard,
  } = useBackendConnection(props.stage);

  const [answered, setAnswered] = useState('fade-out'); //for transition

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

  /**
   * Called by [TestLayout]'s child component [QuestionCard] when user selects answer to question
   * @param qNumber  question number
   * @param answer  user's selection
   */
  const Save = (qNumber: number, answer: string) => {
    storeSel(qNumber, parseInt(answer));
  };

  const nextStageConfirmation = () => {
    let confirmed = window.confirm(
      "Are you sure you want to move to the next stage? \nYou won't be able to change your answers."
    );
    if (confirmed) {
      if (props.stage == 'pretest') props.setStage('simulation');
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

  if (loading) return null;
  else if (showInfoCard) {
    return (
      <TestInfoCard stage={props.stage} setShowInfoCard={setShowInfoCard} />
    );
  } else {
    return <TestLayout nav={nav} save={Save} data={data} />;
  }
};

export default TestController;
