import styled from 'styled-components';

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
`;

const QuestionStr = styled.div`
  padding-bottom: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const OptionButton = styled.button`
  background-color: #007fff;
  color: #ffffff;
  margin: 5px;
  min-width: 300px;
  min-height: 30px;
  border: 2px solid #1f3d7d;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background-color: #1f3d7d;
    cursor: pointer;
    border-color: #f8b332;
  }

  &:disabled {
    background-color: #7da2d6;
    color: #ffffff;
    border-color: #1f3d7d;
  }
`;

const NavButton = styled.button`
  background-color: #007fff;
  color: #ffffff;
  font-weight: bold;
  margin: 5px;
  min-width: 150px;
  min-height: 40px;
  border: 2px solid #1f3d7d;
  border-radius: 4px;

  &:focus {
    background-color: #007fff;
    border-color: #f8b332;
  }

  &:hover {
    background-color: #1f3d7d;
    cursor: pointer;
    border-color: #f8b332;
  }

  &:disabled {
    background-color: #7da2d6;
    color: #ffffff;
    border-color: #1f3d7d;
    cursor: not-allowed;
  }
`;

export { OptionButton, NumberStr, QuestionStr, NavButton, Container }