import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  text-align: center;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 16vw 42vw 42vw;
  grid-template-rows: 10vh 15vh 60vh 5vh auto;
  align-items: stretch;
  place-items: stretch;
`;


const Banner = styled.div`
grid-column: 1 / span 3;
grid-row: 1 / span 1;
background-color: rgb(28, 42, 105);
align-self: stretch;
justify-self: stretch;
z-index:0;
`;

const Logo = styled.a`
grid-column: 1 / span 1;
grid-row: 1 / span 1;
justify-self: end;
align-self: stretch;
object-fit: contain;
z-index:1;
`;

{/*const SlidePos = styled.div`
grid-column: 2 / span 1;
grid-row: 3 / span 1;
justify-self: stretch;
align-self: stretch;
box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
`; */}

const Desc = styled.div`
grid-column: 2 / span 1;
grid-row: 3 / span 1;
align-self: stretch;
justify-self: stretch;
font-family: 'Capriola', sans-serif;
font-weight:bolder;
color: FAB084;
`;

const LoginPOS = styled.div`
grid-column-start: 3;
grid-row-start: 3;
grid-row-end: 5;
`;

const Button = styled.button`
background-color:blue;
text-size:1vw;
&:hover{
background-color: rgb(0, 40, 133);
}
`;

const Background = styled.div`
background: linear-gradient(to right, #1e5799 0%,#207cca 50%,#7db9e8 100%);
`;

export {Wrapper, Banner, Logo, Desc, LoginPOS, Button, Background};