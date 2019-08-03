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
  background-color: #f1f1f1;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 5% 0px;
  margin: 0px 15%;
  background-color: white;
  min-height: 100vh;
  text-align: center;
  box-shadow: 0px 0px 20px 5px gray;
`;


const Button = styled.button`
  text-align: center;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 0.5em;
  font-size: 120%;
  width: 10%;
  padding: 1%;
  position: fixed;
  transition: transform 750ms;
  
  &:hover {
    transform: scale(1.25);
  }
`;

const HomeButton = styled(Button)`
  background-color: white;
  top: 5%;
  left: 6%;
`;


const AddClass = styled(Button)`
  color: white;
  bottom: 18%;
  right: 2%;
`;


const SettingsButton = styled.img`
  width: 6%;
  border: none;
  position: fixed;
  top: 5%;
  right: 4.5%;
  transition: transform 750ms;

  &:hover {
    transform: scale(1.5);
  }
`;

const ResourcesButton = styled(AddClass)`
  bottom: 10%;
`;

const TakeSim = styled(Button)`
  position: relative;
  color: white;
  border: none;
  width: 80%
  transition: transform 750ms;
  max-width: 600px;

  &:hover {
    transform: scale(1.05);
  }
`;





export {Card, Badge, Grid, GridRow, Wrapper, Border, Container, Button, HomeButton, AddClass, SettingsButton, ResourcesButton, TakeSim};
