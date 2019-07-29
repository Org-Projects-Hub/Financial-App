import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);;
grid-template-rows: repeat(3, 1fr);
align-items:stretch;
justify-items:stretch;
height:100%;
`;

const Pic = styled.div`
grid-column: 1 / span 3;
grid-row: 1 / span 3;
justify-self: stretch;
align-self: stretch;
min-hieght:100vh;
height:100%;
width:100%;
border-style: solid;
border-width: 0vh 6vh
`;

const Left = styled.a`
grid-column: 1 / span 1;
grid-row: 2 / span 1;
justify-self: start;
align-self: center;
font-size:25pt;
padding-left:.3vh;
`;

const Right = styled.a`
grid-column: 3 / span 1;
grid-row: 2 / span 1;
justify-self: end;
align-self: center;
font-size:25pt;
padding-right:.3vh;
`;


const Slider = ()=> {

    return(

        <Wrapper>
            <Pic>
                <img style={{height:"100%", width:"100%"}}src="http://harvardecon.org/wp-content/uploads/Ryan-Leung-Financial-Literacy-1038x576.png"/ >
            </Pic>
            
            <Left>
                <i className="fas fa-arrow-left fa-lg"></i>
            </Left>

            <Right>
                <i className="fas fa-arrow-right fa-lg"></i>
            </Right>

        </Wrapper>
    );

}

export default Slider;