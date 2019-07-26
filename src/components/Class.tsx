import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { classes } from '../fakeJson';



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



const Class = (props: any) => {


    return(
        <div>
            {props.accountType === 'teacher' ?  
                <Div>
                    <Link to={`/classDashboard`}>
                        <p>{props.classObj.className}</p>
                        <p>Code: {props.classObj.classCode}</p>
                    </Link> 
                </Div>

                : 
                
                <Div>
                    <p>{props.classObj.className}</p>
                    <Link to={'/Simulation'}>
                        <button>Start</button>
                    </Link>
                </Div>
            }  
        </div>
    );
};

export default Class;