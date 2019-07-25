import React, { Component } from 'react';
import Test from './Test';
import styled from 'styled-components';
import {Card, GridRow} from '../style/styled';


const Div = styled.div`
    text-align: center;
    padding: 15px;
`;

const PretestExplanation: string = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.';

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
                <GridRow rows="2">
                    <Card style={{maxWidth:"700px", width: "90%" }}>{PretestExplanation}</Card>
                    <Div><button className="btn" onClick={this.onClick}>Begin Pretest</button></Div>
                </GridRow>
               :
                <div className="container">
                    <Test testType="pretest"/>
                    <Div><button className="btn" onClick={(e) => this.props.setStage("posttest")}>Submit</button></Div>
                </div>
            );
        }
    }
