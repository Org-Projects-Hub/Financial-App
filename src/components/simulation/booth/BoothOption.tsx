import React from 'react';
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

const HorLine = () => (
    <hr style={{
        borderTop: "1px",
        color: "#1f3d7d",
        marginTop: "5px"
    }} />
);

const BoothOption = ({name, desc, costBreakdown, price, setIncome, currentIncome, setSimStage}: any):JSX.Element => {
    
    function buy(){
        window.scrollTo(0, 0)
        setIncome(currentIncome - price);
        setSimStage();
    }
    
    return(
        <MyCard >
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
            
        </MyCard>
    );
}

export default BoothOption;