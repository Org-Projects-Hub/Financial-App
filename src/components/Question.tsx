import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Question = (props: any)=>{
  const [answer, setAnswer] = useState('');

  return(
    <div>
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
        {props.answers.map((answer: string) =>
            <FormControlLabel value={answer} control={<Radio />} label={answer} />
        )}
      </RadioGroup>
    </div>
  )
};

export default Question;