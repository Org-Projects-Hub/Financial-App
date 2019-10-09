import React, {useState} from 'react';
import {Grid, Card , NavButton} from '../../../style/styled';
import styled from 'styled-components';

type Props = {
    name: string;
    desc: string[];
    costBreakdown: string[];
    price: Number;
}
const MyCard = styled(Card)`
display: grid;
    width: 90%;
    height: 90%;
    box-sizing: content-box;
    grid-template-rows: auto;
    margin: 5% 0px;
    justify-items: center;
`;

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

const Warning = styled.div`
    padding: 0%;
`;

const HorLine = () => (
    <hr style={{
        borderTop: "1px",
        color: "#1f3d7d",
        marginTop: "5px"
    }} />
);

const BoothOption = ({name, desc, costBreakdown, price, setIncome, currentIncome, setSimStage, setText, lowestprice}: any):JSX.Element => {
    

    function goBack(){
        setSimStage("boothselect");
    }

    function buy(){
        if(currentIncome > price)
        {
            window.scrollTo(0, 0)
            setIncome(currentIncome - price);
            setSimStage("boothSelect");
        }
        else if(currentIncome < price)
        {
            setText("You do not have enough money to purchase this");
        }
        
    }

    console.log("LOWEST PRICE: " + lowestprice);

    return(
        <MyCard >
            {currentIncome >= lowestprice ?
            <div>
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
            </div>
            :

            <Warning>
            You cannot afford anything on this booth, click continue
            to select another booth

            <button className="btn" onClick={()=>goBack()}>CONTINUE</button>
            </Warning>
            
            }
            
        </MyCard>
    );
}

export default BoothOption;