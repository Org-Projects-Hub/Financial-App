import React, { useState } from 'react';
import Test from './Test';
import Results from './Results';
import styled from 'styled-components';
import {Card, GridRow} from '../style/styled';

const Div = styled.div`
    text-align: center;
    padding: 15px;
`;

const Posttest = ({setStage}: any) => {
    const [begin, setBegin] = useState(false);
    const [testComplete, setTestComplete] = useState(false);
  
    return (
        !begin?
            <GridRow rows="2">
                <button className="btn" onClick={(e) => setBegin(true)}>Begin Posttest</button>
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
                    <Div><button className="btn" /**onClick={(e) => setStage("posttest")}*/>Finish</button></Div>
                </div>
    );
}

export default Posttest;