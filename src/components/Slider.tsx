import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
background: black; 
width:100%;
`;

const Pic = styled.img`
position:absolute;
width:75%;
height:40%;
transform: translate(-50%, -50%);
`;

const Left = styled.a`
position: absolute;
left:25%;

`;

const Right = styled.a`
position: absolute;
right:25%
`;

const Slider = ()=> {

    return(

        <Wrapper>
            <Pic src="https://americasaves.org/images/article/Dollar%20Bills.jpg"/>
            
            <Left>
                <i className="fas fa-arrow-left"></i>
            </Left>

            <Right>
                <i className="fas fa-arrow-right"></i>
            </Right>

        </Wrapper>
    );

}

export default Slider;