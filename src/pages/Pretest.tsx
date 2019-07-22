import React, { Component } from 'react';
import Test from '../components/Test';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
type Props = {
    begin: boolean
    questions: string[],
    answers: string[],
    responses: string[],
};

export default class Pretest extends React.Component<{}, Props> {

    constructor(props: Props){
        super(props);
        this.state = {
            begin: false,
            questions: [],
            answers: [],
            responses: [],
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(event: any) {
        this.setState({ begin: true });
    }

    render() {
    let { begin } = this.state;
    return(
          begin?
                <div className="container">
                    Pretest explanation <br />
                    <button onClick={this.onClick}>Begin Pretest</button>
                </div>
               :
                <div className="container">
                    <form><Test />
                    <RadioGroup aria-label="Gender"
                    name="gender1"
                    value={null}
                    onChange={(e: any)=>console.log(e.target.value)}>
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
         </form>
                </div>
            );
        }
    }

/*
const startPage: JSX.Element = (
    <div className="container">
        <div className="introduction">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum lacinia urna. Aliquam quis porttitor augue. Maecenas venenatis nunc ac dolor placerat, vel venenatis neque mollis. Nulla auctor, tortor sed viverra cursus, risus tellus ullamcorper purus, eu malesuada neque justo quis velit. Aliquam interdum ullamcorper dui. Nunc tristique dictum libero sit amet volutpat. Donec a augue eu lorem imperdiet scelerisque a vitae neque.

Vestibulum ipsum diam, fringilla sit amet congue id, aliquet at lacus. Donec consectetur diam at enim euismod consequat. Donec mattis consequat urna id sagittis. Suspendisse potenti. Aenean at odio ultrices, pulvinar justo sed, fringilla neque. Donec iaculis, dui ut egestas malesuada, enim justo ornare neque, luctus lacinia lectus arcu eu purus. Aliquam ac euismod tellus. Phasellus commodo urna sapien, non placerat ipsum accumsan in. Etiam elementum odio consequat rhoncus placerat. Quisque purus tortor, vestibulum sed sagittis at, tincidunt at justo. Vivamus laoreet euismod est ultrices finibus. Phasellus elit nisl, facilisis vitae vehicula at, mollis vitae est.
        </div>
        <div className="start-button">
            <button onClick={ () => setView(true) }>Begin Pretest</button>
        </div>
    </div>
);

const testPage: JSX.Element = (
    <div>
        Hi.
    </div>
);

const [view, setView] = useState(false);

function Pretest() {

    if(view === false) {
        return (
            {startPage}
        );
    } else {
        return(
            {testPage}
        );
    }

}

export default Pretest;
*/
