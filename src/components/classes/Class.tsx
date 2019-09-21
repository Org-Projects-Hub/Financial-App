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
    z-index: 3;

    &:hover {
        box-shadow: 5px 5px 15px 1px gray;
    }
`;

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

const ClassInfo = styled.p`
    z-index: -1;
`;

const Class = (props: any) => {

    const [isArchived, setIsArchived] = React.useState(false); /* Replace this with props.classObj.isArchived whenever it's added */

    return(
        <Wrapper id="wrap">

            {/* No matter what the account type, we want anything that is rendered to be centered */}
            <div id="other div" style={{width: '70%', display: 'inline-block', borderRadius: '1em', textAlign: 'center'}}>

            {   
                // if the user is a teacher display this class information
                props.userObj.account === 'teacher' ?  

                isArchived ? /* Replace this with props.classObj.isArchived whenever it's added */
                
                    <ArchivedClassDiv>
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
                    </ArchivedClassDiv>

                    :

                    <Link style={{color: 'black'}} to={`/classDashboard/${props.classObj.code}`}>
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

                <ClassDiv style={{cursor: "initial"}}>

                    <GridColItem colStart="2" colEnd="5" align="center" style={{fontSize: "150%"}}>
                        <p>{props.classObj.className}</p>
                    </GridColItem>

                    {/* If the class/simulation is not completed display the Start button, if it is display 'Completed' instead */}
                    { false ? // isCompleted ? :

                        <GridColItem colStart="4" colEnd="6" align="right" style={{gridRowStart: "2", fontSize: "120%"}}>
                            <div className="ta-right txt-italic">Completed</div>
                        </GridColItem>

                        :
                        true ? //isVerified ? :
                        
                        <GridColItem colStart="4" colEnd="6" align="right" style={{gridRowStart: "2", fontSize: "120%"}}>
                            <div className="ta-right txt-italic">waiting on approval . . .</div>
                        </GridColItem>

                        :

                        <StartButton>
                            <Link to={'/Simulation'}>
                                <div style={{cursor: "pointer"}} className="ta-center">Start</div>
                            </Link> 
                        </StartButton>
                    }
                </ClassDiv>
                    
                   /*  // if the user is neither a teacher or student display this class information
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

                    </ClassDiv> */
            }  
            </div>
        </Wrapper>
    );
};

export default Class;