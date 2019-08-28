import React, {useState} from 'react';
import styled from 'styled-components';
import data from './Simulation.json'

const Wrapper = styled.div`
    
`;

const Booths = styled.div`
font-size: 20pt;
font-weight:bolder;
text-align:center;
background-color:yellow;
padding:2vh;
margin: .5vh
`;


const BoothSelect = ({setSimStage, setCurrentBooth}:any) =>{

    const [boothSelection, setBooth] = useState(null);
    

    function goToBooth(){

        setSimStage("booth");
        setCurrentBooth(boothSelection);

        
    }


    const info = data.booths

    console.log(info.length)

    return(
        <Wrapper>
            

            {info.map((info:any, i: any )=> 
            
            <Booths key={i} onClick={()=> setBooth(info.category)}>
                    {info.category}
            </Booths>)
            }

            {boothSelection}

            {console.log(boothSelection)}
            <button className="btn" onClick={()=> goToBooth()}>GO!</button>
        </Wrapper>
    )

}

export default BoothSelect;
