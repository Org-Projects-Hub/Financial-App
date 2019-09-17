import React from 'react';
import {Grid, Card} from '../../style/styled';
import styled from 'styled-components';

type Props = {
    name: string;
    desc: string[];
    costBreakdown: string[];
    price: Number;
}

const Name = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
    text-align: center;
`;

const Desc = styled.div`
    margin: 3px;
`;

const Price = styled.div`
    text-align: center;
`;

const Heading = styled.div`
    text-align: center;
    margin-top: 5px;
    font-weight: 600;
    font-size: 18px;
    justify-content: center;
`;

const HorLine = () => (
    <hr style={{
        borderTop: "1px",
        color: "#1f3d7d",
        marginTop: "5px"
    }} />
);
const NavButton = styled.button`
  background-color: white;
  color: #1f3d7d;
  margin-top: 10px;
  min-width: 150px;
  min-height: 40px;
  border: 2px solid #1f3d7d;
  border-radius: 4px;
  font-weight: bold;

  &:focus {
    background-color: #7da2d6;
  }

  &:hover {
    background-color: white;
    cursor: pointer;
    font-size: 108%;
  }

  &:disabled {
    background-color: white;
    color: #7da2d6;
    border-color: #7da2d6;
    cursor: not-allowed;
    &:hover {
    font-size: 100%;
    }
  }
`;


const BoothOption = ({name, desc, costBreakdown, price, setIncome, currentIncome, setSimStage}: any) => {
    

    function buy(){
        setIncome(currentIncome - price);
        setSimStage();
    }
    
    return(
        <Card>
            <Name>{name}</Name>

            <Grid cols="3">
                {desc.map((store: string, i: Number) =>
                    <Desc>{store}</Desc>
                )}
            </Grid>

            <HorLine />
            <Heading>Cost Breakdown</Heading>
            <Grid cols="2">
                {costBreakdown.map((cost: string, i: Number) =>
                    <div>{cost}</div>
                )}
            </Grid>
            
            <HorLine />
            <Heading>Total Price</Heading>
            <Price>${price}</Price>

            <HorLine />
            <Grid cols="1"><NavButton onClick={()=>buy()}className="btn">Purchase</NavButton></Grid>
            
        </Card>
    );
}

export default BoothOption;