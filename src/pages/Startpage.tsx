import React from 'react';
import styled from 'styled-components';
import './Startpage.css';
const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);;
  height: 100vh;`;

const Start = styled.form`
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr auto;`;

const Startpage = ({login, onChange}:{login: any, onChange: any})=>
                      <Wrapper className="center">
                        <Start>
                          <h1 className="gradient-heading">Welcome!</h1>
                          <div>Enter Your Name<input onChange={onChange}/></div>
                          <div><button className="btn-round" onClick={login}><i className= "fa fa-angle-right txt-md"></i></button></div>
                        </Start>
                      </Wrapper>;

export default Startpage;
