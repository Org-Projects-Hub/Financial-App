import styled from 'styled-components';
import React from 'react';
import { Card } from "./styled";

const Container = styled.div`
    min-width: 50%;
    max-width: 50%;
`;

const NumberStr = styled.div`
  color: #8c8c8c;
  padding-bottom: 8px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    cursor: default;
  }
`;

const QuestionStr = styled.div`
  padding-bottom: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const OptionButton = styled.button`
  background-color: white;
  color: #5c5c5c;
  margin: 5px;
  min-width: 200px;
  min-height: 30px;
  border: 1px solid #969696;
  border-radius: 4px;

  &:focus {
    background-color: white;
  }

  &:hover {
    cursor: pointer;
    color: #f8b332;
    box-shadow: 4px 4px 2px #b5b5b5;
    border-color: #f8b332;
    font-size: 104%;
  }

  &:disabled {
    color: #1f3d7d;
    border: 2px solid #1f3d7d;
    box-shadow: 2px 2px 4px #adadad;
    font-weight: bold;
    &:hover {
      cursor: default;
      box-shadow: 4px 4px 2px #b5b5b5;
    }
  }
`;

const NavButton = styled.button`
  background-color: white;
  color: #1f3d7d;
  margin: 5px;
  min-width: 150px;
  min-height: 40px;
  border: 2px solid #1f3d7d;
  border-radius: 4px;
  font-weight: bold;

  &:focus {
    background-color: #7da2d6;
  }

  &:hover {
    cursor: pointer;
    font-size: 108%;
  }

  &:disabled {
    background-color: white;
    color: #7da2d6;
    border-color: #7da2d6;
    cursor: not-allowed;
    &:hover {
    font-size: 100%;
    }
  }
`;

const QuestionListButton = styled.button`
  background-color: white;
  color: #1f3d7d;
  font-weight: bold;
  margin: 5px;
  border: 0px;
  min-height: 30px;
  min-width: 175px;
  text-align: left;
  padding-left: 2px;

  &:focus {
    background-color: white;
  }

  &:hover {
    cursor: pointer;
    font-size: 104%;
  }

  &:disabled {
    color: #5c5c5c;
    font-weight: normal;
    &:hover {
      cursor: default;
      font-size: 100%;
    }
  }
`;

const QuestionListCard = styled.div`
  display: flex;
  flex-direction: column;

  background: white;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
`;

const ListHeading = styled.span`
  padding: 6px 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Line = styled.hr`
  border-top: 1px;
  color: #cccccc;
`;

export { OptionButton, NumberStr, QuestionStr, NavButton, Container, QuestionListButton, QuestionListCard, ListHeading, Line }