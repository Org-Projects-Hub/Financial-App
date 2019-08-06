import React, {useState} from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Card, Grid} from '../style/styled';
import api from '../api';
/**
 * Question.tsx
 *
 * @desc: Called by [Test]. Takes the question and answers from props.
 * @param {any} props - contains prop(s): id - question number, q - question string
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

const Question = (props: any)=>{
  const [answer, setAnswer] = useState(null);

  const SubmitAnswer = (answer : string, id: string)=>{
                  const obj = {answer: answer, q_id: id};
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
        <Span>{props.q}</Span>
        <Grid cols="1">
          <div style={{width: "57%"}}  className="justify-end">
            <RadioGroup
              aria-label="answers"
              name={props.id.toString()}
              value={answer || ''}
              onChange={(e: any)=>{setAnswer(e.target.value)
                        // Fetch to backend here
                        SubmitAnswer(e.target.value, props.id);

              }}
            >
              {/** Map each answer to radio button */}
              {props.answers.map((answer: string, i: any) =>
                    <Div>
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
