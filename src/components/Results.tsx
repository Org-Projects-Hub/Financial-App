import React from 'react';
import styled from 'styled-components';
import { Container } from '../style/preposttest';

/**
 * Results.tsx
 *
 * @desc: Called by [Pretest]/[Posttest]. Displays results of test.
 * @return TSX to be rendered.
 */

const Div = styled.div`
    padding: 10px;
`;

const Results = () => {
    return(
        <Container>
            <Div>
                <div style={{fontSize: 20, padding: "5px", fontWeight: "bold" }}>Proficient</div>
                <ul>
                    <li>This is good</li>
                    <li>This is good</li>
                    <li>This is good</li>
                </ul>
            </Div>
            <Div>
                <div style={{fontSize: 20, padding: "5px", fontWeight: "bold" }}>Needs Improvement</div>
                <ul>
                    <li>This needs improvement</li>
                    <li>This needs improvement</li>
                    <li>This needs improvement</li>
                </ul>
            </Div>
        </Container>
    );
};

export default Results;