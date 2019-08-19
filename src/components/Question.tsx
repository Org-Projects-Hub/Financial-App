import React, {useState} from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Card, Grid} from '../style/styled';
import api from '../api';
/**
 * Question.tsx
 *
 * @desc: Called by [Test]. Displays question to be answered + answer choices.
 * @param {string}   id           question number
 * @param {string}   question     question to be answered
 * @param {string[]} answers      array of answer options
 * @param {string}   value        answer for current question
 * @param {Function} nextQuestion loads next question
 * @return TSX to be rendered.
 */

const Wrapper = styled.div`
  display: block;
  padding: 15px;
`;

const Div = styled.div`
  text-align: left;
`;

const Span = styled.div`
  padding-bottom: 10px;
  text-align: center;
`;

type Props = {
  id: string,
  question: string,
  answers: string[],
  value: string,
  nextQuestion: Function
}

const Question = ({id, question, answers, value, nextQuestion}: Props)=>{

  const SubmitAnswer = (answer : string, id: string)=>{
                  const obj = {answer: answer, typesType:"preTest", q_id: id};
                           console.log(obj);
                           api.answer(obj)
                           .then(res => {
                               if (res.success) {
                                  console.log("success")
                               } else {
                              //   alert(res.message);
                               }
                             })
                             .catch(err => console.log(err));

                       };

  return (
    <Card>
      <Wrapper>
        <Span>{question}</Span>
        <Grid cols="1">
          <div style={{width: "57%"}}  className="justify-end">
            <RadioGroup
              aria-label="answers"
              name={id}
              value={value || ''}
              onChange={(e: any)=>{
                        // Fetch to backend here
                        SubmitAnswer(e.target.value, id);
                        nextQuestion(e.target.name, e.target.value);
              }}
            >
              {/** Map each answer to radio button */}
              {answers.map((answer: string, i: any) =>
                    <Div key ={i}>
                      <FormControlLabel value={answer} control={<Radio />} label={answer} key={i} />
                    </Div>
              )}
            </RadioGroup>
          </div>
        </Grid>
      </Wrapper>
    </Card>
  )
};

export default Question;
