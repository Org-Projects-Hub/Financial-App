import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {booths} from './SimJSON'
import BoothOption from './BoothOption';

interface boothOptions{

    name: string,
    desc: string[],
    costbreakdown: string[],
    price: number

}


const Booth = ( {setSimStage, currentBooth, data, setIncome, currentIncome}:any) => {

    const [userOptions, setOptions]  = useState(null);
    const [optionsArray, setOptionsArray] = useState([]);

    console.log(booths[0].options[0].price);

    var array = new Array();

    //Reading through the SimJSON booth data to find the currentbooth
    for(var i = 0; i < booths.length; i++){

        if(booths[i].category === currentBooth){ //when currentbooth is found
            

            var booth = booths[i] //used for readability
            

            for(var j = 0; j < booth.options.length; j++){ //read through the options array of the current booth

                var boothOption = booth.options[j] //used for readability

                let x: boothOptions = {name: boothOption.name, 
                    desc: boothOption.desc, 
                    costbreakdown: boothOption.costbreakdown,
                    price: boothOption.price} 


                /**
                 * Save the current option data into the array (where array index = the boothOptions id)
                 * passing an object with the name, desc, costbreakdown, and price
                 */
                array[j] = x;

            }

            i = booths.length + 1; // break statement
        }
        else{
            console.log("ERROR"); //error checking
        }
    }


    /**Setting the javaSCript array to the options array react hook*/
    useEffect(() => { setOptionsArray(array);}, []);


    function setStage(){
        setSimStage("boothSelect")
    }
    return(

        <div>
            The CURRENT booth is <a onClick={()=>setSimStage("job")}>{currentBooth}</a>
            
            {optionsArray.map((optionsArray:any, i:any)=> 
                <BoothOption 
                    name={optionsArray.name} 
                    desc={optionsArray.desc} 
                    costBreakdown={optionsArray.costbreakdown}
                    price={optionsArray.price}
                    setIncome={setIncome}
                    currentIncome={currentIncome}
                    setSimStage={setStage}
                    key={i} />
            )}
        </div>
        
    )
}

export default Booth;