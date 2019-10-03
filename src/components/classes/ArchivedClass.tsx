import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {GridColItem} from '../../style/styled';

const ArchivedClassDiv = styled.div`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 2%;
    background: white;
    border: 2px solid black;
    border-radius: 1em;

    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M1 0 L0 1 L99 100 L100 99' fill='rgba(255, 0, 0, 0.7)' /><path d='M0 99 L99 0 L100 1 L1 100' fill='rgba(255, 0, 0, 0.7)' /></svg>");
    background-repeat:no-repeat;
    background-position:center center;
    background-size: 100% 100%, auto;
    background-color: rgba(10, 10, 10, 0.1);
`;

const ArchivedClass = (props:any) => {
   return (

    <ArchivedClassDiv>
        <GridColItem colStart="1" colEnd="4" align="left" style={{gridRowStart: "1"}}>
            <p>{props.classProps.classObj.className}</p>
            <p>Requests: {props.classProps.classObj.signedUp /* props.classProps.classObj.UnVerified */}</p>
            <p>Registered: {props.classProps.classObj.verified}</p>
            <p>Completed: {props.classProps.classObj.completed}</p>
        </GridColItem>

        <GridColItem colStart="3" colEnd="6" align="right" style={{gridRowStart: "1"}}>
            <p>Code: {props.classProps.classObj.code}</p>
        </GridColItem>

        <GridColItem colStart="1" colEnd="6" align="right" className="txt-italic txt-green">
            <p>This class will archive on ####{/* props.classProps.classObj.archiveOn */}</p>
        </GridColItem>
    </ArchivedClassDiv>

    );
}

export default ArchivedClass;