import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { classes } from '../fakeJson';




const Wrapper = styled.div`
    margin: 2em 0;
`;


const ClassDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin: 0px 20%;
    padding: 2%;
    max-width: 600px;
    background: white;
    cursor: pointer;
    border: 2px solid blue;
    border-radius: 1em;
    overflow: hidden;

    &:hover {
        box-shadow: 5px 5px 25px 1px gray;
    }
`;

const Item1 = styled.div`
    text-align: left;
    grid-column-start: 1;
    grid-column-end: 3;

`;

const Item2 = styled.div`
    text-align: right;
    grid-column-start: 3;
    grid-column-end: 5;
`;

const Item3 = styled.div`
    text-align: right;
    grid-column-start: 3;
    grid-column-end: 5;
    font-style: italic;
    color: green;
`;





const Class = (props: any) => {

    return(
        <Wrapper>
            {props.accountType === 'teacher' ?  
                <Link to={`/classDashboard/${props.classObj.id}`}>
                    <ClassDiv>
                        <Item1>
                            <p>{props.classObj.className}</p>
                            <p>Requests: {props.classObj.requests.length - 1}</p>
                            <p>Registered: {props.classObj.registered.length - 1}</p>
                            <p>Completed: {props.classObj.completed.length - 1}</p>
                        </Item1>

                        <Item2><p>Code: {props.classObj.classCode}</p></Item2>
                        <Item3><p>This class will archive on {props.classObj.archiveOn}</p></Item3>
                    </ClassDiv>
                </Link> 

                : 
                
                <ClassDiv>
                    <p>{props.classObj.className}</p>
                    <Link to={'/Simulation'}>
                        <button>Start</button>
                    </Link>
                </ClassDiv>

                }  
        </Wrapper>
    );
};

export default Class;