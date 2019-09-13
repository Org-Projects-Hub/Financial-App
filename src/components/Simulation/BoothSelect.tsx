import React, {useState} from 'react';
import styled from 'styled-components';
import data from './Simulation.json'
import './simulation.css';

const Wrapper = styled.div`
    
`;

const Booths = styled.div`
font-size: 20pt;
font-weight:bolder;
text-align:center;
background-color:yellow;
padding:2vh;
margin: .5vh

&:active{
    background: blue;
}
`;


const BoothSelect = ({setSimStage, setCurrentBooth}:any) =>{

    const [boothSelection, setBooth] = useState(null);
    const [text, setText] = useState(null)
    

    function goToBooth(){

        setSimStage("booth");
        setCurrentBooth(boothSelection);

        
    }

    function warning(){

        setText("You must select a booth to continue");

    }


    const info = data.booths

    return(
        <Wrapper>
            

            {info.map((info:any, i: any )=> 
            
            <Booths key={i} onClick={()=>setBooth(info.category)}>
                    {info.category}
            </Booths>)
            }
            {boothSelection === null ?
                
                <button className="btn" onClick={()=>warning()}>GO!</button>
            : 
                <button className="btn" onClick={()=> goToBooth()}>GO!</button>
            }
            
            <div>
                {text}
            </div>
            
            
        </Wrapper>
    )

}

export default BoothSelect;
