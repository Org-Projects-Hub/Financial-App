import styled from 'styled-components';
import React from 'react';
import { Card } from './styled';

const Container = styled.div`
  min-width: 50%;
  max-width: 50%;
`;

const NumberStr = styled.div`
  color: #8c8c8c;
  margin: 2.5% 0;
  text-align: center;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    cursor: default;
  }
`;

const QuestionStr = styled.div`
  color: #005191;
  padding-bottom: 15px;
  text-align: center;
  font-size: 1.35em;
  font-weight: bold;
`;

const OptionButton = styled.button`
  background-color: #539ed0;
  color: white;
  margin: 5px;
  min-width: 200px;
  min-height: 30px;
  border: none;
  border-radius: 4px;

  &:focus {
    background-color: white;
  }

  &:hover {
    cursor: pointer;
    color: #f8b332;
    box-shadow: 4px 4px 2px #b5b5b5;
    font-size: 104%;
  }

  &:disabled {
    color: #005191;
    background-color: #ffb93e;

    box-shadow: 2px 2px 4px #adadad;
    font-weight: normal;
    &:hover {
      cursor: default;
      box-shadow: 4px 4px 2px #b5b5b5;
    }
  }
`;

const NavButton = styled.button`
  background-color: #fcb23d;
  color: white;
  margin: 5px;
  min-width: 100px;
  min-height: 40px;
  border: none;

  border-radius: 5px;
  font-weight: 600;
  font-size: 1.15em;

  margin-top: 1vh;

  &:focus {
    background-color: #7da2d6;
  }

  &:hover {
    cursor: pointer;
    font-size: 118%;
    font-weight: 700;
  }

  &:disabled {
    background-color: rgb(255 255 255 / 0.9);
    color: #005191;
    border-color: #7da2d6;
    cursor: not-allowed;
    font-weight: normal;
    &:hover {
      font-size: 90%;
    }
  }
`;

const QuestionListButton = styled.button`
  color: #005191;
  margin: 5px;
  border: 0px;
  min-height: 30px;
  min-width: 175px;
  text-align: left;
  padding-left: 10%;
  background-color: inherit;

  &:focus {
    background-color: inherit;
  }

  &:hover {
    cursor: pointer;
    font-size: 104%;
    color: #005191;
    font-weight: bold;
  }

  &:disabled {
    font-weight: normal;
    &:hover {
      cursor: default;
      font-size: 100%;
    }
  }
`;

const Line = styled.hr`
  background-color: #539ED0;
  height: 1px;
  border: none;
}
`;

const Arrow = styled.img`
  margin-left: 2em;
  width: 1em;
`;

const QuestionListCard = styled.div`
  display: flex;
  flex-direction: column;

  background: rgb(255 255 255 / 0.9);
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.5);
  border-radius: 0.5em;
`;

const ListHeading = styled.div`
  padding: 6px 0;
  color: #005191;
  font-size: 1.75em;
  font-weight: bold;
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
`;

export {
  OptionButton,
  NumberStr,
  QuestionStr,
  NavButton,
  Container,
  QuestionListButton,
  QuestionListCard,
  ListHeading,
  Line,
  Arrow,
};
