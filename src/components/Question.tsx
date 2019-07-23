import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Question = (props: any)=>{
  const [answer, setAnswer] = useState(null);
        return(  <div >
                    {props.q}
                    {console.log(props)}
                            <RadioGroup aria-label="Gender"
                            name="gender1"
                            value={answer}
                            onChange={(e: any)=>{setAnswer(e.target.value)
                                                // Fetch to backend here
                                                console.log(`answer is ${e.target.value}`)
                            }}>
                              <FormControlLabel value="1" control={<Radio />} label="Answer 1" />
                              <FormControlLabel value="2" control={<Radio />} label="Answer 2" />
                              <FormControlLabel value="3" control={<Radio />} label="Answer 3" />
                            </RadioGroup>
                    </div>)};

export default Question;
