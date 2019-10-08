import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {GridColItem} from '../../style/styled';

const ClassDiv = styled.div`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 2%;
    background: white;
    cursor: pointer;
    border: 2px solid blue;
    border-radius: 1em;
    transition: box-shadow 500ms;
    z-index: 3;

    &:hover {
        box-shadow: 5px 5px 15px 1px gray;
    }
`;


const TeacherClass = (props: any) => {

    let {className, unverified, verified, completed, code } = props.classProps.classObj.c_id;

    console.log(props.classProps);

    return( 
        <Link style={{color: 'black'}} to={`/classDashboard/${code}`}>
            <ClassDiv>
                <GridColItem colStart="1" colEnd="4" align="left" style={{gridRowStart: "1"}}>
                    <p>{className}</p>
                    <p>Requests: {unverified}</p>
                    <p>Registered: {verified}</p>
                    <p>Completed: {completed}</p>
                </GridColItem>

                <GridColItem colStart="3" colEnd="6" align="right" style={{gridRowStart: "1"}}>
                    <p>Code: {code}</p>
                </GridColItem>

                <GridColItem colStart="1" colEnd="6" align="right" className="txt-italic txt-green">
                    <p>This class will archive on ####{/* props.classObj.archiveOn */}</p>
                </GridColItem>

            </ClassDiv>
        </Link> 
    );
}


export default TeacherClass;