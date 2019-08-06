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
  background: ${props => props.color};
`;

const Card = styled.div`
  margin: 1em 0.5em;
  padding: .8em 1em;
  background: white;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
`;

const Grid = styled.div<{cols: string}>`
  display: grid;
  place-items: center;
  grid-gaps: 1em;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
`;

const GridColItem = styled.div<{colStart: string, colEnd: string, align: string}>`
  grid-column-start: ${props => props.colStart};
  grid-column-end: ${props => props.colEnd};
  text-align: ${props => props.align};
`;

const GridRow = styled.div<{rows: string}>`
  display: grid;
  place-items: center;
    grid-template-rows: repeat(${props => props.rows}, 1fr);
`;

const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  min-height: 100vh;
  width: 100%;
  text-align: center;
  padding: .3em 1em;
  padding-left: 55px;
  background: ${props => props.color};
  @media(max-width: 600px){
  width: 100%;
  padding-left: 1em;}
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
    margin: 0.5% 20%;
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
  width: 50%
  transition: transform 750ms;
  margin-bottom: 2%;

  &:hover {
    transform: scale(1.05);
  }
`;





export {Card, Badge, Grid, GridColItem, GridRow, Wrapper, Border, Container, Button, HomeButton, BackButton, AddClass, SettingsButton, ResourcesButton, AddStudent, TakeSim};
