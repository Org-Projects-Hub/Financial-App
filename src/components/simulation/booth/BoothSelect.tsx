import React, {useState} from 'react';
import styled from 'styled-components';
import data from '../../../json/Simulation.json'
import {Grid , NavButton} from '../../../style/styled';
import '../../../style/simulation.css';

const Booths = styled.div`
font-size: 20pt;
font-weight:bolder;
text-align:center;
background-color:yellow;
padding:2vh;
margin: .5vh
min-width: 20vw;
max-height: 10vh;

`;

const BoothSelect = ({setSimStage, setCurrentBooth}:any) =>{

    const [boothSelection, setBooth] = useState(null);
    const [text, setText] = useState(null);  

    function goToBooth(){
        setSimStage("booth");
        setCurrentBooth(boothSelection);  
    }
    function warning(){
        setText("You must select a booth to continue");
    }

    const info = data.booths

    return(
        <Grid cols="1">
            {info.map((info:any, i: any )=> 
                <div>
                    <NavButton 
                    style={{margin: "1em"}}
                    disabled={boothSelection === info.category}>
                        <Booths key={i} onClick={()=>setBooth(info.category)}>
                            {info.category}
                        </Booths>
                    </NavButton>
                </div>)
            }
            {boothSelection === null ?         
                <button className="btn" onClick={()=>warning()}>GO!</button>
            : 
                <button className="btn" onClick={()=> goToBooth()}>GO!</button>
            }
            
            <div>
                {text}
            </div>     
        </Grid>
    )

}

export default BoothSelect;
