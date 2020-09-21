import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { booths } from '../../../json/SimJSON';
import BoothOption from './BoothOption';
import { Grid } from '../../../style/styled';
import PriceWarning from './PriceWarning';

import { useDispatch } from 'react-redux';
import {
  showBackFunction,
  hideBackFunction,
  changeBackFunction,
} from '../../../store/action/backButtonActions';

import money1 from '../../../assets/icons/icon-money-1.svg';
import money2 from '../../../assets/icons/icon-money-2.svg';
import money3 from '../../../assets/icons/icon-money-3.svg';
import money4 from '../../../assets/icons/icon-money-4.svg';

import housingIcon from '../../../assets/icons/rev/icon-booth-rev-housing.svg';
import clothingIcon from '../../../assets/icons/rev/icon-booth-rev-clothing.svg';
import charityIcon from '../../../assets/icons/rev/icon-booth-rev-charity.svg';
import foodIcon from '../../../assets/icons/rev/icon-booth-rev-food.svg';
import insuranceIcon from '../../../assets/icons/rev/icon-booth-rev-insurance.svg';
import transportationIcon from '../../../assets/icons/rev/icon-booth-rev-transportation.svg';
import temptationIcon from '../../../assets/icons/rev/icon-booth-rev-temptation.svg';

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

const MyGrid = styled(Grid)`
  grid-grap: 1em;
  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;

const Span = styled.div`
  margin: 3% 0 1% 0;
  color: white;
  display: flex;
`;

const Info = styled.div`
  padding-left: 2.5%;
  color: #fffefd;
  font-weight: 500;
`;

const Icons: any[] = [money1, money2, money3, money4];

const Booth = ({
  setSimStage,
  currentBooth,
  data,
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
    //Reading through the SimJSON booth data to find the currentbooth
    for (var i = 0; i < booths.length; i++) {
      if (booths[i].id == currentBooth) {
        // when currentbooth is found
        // boothIcon = BoothIcons[i];
        var booth = booths[i]; //used for readability
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
        i = booths.length + 1; // break statement
      } else {
        console.log('ERROR'); //error checking
      }
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
      <div>
        {/* {currentBalance > lowestprice ? ( */}
        <div>
          <Span>
            {/* <ReactLogo /> */}
            <img src={BoothIcons[currentBooth]} className="curentBoothIcon" />
            <div className="currentBoothIdentifier">
              The Current Booth is {`${boothName}.`}
            </div>
            {/* <a onClick={() => setSimStage('job')}>{currentBooth}</a> */}
          </Span>
          <Info>Remaining Balance: {remainingBalance}</Info>
          <MyGrid cols={optionsArray.length == 1 ? '1' : '2'}>
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
          </MyGrid>
          {text}
        </div>
        {
          // )
          //  : (
          //   <div>
          //     <PriceWarning setSimStage={setSimStage} />
          //   </div>
          // )}
        }
      </div>
    );
  }
};

export default Booth;
