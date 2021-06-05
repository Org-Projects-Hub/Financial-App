import React from 'react';


const PriceWarning = ({setSimStage}:any) =>{

    console.log("PRICEWARNING");

    function goBack(){
        setSimStage("boothSelect");
    }

    console.log("PRICE WARNING");

    return(

        <div>
            You cannot afford anything on this booth, click continue
            and select another booth

            <button className="btn" onClick={()=>goBack()}>CONTINUE</button>
        </div>
    );
} 

export default PriceWarning;