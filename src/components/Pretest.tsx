import React, { Component } from 'react';
import Test from './Test';
import styled from 'styled-components';
import {Card} from '../style/styled';


const Div = styled.div`
    text-align: center;
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat (2, 1fr);
`;

const PretestExplanation: string = 'Pretest explanation';

type Props = {
    begin: boolean,
    setStage: Function
};

export default class Pretest extends React.Component<{setStage: Function}, Props> {

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
                    <Div><Card>{PretestExplanation}</Card>
                    <button className="btn" onClick={this.onClick}>Begin Pretest</button></Div>
                </div>
               :
                <div className="container">
                    <Test testType="pretest"/>
                    <Div><button className="btn" onClick={(e) => this.props.setStage("posttest")}>Submit</button></Div>
                </div>
            );
        }
    }

