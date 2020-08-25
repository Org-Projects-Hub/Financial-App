import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../../json/Simulation.json';
import { Grid, NavButton } from '../../../style/styled';
import ClothingIcon from '../../../assets/icons/icon-booth-clothing.svg';
import HousingIcon from '../../../assets/icons/icon-booth-housing.svg';
import CharityIcon from '../../../assets/icons/icon-booth-charity.svg';
import foodIcon from '../../../assets/icons/icon-booth-food.svg';
import temptationIcon from '../../../assets/icons/icon-booth-temptation.svg';
import insuranceIcon from '../../../assets/icons/icon-booth-insurance.svg';
import transportationIcon from '../../../assets/icons/icon-booth-transportation.svg';
import '../../../style/simulation.css';

interface BoothIconsObjType {
  [id: number]: any;
}
export const BoothIcons: BoothIconsObjType = {
  0: ClothingIcon,
  1: HousingIcon,
  2: transportationIcon,
  3: CharityIcon,
  4: foodIcon,
  5: temptationIcon,
  6: insuranceIcon,
};

const Option = styled.div`
  background-color: #fcb23d;
  color: #1f3d7d;
  border: 2px solid #1f3d7d;
  border-radius: 4px;
  font-weight: bold;
  font-family: Roboto;
  font-size: 1.25em;
  width: 17vw;
  height: auto;
  padding: 5%;
`;
const BoothSelect = ({
  setSimStage,
  setCurrentBooth,
  currentBalance,
}: any): JSX.Element => {
  if (currentBalance <= 0) {
    setSimStage('summary');
  }

  function goToBooth(boothNo: number) {
    if (currentBalance > 0) {
      setSimStage('Booth-Selected');
      setCurrentBooth(boothNo);
    }
  }

  const boothsInfo = data.booths;

  return (
    <Grid cols="1">
      {boothsInfo.map((info: any, i: number) => (
        <div key={info.id}>
          <button
            className="customButton boothOption"
            onClick={(e) => {
              // goToBooth(e.currentTarget.children[1].className);
              goToBooth(i);
            }}
          >
            <img src={BoothIcons[i]} className="boothIcon" />
            <p className={info.id}>{info.category}</p>
          </button>
        </div>
      ))}
    </Grid>
  );
};

export default BoothSelect;
