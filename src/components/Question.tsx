import React, {useState} from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Card} from '../style/styled';

const Wrapper = styled.div`
  display: block;
  padding: 15px;
`;

const Div = styled.div`
  margin:auto;
`;

const Span = styled.div`
  padding-bottom: 10px;
  text-align: center;
`;

const Question = (props: any)=>{
  const [answer, setAnswer] = useState('');

  return (
    <Card>
      <Wrapper>
        <Span>{props.q}</Span>
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

