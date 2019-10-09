import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {GridColItem, Button} from '../../style/styled';


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

const StartButton = styled(Button) `
    position: relative;
    top: 12%;
    min-height: 35px;
    width: 5%;
    grid-column-start: 3;
    grid-column-end: 4;
    color: white;
    background-color: #36c459;`;



const StudentClass = (props: any) => {

    let { classObj } = props.classProps;
    let { className } = classObj.c_id;
    let { verified } = classObj;

    return(

        <ClassDiv style={{cursor: "initial"}}>

                    <GridColItem colStart="2" colEnd="5" align="center" style={{fontSize: "150%"}}>
                        <p>{className}</p>
                    </GridColItem>

                    {/* If the class/simulation is not completed display the Start button, if it is display 'Completed' instead */}
                    { false ? // isCompleted ? :

                        <GridColItem colStart="4" colEnd="6" align="right" style={{gridRowStart: "2", fontSize: "120%"}}>
                            <div className="ta-right txt-italic">Completed</div>
                        </GridColItem>

                        :

                        verified ? //isVerified ? :
                    
                        <StartButton>
                            <Link to={'/Simulation'}>
                                <div style={{cursor: "pointer"}} className="ta-center">Start</div>
                            </Link> 
                        </StartButton> 

                        :
                         
                        <GridColItem colStart="4" colEnd="6" align="right" style={{gridRowStart: "2", fontSize: "120%"}}>
                            <div className="ta-right txt-italic">waiting on approval . . .</div>
                        </GridColItem>
                    }
                </ClassDiv>

    );
}

export default StudentClass;