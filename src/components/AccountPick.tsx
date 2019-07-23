import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

                
 const accountPick = () =>{               
                
                <Wrapper>
                  <div className="row card">
                    <div className="row card-content" style={{height: "30em", width: "20em"}}>
                      <div className="center-align">
                        <Header>Are you a:</Header>
                      </div>
                        <RadioGroup onChange={(e: any) =>(setJob(e.target.value))}>
                          <FormControlLabel
                            value="STUDENT"
                            control={<Radio color="primary" />}
                            label="Student"
                            checked={job === "STUDENT"}
                          />
                          <FormControlLabel
                            value="TEACHER"
                            control={<Radio color="primary" />}
                            label="Teacher"
                          />
                          <FormControlLabel
                            value="OTHER"
                            control={<Radio color="primary" />}
                            label="Other"
                          />
                        </RadioGroup>
                      <button type="submit" className="btn btn-small waves-effect waves-light" style={{margin: "33%"}}onClick={() => setJobSelected(true)}> 
                        Submit
                      </button>
                      
                        <br/>Already have an account? <Link to='/'>Log In</Link>

                    </div>
                  </div>
                </Wrapper>

 }

 export default accountPick;