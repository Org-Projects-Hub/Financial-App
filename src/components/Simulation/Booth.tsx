import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {booths} from './SimJSON'

interface boothOptions{

    name: string,
    desc: string[],
    costbreakdown: string[],
    price: number

}


const Booth = ( {setSimStage, currentBooth, data}:any) => {

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

    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        setOptionsArray(array);
      }, []);


      console.log(optionsArray);

    

    return(

        <div>
            The current booth is <a onClick={()=>setSimStage("education")}>{currentBooth}</a>

            {optionsArray.map((optionsArray:any, i:any)=> //throws an error for some reason
            
            <li key={i}>
                {optionsArray.name}
            </li>
            
            )}
        </div>
        
    )
}

export default Booth;