import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { booths } from '../../../json/SimJSON';
import BoothOption from './BoothOption';
import { Grid } from '../../../style/styled';
import PriceWarning from './PriceWarning';
interface boothOptions{
    name: string,
    desc: string[],
    costbreakdown: string[],
    price: number
}

const MyGrid = styled(Grid)`
grid-grap: 1em;
    @media(max-width: 770px){
        grid-template-columns: 1fr;
    }
`;

const Span = styled.div`
    padding-bottom: 5%;
`;

const Booth = ( {setSimStage, currentBooth, data, setIncome, currentIncome}:any):JSX.Element => {

    const [userOptions, setOptions]  = useState(null);
    const [optionsArray, setOptionsArray] = useState([]);
    const [text, setText] = useState(null)

    const [priceArray, setPriceArray] = useState([]);

    const [lowestprice, setLow] = useState(999999999999);    


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

                    if(lowestprice > boothOption.price)
                    {
                        setLow(boothOption.price);
                    }


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
            {currentIncome > lowestprice ? 
            <div>
            <Span>The CURRENT booth is <a onClick={()=>setSimStage("job")}>{currentBooth}</a></Span>
            < MyGrid cols={optionsArray.length == 1? "1" : "2"} >
            {optionsArray.map((optionsArray:any, i:any)=> 
                <BoothOption 
                    name={optionsArray.name} 
                    desc={optionsArray.desc} 
                    costBreakdown={optionsArray.costbreakdown}
                    price={optionsArray.price}
                    setIncome={setIncome}
                    currentIncome={currentIncome}
                    setSimStage={setStage}
                    setText={setText}
                    lowestprice={lowestprice}
                    key={i} />
            )}

            </MyGrid>

                {text}
            </div>
            :
            
            <div>
                <PriceWarning setSimStage={setSimStage}/>
            </div>
            
            }
        </div>
        
    )
}

export default Booth;