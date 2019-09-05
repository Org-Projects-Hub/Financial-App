import React, {useState} from 'react';
import styled from 'styled-components';
import useInterval from '@use-it/interval';

import './simulation.css';


/**
 * Wheel.tsx
 *
 * @author: Nicholas Salter
 * @desc: Called by [SimulationStart]. Creates a spinning wheel where users can randomly select parts of their "life"
 * @param {string[]}   input           The data to be randomly selected 
 * @param {string}     stage           The stage of the simulation (Declared in [SimulationStart.tsx]) should only be job or education
 * @param {Function}   setChoice       Sets the corresponding variable in [SimulationStart.tsx], used for passing 
 *                                     the selection chosen in Wheel.tsx
 * @param {Function}   setStage        Changes the simulation stage (Declared in [SimulationStart.tsx]); how users progress 
 *                                     through the simulation
 * @return TSX to be rendered.
 */

const SpinText = styled.div`
font-size:2vh;
font-weight: bolder;

`;

const WheelButton = styled.button`
margin-right:-4vw;
margin-left:5vw;
`;


const Wheel = ({ input, stage, setChoice, setStage}: any) => {
    
    
    const [index, setIndex] = useState(-1); //index of the props array, used for moving through the data (set to -1 to prevent errors)
    const [selection, setSelect] = useState(null); //the users selection, the data the user selects
    let [spinning, setSpin] = useState(false); //switches views to allow the data to change
    const [spinTime, setTime] = useState(100); //selects how fast you want the data to change
    const [color, setColor] = useState('rgb(0,0,0)') //TODO: used for changing the color of the input
    const [text, setText] = useState(null); //hook for changing the text displayed after the spinner

    
    useInterval(() => {timer()}, spinTime) //setting the interval to run the timer() function
    

    /*TODO change color randomly every input */
    function colorPick(){
        let r = Math.floor(Math.random() * 200);
        let g = Math.floor(Math.random() * 200);
        let b = Math.floor(Math.random() * 200);

        setColor('rgb('+r+', '+g+', '+b+''+')');
    }


    /** Timer changes the data once spin = true */
    function timer():void{
        
        //Prevents the data from continuously changing after the user hits stop
        if(spinning){

            colorPick() /**TODO part of the random color changer */

            //checks if the current index is still in the array parameters
            if(index < input.length){
                /*go to next index (first iteration index= -1 so it increments  index = 0)
                 prevents first index from displaying twice*/
                setIndex(index + 1);

                //sets selection to the current index
                setSelect(input[index]);

                //error checking
                console.log("HERE: " + input[index]);
            }
            //if the index increments outside of the array
            else{

                //go back to the first index
                setIndex(0);

                //display the second index, because of the  displaying twice error
                setSelect(input[1])
            }
        }

    } 
    /** Function Next is used for switching the stage, it is how the user progresses through the simulation*/
    function next(){
       
        //switch to job if the user just selected their education
        if(stage === "education"){
            setStage("job");
        }

        //switch to the booths if the user selected their job
        else if(stage === "job"){
            setStage("boothSelect");
        }
        
    }

    //Changes the spin function, used by the wheel buttons
    function change(){

        //If the wheel is currently spinning
        if(spinning === true){
            
            setSpin(false); //stop the spinner
            setChoice(selection); //setChoice to selection (declared in [SimulationStart.tsx])
            
            //Declare the ending text based on the current simStage
            if(stage === "education"){
                setText("You graduated with your " + selection + "!");
            }
            else if(stage === "job"){
                setText("You were hired as a " + selection + "!");
            }
        }

        else{

            /**TODO: fix error where if user starts spinner and immediately stops it, their education = null */

            //attempting to set selection to a random interval at the beginning to prevent above error, does not work
            let rand = Math.floor(Math.random() * (input.length - 1))
            setSelect(input[rand]);
            
            
            setSpin(true); //starting spinner
            
            //PART OF TODO (Always returns null)
            console.log("FIRST Select: " + selection);
            console.log("rand num: " + rand)
        }
    }


    //**TODO RANDOM COLOR GENERATOR, DOES NOT WORK*/
    const Words = styled.div`
    `;
    
    return(

        //If the wheel is currently spinning (the data is changing)
        spinning ?
        
            <div>
                {/**Display the selection*/}
                
                <a className="red-light-glow"></a>
                <a className="green-light-glow"></a>
                <a className="blue-light-glow"></a>

                <div className="wheel">
                    <SpinText className="wheel-animate">
                    {selection}
                    </SpinText>
                </div>

                <div>
                    {/**Button used to stop the data from spinning */}
                    <WheelButton className="spin-button" onClick={()=>change()}>STOP</WheelButton>
                    <button className="button-slide spin-button">SPIN</button>
                </div>
            </div>

        : //Else if the wheel is not spinning
            /** Prevents the user from spinning the wheel twice */
            selection === null ?
                <div>
                    <a className="red-light"></a>
                    <a className="green-light"></a>
                    <a className="blue-light"></a>
                    <div className="wheel">
                        {/**Stage is where the user is in the simulation (will either be job or education) */}
                        Click Spin to choose your {stage}! <br/>

                    </div>

                    {/**Button to start the wheel*/}
                    <div>
                        <WheelButton className="spin-button">STOP</WheelButton>
                        <button className="button-slide spin-button" onClick={()=>change()}>SPIN</button>
                    </div>

                </div>
                : // if the user has made their selection

                <div>
                    {/**Display the selection (Blank if wheel hasnt spun, if it has it displays what they chose) */}
                    {text}
                    <br/>
                    <button className="btn" onClick={()=>next()}>NEXT</button>

                </div>
        
    );
}

export default Wheel;