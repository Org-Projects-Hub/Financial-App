import React, { useState } from 'react';
import Test from './Test';
import Results from './Results';
import styled from 'styled-components';
import {Card, GridRow} from '../style/styled';

/**
 * PrePostTest.tsx
 *
 * @desc: Called by [Simulation]. Fist component to load when beginning the simulation. 
 *      Begins with Simulation explanation and button to being.
 *      Loads list of questions to be answered. ([PrePostTest] > [Test] > [Question])
 *      Displays results after test along with button to begin simulation. ([Result])
 * @param {Function} setStage - used to set the stage to (simulation) or (complete) when test is complete
 * @return TSX to be rendered
 */

const Div = styled.div`
    text-align: center;
    padding: 15px;
`;

const SimulationIntro: string = 'Simulation Introduction'; 

const PrePostTest = ({stage, setStage}: any)=> {
    const [begin, setBegin] = useState(false);
    const [testComplete, setTestComplete] = useState(false);
  
    return (
        /** If begin is false, SimulationIntro and/or begin button will be returned. */
        !begin?
            /** Load with SimInt if stage is "pretest" */
            stage === 'pretest'?
                <GridRow rows="2">
                    <Card>{SimulationIntro}</Card>
                    <Div><button className="btn" onClick={(e) => setBegin(true)}>BEGIN {stage.toUpperCase()}</button></Div>
                </GridRow>
            //: stage === 'simulation' ? <Wheel/>

            :
                <GridRow rows="2">
                    <Div><button className="btn" onClick={(e) => setBegin(true)}>BEGIN {stage.toUpperCase()}</button></Div>
                </GridRow>
        :
            /** If testComplete is false, [Test] component will be rendered, displaying questions to be answered. Else, results */
            !testComplete?
                <div className="container">
                    <Test testType={stage}/>
                    <Div><button className="btn" onClick={(e) => setTestComplete(true)}>Submit</button></Div>
                </div>
            :
                <div>
                    <Card><Results /></Card>
                    <Div>
                        {/** set stage onClick based on current stage */}
                        <button className="btn" 
                                onClick={ stage==='pretest'? 
                                            (e) => setStage("simulation") 
                                            : stage === 'simulation' ?
                                                (e) => setStage("posttest")
                                                :
                                            (e) => setStage("pretest") }>
                            {/** set button text based on current stage */}
                            { stage === 'pretest'? 'Begin Simulation': 'Finish' }
                        </button>
                    </Div>
                </div>
    );
};

export default PrePostTest;