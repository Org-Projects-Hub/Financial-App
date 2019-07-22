import React, { Component } from 'react';
import Test from './Test';

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
          !begin?
                <div className="container center">
                    Pretest explanation <br />
                    <button className="btn" onClick={this.onClick}>Begin Pretest</button>
                </div>
               :
                <div className="container">
                    <form><Test />

         </form>
                </div>
            );
        }
    }

