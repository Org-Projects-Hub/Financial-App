import React from 'react';
import styled from 'styled-components'
import { Button, Grid, GridRow } from '../../style/styled'
import RedX from '../../assets/images/red_x.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.4);
`;

const Modall = styled.div`
position: relative;
top: 20%;
background-color: #fefefe;
margin: 2% auto;
border: 1px solid #888;
width: 40%;
padding: 0;
max-width: 800px;
color: black;

@media(max-width: 879px){
  position: absolute;
  bottom: auto;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
}`;

const Btn = styled.div`
    color: red;
    background: white;
    border: 0;
    padding: 1em;
    width: 4em;
`;



const XButton = styled.img`
    width: 100%;
    transition: transform 700ms;

    &:hover {
        transform: scale(1.5);
    }
`;

const CreateClass = styled(Button)`
    position: relative;
    background-color: ${props => props.color};
    color: white;
    width: 50%;
    margin: 0.5% 20%;
`;

const LinkButton = styled.div`
    display: inline-block;
    width: 100%;
    margin: 2% 0 0 0;
`;

const TakeSimModal = (props: any) => {

    if(props.show){
        return (
            <Wrapper>
                <Modall>
                    <Btn style={{float: "right"}}  onClick={props.onClose}><XButton src={RedX}></XButton></Btn>
                    <div style={{margin: "5% 0 5% 5%", wordWrap: 'break-word'}}>
                        <GridRow rows='3' style={{overflow: 'hidden'}}>
                        
                            <p className="ta-center" style={{fontSize: "175%", margin: "1% 1% 2% 1%"}}> 
                                You are about to take a Simulation NOT associated with a Class or Organization. 
                            </p> 

                            <p className="ta-center" style={{fontSize: "175%", margin: "1% 1% 2% 1%"}}>Continue anyways?</p>
                            
                                <Grid cols='2' style={{wordWrap: 'break-word'}}>
                                        <CreateClass style={{float: 'left'}} color={props.backgroundColor} onClick={props.onClose}>Cancel</CreateClass>
                                        <LinkButton className='ta-center' style={{display: 'inline-block'}}>
                                            <Link to="/simulation"><CreateClass style={{float: 'right', display: 'inline-block', margin: '0'}} color={props.backgroundColor}>Continue</CreateClass></Link>
                                        </LinkButton>
                                </Grid>
                            
                            
                        </GridRow>
                    </div>
                </Modall>
            </Wrapper>);
    } else{
    return null;
    }
};

export default TakeSimModal;



