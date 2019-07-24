import React, { Component } from 'react';
import Test from './Test';

type Props = {
    begin: boolean,
    setStage: Function
};

export default class Posttest extends React.Component<{setStage: Function}, Props> {

    constructor(props: Props){
        super(props);
        this.state = {
            begin: false,
            setStage: props.setStage
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
                    <button className="btn" onClick={this.onClick}>Begin Posttest</button>
                </div>
               :
                <div className="container">
                        <Test testType="posttest"/>
                </div>
            );
        }
    }

