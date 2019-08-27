import React, {useState} from 'react';
import styled from 'styled-components';
import data from './Simulation.json'
import Booth from './Booth'

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


const BoothSelect = ({setSimStage}:any) =>{

    const [boothSelection, setBooth] = useState(null);
    

    // function goToBooth(booth: string){

    //     setBooth(booth);

    //     <Booth currentBooth={boothSelection} />
    // }


    const info = data.booths

    console.log(info.length)

    return(
        <Wrapper>
            

            {info.map((info:any, i: any )=> 
            
            <Booths key={i} onClick={()=> <Booth currentBooth= {info.category}/>}>
                    {info.category}
                </Booths>)
            }

            {boothSelection}

            
        </Wrapper>
    )

}

export default BoothSelect;
