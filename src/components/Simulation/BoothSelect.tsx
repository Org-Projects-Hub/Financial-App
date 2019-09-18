import React, {useState} from 'react';
import styled from 'styled-components';
import data from './Simulation.json'
import './simulation.css';
import {Grid} from '../../style/styled';


const Booths = styled.div`
font-size: 20pt;
font-weight:bolder;
text-align:center;
background-color:yellow;
padding:2vh;
margin: .5vh
min-width: 20vw;`;

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
                    <button 
                    style={{margin: "5px"}}
                    disabled={boothSelection === info.category}>
                        <Booths key={i} onClick={()=>setBooth(info.category)}>
                            {info.category}
                        </Booths>
                    </button>
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
