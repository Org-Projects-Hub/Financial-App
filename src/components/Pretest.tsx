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
                <div>
                    <Card><Results /></Card>
                    <Div><button className="btn" onClick={(e) => setStage("posttest") } >Begin Simulation</button></Div>
                </div>
    );
};

export default Pretest;