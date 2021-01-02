import React from 'react';
import {
  NumberStr,
  QuestionStr,
  OptionButton,
  ListHeading,
  Line,
} from '../../../style/preposttest';
import { Card, Grid } from '../../../style/styled';

interface Props {
  num: number;
  q: string;
  a: string[];
  sel: number;
  total: number;
  save: Function;
}

const QuestionCard = (props: Props): JSX.Element => {
  return (
    <Card width="50vw">
      <ListHeading>HOW WELL DO YOU KNOW YOUR FINANCES?</ListHeading>
      <Line />
      <NumberStr>
        Question {props.num + 1} of {props.total}
      </NumberStr>
      <QuestionStr>{props.q}</QuestionStr>

      <Grid cols="1">
        <ul className="answer-options">
          {props.a.map((answer: string, i: any) => (
            <li key={i}>
              <OptionButton
                onClick={(e: any) => props.save(props.num, e.target.id)}
                id={i}
                value={answer}
                disabled={props.a[props.sel] === answer}
              >
                {answer}
              </OptionButton>
            </li>
          ))}
        </ul>
      </Grid>
    </Card>
  );
};

export default QuestionCard;
