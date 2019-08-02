import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



const Wrapper = styled.div`
    margin: 2em 0;
    text-align: center;
`;


const ClassDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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
    text-align: right;
    grid-row-start: 2;
    grid-column-start: 4;
    grid-column-end: 6;
    font-size: 125%;
`;

const Item6 = styled(Item5) `
            grid-column-start: 3;
            grid-column-end: 4;
            text-align: center;
            border-radius: 0.5em;
            color: white;
            background-color: #36c459;
            transition: transform 750ms;

            &:hover {
                transform: scale(1.2);
            }
        `;





const Class = (props: any) => {

    return(
        <Wrapper>
            {
                props.userObj.accountType === 'teacher' ?  

                <div style={{width: '58%', display: 'inline-block', borderRadius: '1em'}}>
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
                </div>
                :
                props.userObj.accountType === 'student' ? 
                    <ClassDiv>
                        <Item4><p>{props.classObj.className}</p></Item4>
                        {props.classObj.completed.indexOf(props.userObj.username) === -1 ? 
                            <Item6>
                                <Link to={'/Simulation'}>
                                    <div style={{textAlign: 'center'}}>Start</div>
                                </Link> 
                            </Item6>
                            :
                            <Item5><div style={{textAlign: 'right', fontStyle: 'italic'}}>Completed</div></Item5>
                        }
                    </ClassDiv>
                    :
                    <ClassDiv>
                        <p>{props.key}</p>
                    </ClassDiv>

            }  
        </Wrapper>

        
    );
};

export default Class;