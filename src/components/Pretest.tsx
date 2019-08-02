import React, { useState } from 'react';
import Test from './Test';
import Results from './Results';
import styled from 'styled-components';
import {Card, GridRow} from '../style/styled';
import { getThemeProps } from '@material-ui/styles';

/**
 * Pretest.tsx
 *
 * @desc: Called by [Simulation]. Fist component to load when beginning the simulation. 
 *      Begins with Simulation explanation and button to being.
 *      Loads list of questions to be answered. ([Pretest] > [Test] > [Question])
 *      Displays results after test along with button to begin simulation. ([Result])
 * @param {Function} setStage - used to set the stage to "simulation" when pretest is complete
 * @return TSX to be rendered
 */

const Div = styled.div`
    text-align: center;
    padding: 15px;
`;

const PretestExplanation: string = 'Pretest Explanation';

const Pretest = ({setStage}: any)=> {
    const [begin, setBegin] = useState(false);
    const [testComplete, setTestComplete] = useState(false);
  
    return (
        /** If begin is false, Pretest/Simulation Explanation and begin button will be returned. */
        !begin?
            <GridRow rows="2">
                <Card>{PretestExplanation}</Card>
                <Div><button className="btn" onClick={(e) => setBegin(true)}>Begin Pretest</button></Div>
            </GridRow>
        :
            /** If testComplete is false, [Test] component will be rendered, displaying questions to be answered. */
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