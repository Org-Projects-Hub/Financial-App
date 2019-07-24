import React, {useState} from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
<<<<<<< HEAD
=======
import FormControl from '@material-ui/core/FormControl';
import {Card} from '../style/styled';
>>>>>>> 8ecc06f9bcbddba53d9b2ae6d662d003eb0b25c7

const Wrapper = styled.div`
  display: block;
  padding: 15px;
  text-align: center;
`;

const Div = styled.div`
  margin:auto;
`;

const Question = (props: any)=>{
  const [answer, setAnswer] = useState('');

  return (
    <Card>
      <Wrapper>
        <h6>{props.q}</h6>
        {console.log(props)}
        <RadioGroup
          aria-label="answers" 
          name={props.id.toString()}
          value={answer} 
          onChange={(e: any)=>{setAnswer(e.target.value)
                    // Fetch to backend here
                    console.log(`answer is ${e.target.value}`)
          }}
        >
          {props.answers.map((answer: string, i: any) =>
                <Div>
                  <FormControlLabel value={answer} control={<Radio />} label={answer} key={i} />
                </Div>
          )}
        </RadioGroup>
      </Wrapper>
    </Card>
  )
};

export default Question;


