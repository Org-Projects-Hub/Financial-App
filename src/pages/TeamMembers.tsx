import React from 'react';
import styled from 'styled-components';
import { TeamMember } from '../components';
import {employees} from '../fakeJson';
import {Wrapper} from '../style/styled';

const color = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

const Div = styled.div`
    margin: 1em;
    width: 100%;
    max-width: 900px;
    text-align: center;
    background: white;
    cursor: pointer;
    border-radius: 1em;
    overflow: hidden;
    &:hover {
        box-shadow: 5px 5px 25px 1px black;
    }
`;

const TeamMembers = ({userName}:{userName: string}) => {
    return (
        <Wrapper color={color} style = {{display: "flex",
                                         justifyContent: "center",
                                         flexWrap: "wrap"}}>
            {employees.map((emp: object, index: number)=>
                <Div key={index} id={employees[index].username}>
                        <TeamMember {...emp} />
                </Div>
            )}
        </Wrapper>
    );
}

export default TeamMembers;
