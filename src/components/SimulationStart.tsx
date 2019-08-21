import React, {useState} from 'react';
import Wheel from './Wheel';
import styled from 'styled-components';
import data from './Simulation.json'; 


const Wrapper = styled.div`
display: grid;
grid-template-rows: auto 50vh 20vh auto;
place-items: center;
justify-items: center;
`;

const WheelPlace = styled.div`
grid-row: 2 / span 1;
`;

const Button = styled.div`
grid-row: 3 / span 1;
`;

const SimulationStart = ({stage, setStage}:any) => {

const { education } = data;

    
return(
        <Wrapper>
            <WheelPlace>
               <Wheel education={education} stage={stage} />
            </WheelPlace>

            <Button>
                <button className="btn" onClick={(e)=> setStage('posttest')}>TO POSTTEST</button>
            </Button>
            
        </Wrapper>
    )
}

export default SimulationStart;