import React, { useState } from 'react';
import {
  QuestionListButton,
  QuestionListCard,
  ListHeading,
  Line,
  Arrow,
} from '../../../style/preposttest';
import Arrowsvg from '../../../assets/icons/icon-arrow.svg';

interface Props {
  isMobile: boolean;
  sel: { id: number; value: string }[];
  total: number;
  set: Function;
  q: string[];
  current: any;
}

//desktop- needs to be clear which question is currently being viewed

const QuestionList = (props: Props): JSX.Element => {
  const [toggleMenu, setToggleMenu] = useState(false);

  if (props.isMobile) {
    return (
      <div>
        <button onClick={() => setToggleMenu(!toggleMenu)}>show menu</button>

        {toggleMenu ? (
          <div className="menu">
            <button>one</button>
            <button>two</button>
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <QuestionListCard>
        <ListHeading>QUESTIONS</ListHeading>
        {props.q.map((q, i) => (
          <div key={i}>
            <QuestionListButton
              onClick={() => props.set(i)}
              disabled={!props.sel[i]}
              value={!props.sel[i] ? null : props.sel[i].value}
            >
              {i + 1}. {!props.sel[i] ? 'Unanswered' : 'Answered'}
              {i === props.current ? <Arrow src={Arrowsvg} alt="" /> : null}
            </QuestionListButton>
            <Line />
          </div>
        ))}
      </QuestionListCard>
    );
  }
};

export default QuestionList;
