import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BoothOption from './BoothOption';

import { useDispatch } from 'react-redux';
import {
  showBackFunction,
  hideBackFunction,
  changeBackFunction,
} from '../../store/action/backButtonActions';

import {
  money1,
  money2,
  money3,
  money4,
  rev_housingIcon as housingIcon,
  rev_clothingIcon as clothingIcon,
  rev_charityIcon as charityIcon,
  rev_foodIcon as foodIcon,
  rev_insuranceIcon as insuranceIcon,
  rev_transportationIcon as transportationIcon,
  rev_temptationIcon as temptationIcon,
} from 'assets';

const BoothIcons = [
  clothingIcon,
  housingIcon,
  transportationIcon,
  charityIcon,
  foodIcon,
  temptationIcon,
  insuranceIcon,
];

interface boothOptions {
  name: string;
  desc: string[];
  costbreakdown: string[];
  price: number;
}

const MyGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-grap: 1em;
  max-width: 80vw;
  margin: auto;
  margin-top: 5%;
  grid-auto-rows: auto;
  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;

const Span = styled.div`
  margin: 3% 0 1% 0;
  color: white;
  display: flex;
  grid-row: 1/1;
  grid-column: 1/3;
  width: 100%;
  justify-self: left;
`;

const Info = styled.div`
  padding-left: 2.5%;
  color: #fffefd;
  font-weight: 500;
  grid-row: 2/2;
  grid-column: 1/3;
  justify-self: left;
`;

const Icons: any[] = [money1, money2, money3, money4];

const Booth = ({
  setSimStage,
  currentBooth,
  booths,
  increaseExpenses,
  currentBalance,
  remainingBalance,
}: any): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [optionsArray, setOptionsArray] = useState([]);
  const [text, setText] = useState(null);
  const [priceArray, setPriceArray] = useState([]);
  const [lowestprice, setLow] = useState(999999999999);
  const [boothName, setBoothName] = useState('');
  const dispatch = useDispatch();

  var array = new Array();

  /**Setting the javaSCript array to the options array react hook*/
  useEffect(() => {
    var booth = booths[currentBooth - 1]; //used for readability

    setBoothName(booth.category);

    for (var j = 0; j < booth.options.length; j++) {
      //read through the options array of the current booth

      var boothOption = booth.options[j]; //used for readability

      let x: boothOptions = {
        name: boothOption.name,
        desc: boothOption.desc,
        costbreakdown: boothOption.costbreakdown,
        price: boothOption.price,
      };

      if (lowestprice > boothOption.price) {
        setLow(boothOption.price);
      }

      /**
       * Save the current option data into the array (where array index = the boothOptions id)
       * passing an object with the name, desc, costbreakdown, and price
       */
      array[j] = x;
    }

    setOptionsArray(array);
    setLoading(false);
    dispatch(showBackFunction());
    dispatch(
      changeBackFunction(() => {
        setSimStage('Booth-Selection');
      })
    );

    return () => {
      dispatch(hideBackFunction());
    };
  }, []);

  if (loading) {
    return null;
  } else {
    return (
      <MyGrid>
        <Span>
          <img src={BoothIcons[currentBooth]} className="curentBoothIcon" />
          <div className="currentBoothIdentifier">
            The Current Booth is {`${boothName}.`}
          </div>
        </Span>
        <Info>Remaining Balance: {remainingBalance}</Info>
        <div
          style={{
            gridRow: '3/3',
            gridColumn: '1/4',
            height: 'fit-content',
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
          }}
        >
          {optionsArray.map((optionsArray: any, i) => (
            <BoothOption
              name={optionsArray.name}
              icon={Icons[i]}
              desc={optionsArray.desc}
              costBreakdown={optionsArray.costbreakdown}
              price={optionsArray.price}
              increaseExpenses={increaseExpenses}
              currentBalance={currentBalance}
              setSimStage={setSimStage}
              setText={setText}
              lowestprice={lowestprice}
              key={i}
            />
          ))}
        </div>
        {text}
      </MyGrid>
    );
  }
};

export default Booth;
