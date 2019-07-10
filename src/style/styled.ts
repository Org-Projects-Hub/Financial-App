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
  border-top: 1px solid #2B547E;
   margin: 1em 0.5em;
   padding: .8em 1em;
   background: white;
   box-shadow: 0 .25em .5em rgba(0,0,0,.5);
   border-radius: .5em;
  `;

  const Grid = styled.div`
   display: grid;
   place-items: center;
   grid-gaps: 1em;
   grid-template-columns: repeat(${props => props.color}, 1fr);
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


  export {Card, Badge, Grid, Wrapper};
