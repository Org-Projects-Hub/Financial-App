import React, { useState } from 'react';
import Test from './Test';
import Results from './Results';
import styled from 'styled-components';
import { NavButton } from '../../../style/preposttest';
import {Card, GridRow, Grid, GridColItem} from '../../../style/styled';
import backgroundimg from "../../../assets/select.svg";

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

//Contains the entire Startpage, sets the gridarea and the background
const Container = styled.div`
  background-image : url(${backgroundimg});
  background-repeat:no-repeat;
  background-position: center;

`;

const Div = styled.div`
    text-align: center;
    padding: 15px;
`;

const SimIntro: string = 'Simulation Introduction'; 
const CompleteSim: string = 'Simulation Complete';

const PrePostTest = ({stage, setStage}: any):JSX.Element=> {
    const [begin, setBegin] = useState(false);
    const [testComplete, setTestComplete] = useState(false);
    
    const CompleteTest = () => {
        setTestComplete(!testComplete);
    }

    return (
        /** If begin is false, SimulationIntro and/or begin button will be returned. */
        !begin?
            /** Load with SimInt if stage is "pretest" */
            stage === 'pretest'?
            <Container className="flex-center">
                <GridRow rows="2">
                    <Card>{SimIntro}</Card>
                    <NavButton onClick={(e) => setBegin(true)}>BEGIN {stage.toUpperCase()}</NavButton>
                    <button onClick={()=>setStage("simulation")}>To Sim</button>
                </GridRow>
            </Container>

        
                //: stage === 'simulation' ? <Wheel/>
            : 
            <div className="flex-center">
                <GridRow rows="2">
                    <Card>{CompleteSim}</Card>
                    <NavButton onClick={(e) => setBegin(true)}>BEGIN {stage.toUpperCase()}</NavButton>
                </GridRow>
            </div>
        :
            /** If testComplete is false, [Test] component will be rendered, displaying questions to be answered. Else, results */
            !testComplete?
                <div className="flex-center">
                    <Test testType={stage} CompleteTest={CompleteTest} />
                </div>
            :
                <div  className="flex-center">
                    <Card ><Results /></Card>
                    <Div>
                        {/** set stage onClick based on current stage */}
                        <NavButton 
                                onClick={ stage==='pretest'? 
                                            (e) => setStage("simulation") 
                                            :                                              
                                            (e) => setStage("posttest") }>
                            {/** set button text based on current stage */}
                            { stage === 'pretest'? 'BEGIN SIMULATION': 'FINISH' }
                        </NavButton>
                    </Div>
                </div>
    );
};

export default PrePostTest;