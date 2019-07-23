import React, {useState} from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Wrapper = styled.div`
  display: block;
  padding: 15px;
  text-align: center;
`;

const Span = styled.div`
  text-align: left;
  width: 50%;
`;

const Question = (props: any)=>{
  const [answer, setAnswer] = useState('');

  return (
    <Wrapper>
      {props.q}
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
            <Span>
              <FormControlLabel value={answer} control={<Radio />} label={answer} key={i}/>
            </Span>
        )}
      </RadioGroup>

    </Wrapper>
  )
};

export default Question;


