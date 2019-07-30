import React, {useState} from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Card, Grid} from '../style/styled';

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
  font-size: 16px;
  padding-bottom: 12px;
  text-align: center;
  border-bottom: 1px solid #d4d4d4;
`;

const Question = (props: any)=>{
  /** stores/updates answer selection for the question */
  const [answer, setAnswer] = useState('');

  return (
    <Card>
      <Wrapper>
        {/** Displays question */}
        <Span>{props.q}</Span>
        {console.log(props)}
        
        <Grid cols="1">
          <div style={{width: "57%"}}  className="justify-end">
            {/** 
              * Contains all radio buttons for question 
              * stores current answer choice when selection is made
              */}
            <RadioGroup
              aria-label="answers"
              name={props.id.toString()}
              value={answer}
              onChange={(e: any)=>{setAnswer(e.target.value)
                        // Fetch to backend here
                        console.log(`answer is ${e.target.value}`)
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
