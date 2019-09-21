import React, {useState, useEffect} from 'react';
import Wheel from './Wheel';
import styled from 'styled-components';
import data from '../../json/Simulation.json'; 
import BoothSelect from './BoothSelect'
import Booth from './Booth'
import { SelectInput } from '..';


const Wrapper = styled.div`
display: grid;
min-height: 100vh;
grid-template-columns: 1fr;
place-items: center;`;

const UserInfo = styled.div`
backgorund: grey;
grid-row: 2 / span 1;
grid-column: 1 / span 1;`;

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


    
    interface career
    {
        position: String;
        annualSalary: number;
        hourlyRate: number; 
        federalTax: number;
        socialSecurity: number;
        medicare: number;
        stateTax: number;
        education: string;
    }

    const [edlevel, setEd] = useState(null); //Sets the users education level (Used in Wheel.tsx)
    const [job, setJob] = useState(null); //Sets the users job (Used in Wheel.tsx)
    const [career, setCareer] = useState(null);
    
    const [simStage, setSimStage] = useState(null) //Used for switching between the stages of the simulation
    const [currentBooth, setCurrentBooth] = useState(null)

    const { education} = data; //string array of the education options

    const [currentIncome, setIncome] = useState(null);

    const [jobOptions, setJobOptions] = useState(null);

    //Setting the simStage to education at the begging of the simuatlion 
    if(stage==="simulation" && simStage === null)setSimStage("job"); //CHANGED FOR DEBUGGING, SET TO {"education"} TO RUN PROPERLY


    const {jobs} = data
    let x  = new Array();
    let counter = 0;

    if( job == null || currentIncome == null){
        for(let i = 0; i < jobs.length; i++){
            for(let j = 0; j < jobs[i].occupations.length;j++){
                if(job == null && currentIncome == null){
                    x[counter] = jobs[i].occupations[j].position;
                    counter++;
                }
                else if(job != null && currentIncome == null)
                {
                    if(jobs[i].occupations[j].position == job){                
                        var y = jobs[i].occupations[j].grossmonthly;
                        setIncome(y);

                        var userCareer: career = {
                            position: job,
                            annualSalary: y * 12,
                            hourlyRate: y / 160,
                            federalTax: y * .15,
                            socialSecurity: y * .06,
                            medicare: y * .014,
                            stateTax: y * .033,
                            education: jobs[i].reqed
                        }         

                        setCareer(userCareer);
                        
                    }
                }
            }
        }
    }

    useEffect(() => { setJobOptions(x);}, []);

return(
        <Wrapper>
            {/**Displaying the spinner based on which stage the user is on */}

                {simStage === "education" && <Wheel input={education} stage={simStage} setChoice={setEd} setStage={setSimStage}/>}
                {simStage === "job" ?
                <>
                    <Wheel input={jobOptions} stage={simStage} setChoice={setJob} setStage={setSimStage} career={career}/>
                </>
                :
                    <></>
                }        
                {simStage == "boothSelect" ?
                    <div>
                        <UserInfo>
                            Remaining Income: {currentIncome}
                        </UserInfo>
                        <BoothSelect setSimStage={setSimStage} setCurrentBooth={setCurrentBooth}/>
                    </div>
                :
                <></>
                }          
                {simStage == "booth" ?  
                    <div>
                        <Booth setSimStage={setSimStage} currentBooth={currentBooth} data={data} 
                                currentIncome={currentIncome} setIncome={setIncome}/>                
                        <UserInfo>
                            Remaining Income: {currentIncome}
                        </UserInfo>
                    </div>
                :
                    <></>
                }        
            {/**Display the button to take the PostTest when the user has reached the end of the simulation */}
                {simStage === "postTest" && <button className="btn" onClick={(e)=> setStage('posttest')}>TO POSTTEST</button>}        
        </Wrapper>
    )
}
export default SimulationStart;