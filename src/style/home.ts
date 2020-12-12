import styled from 'styled-components';
import backgroundimg from '../assets/backgrounds/bg-home.svg';

//Contains the entire Startpage, sets the gridarea and the background
const Wrapper = styled.div`
  text-align: center;
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 10vh 8vh 60vh 5vh auto;
  background-image: url(${backgroundimg});
  background-repeat: no-repeat;
  background-position: bottom center;
`;

//Sets the top banner, z-index is 0 so it will go underneath the logo
const Banner = styled.div`
  grid-column: 1 / span 4;
  grid-row: 1 / span 1;
  background-color: rgb(28, 42, 105);
  align-self: stretch;
  justify-self: stretch;
  z-index: 0;
`;

//Sets the logo picture to the top left, z-index is 1 so it will be above the banner
const Logo = styled.a`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  justify-self: end;
  align-self: stretch;
  object-fit: contain;
  z-index: 1;
`;

//Sets the desc centered to the left of the login card, also sets the text color and font
//  contains media queries so that it will be stacked above the login card on smaller screens
const Desc = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  align-self: center;
  justify-self: center;
  color: white;
  position: relative;
  z-index: 4;
  background-color: rgb(255 255 255 / 0.9);
  color: #005191;
  text-align: center;
  margin: auto;
  width: 75%;
  border-radius: 10px;
  margin-top: 0;
  ${{
    /*Sizing for ipad and mobile */
  }}
  @media only screen and (max-width: 1024px) {
    grid-column: 2 / span 2;
    grid-row: 2 / span 1;
  }

  ${{
    /*Sizing for laptop and desktop */
  }}
  @media only screen  and (min-width : 1024px) {
    grid-column: 3 / span 6;
    grid-row: 3 / span 1;
    padding: 5%;
  }
`;

const DescTitle = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-family: 'Roboto Condensed', sans-serif;
`;

const DescText = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: 0.9em;
  margin-top: 1em;
`;

//Sets the position of the login card. Contains media queries to switch underneath the description on smaller screens
const LoginPOS = styled.div`
  ${{
    /*Sizing for ipad and mobile */
  }}
  @media only screen and (max-width : 1024px) {
    grid-column: 2 / span 2;
    grid-row: 3 / span 1;
  }

  ${{
    /*Sizing for laptop and desktop */
  }}
  @media only screen  and (min-width : 1024px) {
    grid-column: 4 / span 4;
    grid-row-start: 3;
    grid-row-end: 5;
    justify-self: end;
  }
`;

const Button = styled.button`
  background-color: blue;
  text-size: 1vw;
  &:hover {
    background-color: rgb(0, 40, 133);
  }
`;

//Sets the bottom banner
const Logoutbutton = styled.div`
grid-column: 3 / span 1;
grid-row: 1 / span 1;
position: relative;
z-index: 5;
align-self: end;
justify-self: end;
color:white
font-family: 'Capriola', sans-serif;
`;

export {
  Wrapper,
  Banner,
  Logo,
  Desc,
  LoginPOS,
  Button,
  Logoutbutton,
  DescTitle,
  DescText,
};
