import React, {useState} from 'react';
import styled from 'styled-components';

const Booth = ( {setSimStage, currentBooth}:any) => {

    return(
        <div>
            The booth is {currentBooth}
        </div>
    )
}

export default Booth;