import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
background: yellow;
border-radius: 50%;
height: 50vh;
width: 30vw;
text-align: center;
`;

const Wheel = () => {

    return(
        <Circle>Some Data</Circle>
    );
}

export default Wheel;