import React, { useEffect, useState } from 'react';
import { Grid, GridRow, GridColItem } from '../../style/styled';
import { NavButton } from '../../style/preposttest';
import QuestionList from './QuestionList';
import QuestionCard from './QuestionCard';

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

    return function cleanup() {
      window.removeEventListener('resize', handleWindowSizeChange);
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
    <div className="flex-center">
      <div
        style={{ width: '100%', minWidth: '100%' }}
        className={props.data.answered}
      >
        <GridRow rows={row}>
          <Grid cols={col} placing="initial">
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
                current={props.data.current}
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
                    : props.data.selections[props.data.current]
                }
                total={props.data.questions.length}
                save={props.save}
              />

              <Grid cols="1">
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
                    disabled={props.data.selections[props.data.current] == null}
                    onClick={() =>
                      props.nav.next(
                        props.data.current == props.data.questions.length - 1
                      )
                    }
                  >
                    {props.data.current != props.data.questions.length - 1
                      ? 'Next'
                      : 'Finish'}
                  </NavButton>
                </GridColItem>
              </Grid>
            </GridColItem>
          </Grid>
        </GridRow>
      </div>
    </div>
  );
};

export default TestLayout;
