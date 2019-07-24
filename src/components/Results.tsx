import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const Div = styled.div`
    padding: 10px;
`;

const Results = () => {
    return(
        <Wrapper>
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
        </Wrapper>
    );
};

export default Results;