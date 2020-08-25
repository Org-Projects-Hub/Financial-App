import React, { useState } from 'react';
import { Grid, Card, NavButton } from '../../../style/styled';
import '../../../style/Booth.css';
import styled from 'styled-components';

type Props = {
  name: string;
  desc: string[];
  costBreakdown: string[];
  price: Number;
};
// const MyCard = styled(Card)`
//   display: grid;
//   width: 90%;
//   height: 90%;
//   box-sizing: content-box;
//   grid-template-rows: auto;
//   margin: 5% 0px;
//   justify-items: center;
// `;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
  text-align: center;
`;

const Desc = styled.div`
  margin: 3px;
`;

const Heading = styled.div`
  text-align: left;
  margin-top: 5px;

  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
  font-size: 18px;
  justify-content: left;
`;

const Warning = styled.div`
  padding: 0%;
`;

const HorLine = () => (
  <hr
    style={{
      borderTop: '1px',
      color: '#1f3d7d',
      marginTop: '5px',
    }}
  />
);

const BoothOption = ({
  name,
  icon,
  desc,
  costBreakdown,
  price,
  increaseExpenses,
  currentBalance,
  setSimStage,
  setText,
  lowestprice,
}: any): JSX.Element => {
  function buy() {
    if (currentBalance > price) {
      window.scrollTo(0, 0);
      increaseExpenses(price);
      setSimStage('Booth-Selection');
    } else if (currentBalance < price) {
      setText('You do not have enough money to purchase this');
    }
  }

  console.log('LOWEST PRICE: ' + lowestprice);

  return (
    <div className="boothItemOption">
      <div className="section">
        <img src={icon} className="boothItemIcon" />
        <Heading>{name}</Heading>
      </div>

      <div className="section">
        {desc.map((store: string, i: Number) => (
          <span>{`${store} | `}</span>
        ))}
      </div>
      <div className="section">
        <Heading>Cost Breakdown</Heading>

        {costBreakdown.map((cost: string, i: Number) => (
          <div>{cost}</div>
        ))}
      </div>
      <div className="section">
        <Heading>Total Price</Heading>
        <div>${price}</div>
      </div>
      <div className="section">
        <div className="customButton" onClick={() => buy()}>
          PURCHASE
        </div>
      </div>
    </div>
  );
};

export default BoothOption;
