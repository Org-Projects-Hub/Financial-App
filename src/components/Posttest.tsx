import React, { useState } from 'react';
import Test from './Test';
import Results from './Results';
import styled from 'styled-components';
import {Card, GridRow} from '../style/styled';

/**
 * Posttest.tsx
 *
 * @desc: Called by [Simulation]. Last component of simulation. Begins with button to being.
 *      Loads list of questions to be answered. ([Posttest] > [Test] > [Question])
 *      Displays results after test along with button to finish simulation. ([Result])
 * @param {Function} setStage - used to set the stage to "simulation" when pretest is complete
 * @return TSX to be rendered
 */

const Div = styled.div`
    text-align: center;
    padding: 15px;
`;

const Posttest = ({setStage}: any) => {
    const [begin, setBegin] = useState(false);
    const [testComplete, setTestComplete] = useState(false);
  
    return (
        /** If begin is false, begin button will be returned. */
        !begin?
            <GridRow rows="2">
                <button className="btn" onClick={(e) => setBegin(true)}>Begin Posttest</button>
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
                    <Div><button className="btn" /**onClick={(e) => setStage("posttest")}*/>Finish</button></Div>
                </div>
    );
}

export default Posttest;