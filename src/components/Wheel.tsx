import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
background: yellow;
border-radius: 50%;
height: 50%;
width: 50%;
`;

const Wheel = () => {

    return(
        <Circle>Some Data</Circle>
    )
}

export default Wheel;