import React from 'react';
import styled from 'styled-components';
import data from './Simulation.json'; 

const Circle = styled.div`
background: yellow;
border-radius: 50%;
height: 50vh;
width: 30vw;
text-align: center;
`;

/**"education":[
        {"id":0,"edulevel":"High School Diploma"},
        {"id":1,"edulevel":"Bachelors Degree"},
        {"id":2,"edulevel":"Masters Degree"},
        {"id":3,"edulevel":"GED/HSET"},
        {"id":4,"edulevel":"Asscoiates Degree"}], */

const Wheel = () => {
    
    let education: object = [];

    const props = data.education;

    for(let i = 0; i > props.length; i++){
        //education[i].push(props[i])
    }
    

    return(

        <Circle></Circle>
    );
}

export default Wheel;