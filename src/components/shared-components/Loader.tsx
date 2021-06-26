import React from 'react';
import { loader } from 'assets';
import styled from 'styled-components';

const Loader = styled.div`
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  display: inline-block;
`;

const Loader1 = (): JSX.Element => (
  <Loader className="blue-txt">
    <img width="70" src={loader} alt="A Loader" />
  </Loader>
);

export default Loader1;
