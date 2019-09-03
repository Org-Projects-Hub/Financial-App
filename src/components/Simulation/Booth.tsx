import React, {useState} from 'react';
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



    //Reading through the SimJSON booth data to find the currentbooth
    for(var i = 0; i < booths.length; i++){

        if(booths[i].category === currentBooth){ //when currentbooth is found
            

            var booth = booths[i] //used for readability

            var array = new Array(); //creating an array
            

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
                //setOptionsArray([... optionsArray, x])


            }

            i = booths.length + 1; // break statement
        }
        else{
            console.log("ERROR"); //error checking
        }
    }


    

    return(

        <div>
            The current booth is {currentBooth}

            {/*optionsArray.map((optionsArray:any, i:any)=> //throws an error for some reason
            
            <li key={i}>
                {optionsArray.name}
            </li>
            
            )*/}
        </div>
        
    )
}

export default Booth;