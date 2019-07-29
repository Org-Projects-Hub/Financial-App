import React, {useState} from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Card, Grid} from '../style/styled';

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
  const [answer, setAnswer] = useState('');

  return (
    <Card>
      <Wrapper>
        <Span>{props.q}</Span>
        {console.log(props)}
      <Grid cols="1">
        <div style={{width: "57%"}}  className="justify-end">
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
        </div>
      </Grid>
      </Wrapper>
    </Card>
  )
};

export default Question;
