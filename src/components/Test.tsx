//get test type from parent
//if the test type has the same answers for all questions, call that function
//otherwise, if test type has differnt answers for diffrent questions, call that function to render the questions


//each "return" must contain div which holds questions and answers(w radio buttons)
import React from 'react';
import Tests from './Tests.json';

type Props = {
    questions: string[],
    answers: string[],
    responses: []
};

class Test extends React.Component<{}, Props> {
    constructor(props: Props){
        super(props);
        this.state = {
            questions: Tests.testType.posttest.questions,
            answers: Tests.testType.posttest.answers,
            responses: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: any){
        e.preventDefault();
        if(true /**there is nothing in current spot at array, add, otherwise update */) {

        } else {

        }
    }

    handleSubmit(e: any){
        e.preventDefault();

    }


    render() {
        return(
            <div>
                {this.state.questions.map((question, i) =>
                    <div>
                        {question} <br />
                        {this.state.answers.map((answer, j) =>
                            <button onClick={this.handleChange} value={answer}>{answer}</button>
                        )}
                    </div> 
                )}
             </div>
        );
    }
}



export default Test;
