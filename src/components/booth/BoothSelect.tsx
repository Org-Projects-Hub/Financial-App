import React from 'react';
import styled from 'styled-components';
import { Grid, NavButton } from 'style/styled';
import {
  housingIcon,
  clothingIcon,
  foodIcon,
  temptationIcon,
  transportationIcon,
} from 'assets';
import 'style/simulation.css';

interface BoothIconsObjType {
  [id: number]: any;
}
export const BoothIcons: BoothIconsObjType = {
  1: clothingIcon,
  2: housingIcon,
  3: clothingIcon,
  4: foodIcon,
  5: transportationIcon,
  6: temptationIcon,
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
  setVisitedBooths,
  visitedBooths,
  boothsInfo,
  currentBalance,
}: any): JSX.Element => {
  // if (currentBalance <= 0) {
  //   setSimStage('summary');
  // }

  function goToBooth(boothNo: number) {
    setSimStage('Booth-Selected');
    setCurrentBooth(boothNo);
    // if (currentBalance > 0) {
    //   setSimStage('Booth-Selected');
    //   setCurrentBooth(boothNo);
    // }
  }

  if (!boothsInfo) return null;
  else
    return (
      <Grid cols="1">
        {boothsInfo.map((info: any, i: number) => (
          <div key={info.id}>
            <button
              className={`customButton boothOption ${
                visitedBooths.includes(i + 1) ? 'disabledBooth' : ''
              }`}
              onClick={(e) => {
                if (!visitedBooths.includes(i + 1)) {
                  setVisitedBooths([...visitedBooths, i + 1]);
                  goToBooth(i + 1);
                }
              }}
            >
              <img src={BoothIcons[i + 1]} className="boothIcon" />
              <p className={info.id}>{info.category}</p>
            </button>
          </div>
        ))}
      </Grid>
    );
};

export default BoothSelect;
