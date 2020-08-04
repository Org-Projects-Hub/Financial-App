import React, { useEffect, useState } from 'react';
import { Grid, GridRow, GridColItem } from '../../../style/styled';
import { NavButton } from '../../../style/preposttest';
import QuestionList from './QuestionList';
import QuestionCard from './QuestionCard';
import styled from 'styled-components';
// import backgroundimg from "../../../assets/select.svg";

const Container = styled.div`
  background-repeat: no-repeat;
  background-position: center;
`;

interface Props {
  nav: any;
  save: Function;
  data: any;
}

const TestLayout = (props: Props): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  //window size change
  useEffect(function () {
    window.addEventListener('resize', handleWindowSizeChange);
    console.log('componentwillmount');

    return function cleanup() {
      window.removeEventListener('resize', handleWindowSizeChange);
      console.log('componentwillUNmount');
    };
  });

  const isMobile = width <= 500 ? true : false;

  //layout format
  const row = isMobile === false ? '1' : '2';
  let col = isMobile === false ? '1' : '0';
  let colQList = {
    // questionlist
    colStart: '0',
    colEnd: '1',
  };
  let colQCard = {
    // question card
    colStart: isMobile === false ? '1' : '0',
    colEnd: isMobile === false ? '2' : '1',
  };

  return (
    <Container className="flex-center">
      <div
        style={{ width: '100%', minWidth: '100%' }}
        className={props.data.answered}
      >
        <GridRow rows={row}>
          <Grid cols={col}>
            <GridColItem
              colStart={colQList.colStart}
              colEnd={colQList.colEnd}
              align="center"
            >
              <QuestionList
                isMobile={isMobile}
                sel={props.data.selections}
                total={props.data.questions.length}
                set={props.nav.set}
                q={props.data.questions}
              />
            </GridColItem>

            <GridColItem
              colStart={colQCard.colStart}
              colEnd={colQCard.colEnd}
              align="center"
            >
              <QuestionCard
                num={props.data.current}
                q={props.data.questions[props.data.current]}
                a={props.data.answers}
                sel={
                  props.data.selections[props.data.current] === undefined
                    ? null
                    : props.data.selections[props.data.current].value
                }
                total={props.data.questions.length}
                save={props.save}
              />

              <Grid cols="2">
                <GridColItem colStart="0" colEnd="1" align="left">
                  <NavButton
                    disabled={props.data.current <= 0}
                    onClick={() => props.nav.back()}
                  >
                    Back
                  </NavButton>
                </GridColItem>
                <GridColItem colStart="2" colEnd="3" align="right">
                  <NavButton
                    disabled={
                      props.data.selections[props.data.current] === undefined
                    }
                    onClick={() => props.nav.next()}
                  >
                    Next
                  </NavButton>
                </GridColItem>
              </Grid>
            </GridColItem>
          </Grid>
        </GridRow>
      </div>
    </Container>
  );
};

export default TestLayout;
