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

/**
 * SimulationStart.tsx
 * 
 * @author: Nicholas Salter
 * @desc: Called by [Simulation]. Switches between the different stages of the simulation
 * @param {string}   stage        The current stage of the entire simulation (preTest, simulation, postTest)
 * @param {Function} setStage     Sets the overal stage of the simulation (preTest, simulation, postTest)
 * @return TSX to be rendered.
 */
const SimulationStart = ({stage, setStage}:any) => {

    const [edlevel, setEd] = useState(null); //Sets the users education level (Used in Wheel.tsx)
    const [job, setJob] = useState(null); //Sets the users job (Used in Wheel.tsx)
    const [simStage, setSimStage] = useState(null) //Used for switching between the stages of the simulation

    const { education } = data; //string array of the education options

    const { reqed } = data.jobs //TODO: get the array of jobs based on the users education

    //Setting the simStage to education at the begging of the simuatlion 
    if(stage==="simulation" && simStage === null){ 
        setSimStage("education");
    }

    console.log("STAGE: " + simStage);

return(
        <Wrapper>

            {/**Displaying the spinner based on which stage the user is on */}
            <WheelPlace>
                {simStage === "education" && <Wheel input={education} stage={simStage} setChoice={setEd} setStage={setSimStage}/>}
                {simStage === "job" && <Wheel input={education} stage={simStage} setChoice={setJob} setStage={setSimStage}/>}
            </WheelPlace>
            
            {/**Display the button to take the PostTest when the user has reached the end of the simulation */}
            <Button>
                {simStage === "postTest" && <button className="btn" onClick={(e)=> setStage('posttest')}>TO POSTTEST</button>}
            </Button>
            
        </Wrapper>
    )

}

export default SimulationStart;