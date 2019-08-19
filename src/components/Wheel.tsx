import React, {useState} from 'react';
import styled from 'styled-components';
import data from './Simulation.json'; 
import useInterval from '@use-it/interval';

import '../style/simulation.css'

/**"education":[
        {"id":0,"edulevel":"High School Diploma"},
        {"id":1,"edulevel":"Bachelors Degree"},
        {"id":2,"edulevel":"Masters Degree"},
        {"id":3,"edulevel":"GED/HSET"},
        {"id":4,"edulevel":"Asscoiates Degree"}], */


const Wheel = () => {
    
    
    const [index, setIndex] = useState(-1); //index of the props array, used for moving through the data (set to -1 to prevent errors)
    const [selection, setSelect] = useState(null); //the users selection, the data the user selects
    let [spinning, setSpin] = useState(false); //switches views to allow the data to change
    const [spinTime, setTime] = useState(100); //selects how fast you want the data to change
    const [color, setColor] = useState('rgb(0,0,0)') //used for changing the color of the input

    
    useInterval(() => {timer()}, spinTime)


    //saving the JSON data finto props
    const props = data.education;

    /*TODO change color randomly every input */
    function colorPick(){
        let r = Math.floor(Math.random() * 200);
        let g = Math.floor(Math.random() * 200);
        let b = Math.floor(Math.random() * 200);

        setColor('rgb('+r+', '+g+', '+b+''+')');
        console.log(color);
    }


    /** Timer changes the data once spin = true */
    function timer():void{
        
        //Prevents the data from continuously changing after the user hits stop
        if(spinning){

            colorPick() /**TODO part of the random color changer */

            //checks if the current index is still in the array parameters
            if(index < props.length){
                /*go to next index (first iteration index= -1 so it increments  index = 0)
                 prevents first index from displaying twice*/
                setIndex(index + 1);

                //sets selection to the current index
                setSelect(props[index]);

                //error checking
                console.log("HERE: " + props[index]);
            }
            //if the index increments outside of the array
            else{

                //go back to the first index
                setIndex(0);

                //displa the second index, because of the  displaying twice error
                setSelect(props[1])
                console.log("INDEX: " + index + ' ' + props[index]);
            }
        }

    } 

    //Changes the spin function, used by the wheel buttons
    function change(){

        if(spinning === true){
            setSpin(false);
        }

        else{

            /**TODO: fix error where if user starts spinner and immediately stops it, their education = null */

            //attempting to set selection to a random interval at the beginning to prevent above error, does not work
            let rand = Math.floor(Math.random() * (props.length - 1))
            setSelect(props[rand]);
            
            
            setSpin(true); //starting spinner
    
            console.log("FIRST Select: " + selection)
            console.log("rand num: " + rand)
        }
    }


    //**PART OF RANDOM COLOR GENERATOR, DOES NOT WORK*/
    const Words = styled.div`
    text-size: 115%;
    color: ${props => props.color};
    `;
    
    return(

        //If the wheel is currently spinning (the data is changing)
        spinning ?
        
            <div>
                {/**Display the selection*/}
                <Words>
                    <div className="wheel-animate">
                    {selection}
                    </div>
                </Words>

                <div>
                    {/**Button used to stop the data from spinning */}
                    <button className="btn" onClick={()=>change()}>STOP</button>
                </div>
            </div>

        : //Else if the wheel is not spinning
            /** Prevents the user from spinning the wheel twice */
            selection === null ?
                <div>
                <div>
                    {/**Display the selection (Blank if wheel hasnt spun, if it has it displays what they chose) */}
                    {selection}
                </div>

                {/**Button to start the wheel*/}
                <button className="btn" onClick={()=>change()}>SPIN</button>

                </div>

                : // if the user has made their selection

                <div>
                    {/**Display the selection (Blank if wheel hasnt spun, if it has it displays what they chose) */}
                    You graduated with your {selection} !
                </div>
        
    );
}

export default Wheel;