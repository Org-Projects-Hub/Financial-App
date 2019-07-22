//get test type from parent
//if the test type has the same answers for all questions, call that function
//otherwise, if test type has differnt answers for diffrent questions, call that function to render the questions


//each "return" must contain div which holds questions and answers(w radio buttons)
import React from 'react';
import Tests from './Tests.json';
import Question from './Question';



const Test = ()=>
(
            <div>
                {Tests.testType.pretest.questions.map((question, i) =>
                  <Question {...question} key={i}/>)
                }
             </div>
        );



export default Test;
