import React, { useState } from 'react';
import Test from './Test';
import Results from './Results';
import styled from 'styled-components';
import {Card, GridRow} from '../style/styled';
import { getThemeProps } from '@material-ui/styles';


const Div = styled.div`
    text-align: center;
    padding: 15px;
`;

const PretestExplanation: string = 'Pretest Explanation';

const Pretest = ({setStage}: any)=> {
    //states to have: intro, test, results
    const [begin, setBegin] = useState(false);
    const [testComplete, setTestComplete] = useState(false);
  
    return (
        !begin?
            <GridRow rows="2">
                <Card>{PretestExplanation}</Card>
                <Div><button className="btn" onClick={(e) => setBegin(true)}>Begin Pretest</button></Div>
            </GridRow>
        :
            !testComplete?
                <div className="container">
                    <Test testType="pretest"/>
                    <Div><button className="btn" onClick={(e) => setTestComplete(true)}>Submit</button></Div>
                </div>
            :
                <GridRow rows="2">
                    <Card><Results /></Card>
                    <Div><button className="btn" onClick={(e) => setStage("posttest")}>Begin Simulation</button></Div>
                </GridRow>
    );
};

export default Pretest;










/*
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
                    <Card>{PretestExplanation}</Card>
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
*/
