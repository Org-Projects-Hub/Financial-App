import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {GridColItem, Button} from '../../style/styled';



const Wrapper = styled.div`
    margin: 1em 0;
    width: 80%;
    text-align: center;
    display: inline-block;
`;


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
    background-color: #36c459;
`;


const Class = (props: any) => {


    return(
        <Wrapper id="wrap">

            {/* No matter what the account type, we want anything that is rendered to be centered */}
            <div id="other div" style={{width: '70%', display: 'inline-block', borderRadius: '1em', textAlign: 'center'}}>

            {   
                // if the user is a teacher display this class information
                props.userObj.account === 'teacher' ?  

                <Link style={{color: 'black', backgroundColor: "black"}} to={`/classDashboard/${props.classObj.code}`}>
                    <ClassDiv>

                        <GridColItem colStart="1" colEnd="4" align="left" style={{gridRowStart: "1"}}>
                            <p>{props.classObj.className}</p>
                            <p>Requests: {props.classObj.signedUp /* props.classObj.UnVerified */}</p>
                            <p>Registered: {props.classObj.verified}</p>
                            <p>Completed: {props.classObj.completed}</p>
                        </GridColItem>

                        <GridColItem colStart="3" colEnd="6" align="right" style={{gridRowStart: "1"}}>
                            <p>Code: {props.classObj.code}</p>
                        </GridColItem>

                        <GridColItem colStart="1" colEnd="6" align="right" className="txt-italic txt-green">
                            <p>This class will archive on ####{/* props.classObj.archiveOn */}</p>
                        </GridColItem>

                    </ClassDiv>
                </Link> 

                :

                // if the user is a student display this class information
                props.userObj.account === 'student' ? 

                    <ClassDiv style={{cursor: "initial"}}>

                        <GridColItem colStart="2" colEnd="5" align="center" style={{fontSize: "150%"}}>
                            <p>{props.classObj.className}</p>
                        </GridColItem>

                        {/* If the class/simulation is not completed display the Start button, if it is display 'Completed' instead */}
                        {/* props.classObj.completed.indexOf(props.userObj.username) */ -1 === -1 ? 

                            <StartButton>
                                <Link to={'/Simulation'}>
                                    <div style={{cursor: "pointer"}} className="ta-center">Start</div>
                                </Link> 
                            </StartButton>

                            :

                            <GridColItem colStart="4" colEnd="6" align="right" style={{gridRowStart: "2", fontSize: "125%"}}>
                                <div className="ta-right txt-italic">Completed</div>
                            </GridColItem>
                        }
                    </ClassDiv>

                    :
                    
                    // if the user is neither a teacher or student display this class information
                    <ClassDiv style={{cursor: "initial"}}>

                        <GridColItem colStart="2" colEnd="5" align="center" style={{fontSize: "150%"}}>
                            <p>Simulation #{props.num}</p>
                        </GridColItem>

                        <GridColItem colStart="1" colEnd="4" align="left">
                            <p>Pre-Test: #/#</p>
                            <p>Simulation: #/#</p>
                            <p>Post-Test: #/#</p>
                        </GridColItem>

                        <GridColItem colStart="1" colEnd="6" align="right" className="txt-italic txt-green">
                            <p>This simulation was completed on</p>
                        </GridColItem>

                    </ClassDiv>
            }  
            </div>
        </Wrapper>

    );
};

export default Class;