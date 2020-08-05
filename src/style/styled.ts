import styled from 'styled-components';

const Badge = styled.div`
  color: white;
  background: dodgerblue;
  display: inline-block;
  padding: 0.3em;
  font-size: 1.2em,
  display: inline-block,
  margin: 0.4em;
  border-radius: .4em;
  text-align: center;
  font-weight: bolder
  background: ${(props) => props.color};
`;

const Card = styled.div<{ width?: string }>`
  margin: 0 0.5em;
  padding: 0.8em 1em;
  background: rgb(255 255 255 / 0.9);
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.5);
  border-radius: 0.5em;
  width: ${(props) => (props.width ? props.width : 'auto')};
  padding-bottom: 2em;
`;

const Grid = styled.div<{ cols: string; placing?: string }>`
  display: grid;
  place-items: ${(props) => (props.placing ? props.placing : 'center')};
  grid-gaps: 1em;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
`;

const GridColItem = styled.div<{
  colStart: string;
  colEnd: string;
  align: string;
}>`
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  text-align: ${(props) => props.align};
`;

const GridRow = styled.div<{ rows: string }>`
  display: grid;
  place-items: center;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`;

const Wrapper = styled.div<{ backgroundImg?: any }>`
  min-height: 100vh;
  width: 100%;
  min-width: 320px;
  max-width: 100vw;
  text-align: center;
  padding: 0.3em 1em;
  padding-left: 55px;
  background-image: url(${(props) => props.backgroundImg || null});
  background-repeat: no-repeat;
  background-position: bottom center;
  @media (max-width: 879px) {
    width: 100%;
    padding-bottom: 5em;
    padding-left: 1em;
  }
`;

const Border = styled.div`
  margin: 0px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 5% 0px;
  padding-top: 75px;
  margin: 0px 15%;
  background-color: white;
  min-height: 100vh;
  text-align: center;
  box-shadow: 0px 0px 20px 5px gray;
  transition: margin 800ms;

  @media only screen and (max-width: 879px) {
    margin: 0;
  }
`;

const Notification = styled.div`
  background: red;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  text-align: center;
  position: relative;
  top: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  text-align: center;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 0.5em;
  font-size: 120%;
  width: 10%;
  padding: 1%;
  position: fixed;
  transition: transform 750ms;
  min-width: 110px;
  min-height: 50px;

  &:hover {
    transform: scale(1.25);
  }

  @media screen and (max-width: 879px) {
    position: static;
    width: 60%;
    margin: 1% 20% 8% 20%;
  }
`;

const HomeButton = styled(Button)`
  background-color: white;
  top: 5%;
  left: 6%;
`;

const BackButton = styled(HomeButton)``;

const AddClass = styled(Button)`
  color: white;
  bottom: 18%;
  right: 2%;

  @media screen and (max-width: 879px) {
    position: relative;
    width: 50vw;
    margin: 2% 3%;
  }
`;

const SettingsButton = styled.img`
  text-align: center;
  width: 6%;
  border: none;
  position: fixed;
  top: 5%;
  right: 4.5%;
  transition: transform 750ms;
  min-width: 75px;
  z-index: 0;

  &:hover {
    transform: scale(1.3);
  }

  @media screen and (max-width: 879px) {
    position: relative;
    margin: 1% 20%;
    left: 24.5%;
  }
`;

const NavButton = styled.button`
  background-color: white;
  color: #1f3d7d;
  margin-top: 10px;
  min-width: 150px;
  min-height: 40px;
  border: 2px solid #1f3d7d;
  border-radius: 4px;
  font-weight: bold;

  &:focus {
    background-color: #7da2d6;
  }

  &:hover {
    background-color: white;
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

const ResourcesButton = styled(AddClass)`
  bottom: 10%;
`;

const AddStudent = styled(ResourcesButton)`
  background-color: #d67762;
`;

const TakeSim = styled(Button)`
  position: fixed;
  top: 4%;
  left: 25%;
  color: white;
  border: none;
  width: 50%;
  transition: transform 750ms;
  margin-bottom: 2%;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 879px) {
    position: fixed;
    width: 50%;
    margin-bottom: 10em;
    top: 4%;
    left: 5%;
  }
`;

const ClassDiv = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 2%;
  background: white;
  cursor: pointer;
  border: 2px solid blue;
  border-radius: 1em;
  transition: box-shadow 500ms;

  &:hover {
    box-shadow: 5px 5px 15px 1px gray;
  }
`;

export {
  Card,
  Badge,
  Grid,
  GridColItem,
  NavButton,
  GridRow,
  Wrapper,
  Border,
  Container,
  Button,
  HomeButton,
  BackButton,
  AddClass,
  SettingsButton,
  ResourcesButton,
  AddStudent,
  TakeSim,
  ClassDiv,
};
