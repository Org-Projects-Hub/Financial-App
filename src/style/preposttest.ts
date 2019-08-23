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
    border-color: #f8b332;
  }

  &:disabled {
    color: #1f3d7d;
    border: 2px solid #1f3d7d;
    font-weight: bold;
    &:hover {
      cursor: default;
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
    background-color: white;
    color: #f8b332;
    border-color: #f8b332;
  }

  &:hover {
    cursor: pointer;
    color: #f8b332;
    border-color: #f8b332;
  }

  &:disabled {
    background-color: white;
    color: #7da2d6;
    border-color: #7da2d6;
    cursor: not-allowed;
  }
`;

export { OptionButton, NumberStr, QuestionStr, NavButton, Container }