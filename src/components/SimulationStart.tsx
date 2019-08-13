import React from 'react';
import Wheel from './Wheel';
import styled from 'styled-components';
import * as data from './Simulation.json'; 

const SimulationStart = ({stage, setStage}:any) => {
    
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
    return(
        <Wrapper>

            <WheelPlace>
                <Wheel/>
            </WheelPlace>

            <Button>
                <button className="btn" onClick={(e)=> setStage('posttest')}>TO POSTTEST</button>
            </Button>
            
        </Wrapper>
    )
}

export default SimulationStart;