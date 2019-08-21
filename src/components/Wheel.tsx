import React, {useState} from 'react';
import styled from 'styled-components';
import useInterval from '@use-it/interval';

import '../style/simulation.css';


/**
 * Wheel.tsx
 *
 * @desc: Called by [SimulationStart]. Switches between the different stages of the simulation
 * @param {string}   stage             The current stage of the entire simulation (preTest, simulation, postTest)
 * @param {Function} setStage          Sets the overal stage of the simulation (preTest, simulation, postTest)
 * @return TSX to be rendered.
 */
const Wheel = ({ input, stage, setChoice, setStage}: any) => {
    
    
    const [index, setIndex] = useState(-1); //index of the props array, used for moving through the data (set to -1 to prevent errors)
    const [selection, setSelect] = useState(null); //the users selection, the data the user selects
    let [spinning, setSpin] = useState(false); //switches views to allow the data to change
    const [spinTime, setTime] = useState(100); //selects how fast you want the data to change
    const [color, setColor] = useState('rgb(0,0,0)') //used for changing the color of the input
    const [text, setText] = useState(null);

    console.log("INPUT: " + input);
    
    useInterval(() => {timer()}, spinTime)
    

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

                //displa the second index, because of the  displaying twice error
                setSelect(input[1])
                console.log("INDEX: " + index + ' ' + input[index]);
            }
        }

    } 
    /** Function Next is used for switching the stage, it is how the user progresses through the simulation*/
    function next(){
        if(stage === "education"){
            setStage("job");
        }
        else if(stage === "job"){
            setStage("booths");
        }
        
    }

    //Changes the spin function, used by the wheel buttons
    function change(){

        if(spinning === true){
            setSpin(false);
            setChoice(selection);
            
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
                <div className="wheel">
                    <div className="wheel-animate">
                    {selection}
                    </div>
                </div>

                <div>
                    {/**Button used to stop the data from spinning */}
                    <button className="btn" onClick={()=>change()}>STOP</button>
                </div>
            </div>

        : //Else if the wheel is not spinning
            /** Prevents the user from spinning the wheel twice */
            selection === null ?
                <div className="wheel">
                    {/**Stage is where the user is in the simulation (will either be job or education) */}
                    Click Spin to choose your {stage}! <br/>

                {/**Button to start the wheel*/}
                <button className="btn" onClick={()=>change()}>SPIN</button>

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