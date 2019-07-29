import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { classes } from '../fakeJson';




const Wrapper = styled.div`
    margin: 2em 0;
`;


const ClassDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0px 20%;
    padding: 2%;
    max-width: 600px;
    background: white;
    cursor: pointer;
    border: 2px solid blue;
    border-radius: 1em;
    overflow: hidden;
    transition: box-shadow 500ms;

    &:hover {
        box-shadow: 5px 5px 15px 1px gray;
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
    grid-column-end: 6;
`;

const Item3 = styled.div`
    text-align: right;
    grid-column-start: 3;
    grid-column-end: 6;
    font-style: italic;
    color: green;
`;

const Item4 = styled.div`
    font-size: 125%;
    text-align: center;
    grid-column-start: 2;
    grid-column-end: 5;
`;

const Item5 = styled.div`
    padding: 0;
    margin-top: 5%;
    text-align: center;
    grid-row-start: 2;
    grid-column-start: 3;
    grid-column-end: 4;
    border-radius: 0.5em;
    font-size: 125%;
    background-color: #36c459;
    color: white;
    transition: transform 750ms;

    &:hover {
        transform: scale(1.2);
    }
`;





const Class = (props: any) => {

    return(
        <Wrapper>
            {
                props.accountType === 'teacher' ?  

                <Link to={`/classDashboard/${props.classObj.id}`}>
                    <ClassDiv>
                        <Item1>
                            <p>{props.classObj.className}</p>
                            <p>Requests: {props.classObj.requests.indexOf('') != -1 ? 0 : props.classObj.requests.length}</p>
                            <p>Registered: {props.classObj.registered.indexOf('') != -1 ? 0 : props.classObj.registered.length}</p>
                            <p>Completed: {props.classObj.completed.indexOf('') != -1 ? 0 : props.classObj.completed.length}</p>
                        </Item1>

                        <Item2><p>Code: {props.classObj.classCode}</p></Item2>
                        <Item3><p>This class will archive on {props.classObj.archiveOn}</p></Item3>
                    </ClassDiv>
                </Link> 

                : 
                
                <ClassDiv>
                    <Item4><p>{props.classObj.className}</p></Item4>
                    <Item5>
                        <Link to={'/Simulation'}>
                            <div style={{textAlign: 'center'}}>Start</div>
                        </Link>
                    </Item5>
                </ClassDiv>

            }  
        </Wrapper>
    );
};

export default Class;