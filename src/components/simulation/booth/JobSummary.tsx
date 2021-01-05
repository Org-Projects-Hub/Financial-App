import React, { useState } from 'react';
import { Grid, Card } from '../../../style/styled';
import styled from 'styled-components';
import { career } from './RunSimulation';

const Red = styled.span`
  color: red;
  font-size: 16pt;
`;

const Green = styled.span`
  color: green;
  font-size: 16pt;
`;

const Card2 = styled(Card)`
  padding: 3%;
  min-width: 60vw;
`;

const JobSummary = ({ career }: { career: career }): JSX.Element => {
  console.log(career);

  const anSal = career.annual_salary.toFixed(2);
  const grossSal = career.annual_salary / 12;
  const fedTax = career.federalTax.toFixed(2);
  const socialS = career.socialSecurity.toFixed(2);
  const medicare = career.medicare.toFixed(2);
  const sTax = career.stateTax.toFixed(2);
  const insurance = career.insurance.toFixed(2);
  const edu = career.education;
  const position = career.position;

  const netMonth = career.afterTaxMontlySalary.toFixed(2);

  const vowel = new Set(['A', 'E', 'I', 'O', 'U']);

  const [grammar, setGram] = useState('a');
  const [flag, setFlag] = useState(false);

  if (vowel.has(position.charAt(0)) && flag == false) {
    setGram('an');
    setFlag(true);
  }

  return (
    <Card2>
      <span style={{ fontWeight: 500, fontSize: '1.15em' }}>
        You were hired as {grammar}{' '}
        <span className="blue-text">{position}</span>, which requires an
        education level of at least a {edu}!
      </span>{' '}
      <br />
      <hr />
      <br />
      As {grammar} {position}, you will make <Green>${anSal}</Green> a year.
      <br />
      <br />
      This means your gross monthly salary is{' '}
      <Green>${grossSal.toFixed(2)}</Green>
      <br />
      <br />
      You will have to pay the following taxes:
      <ul>
        <li>
          Federal Taxes: <Red>${fedTax}</Red>
        </li>
        <li>
          Social Security: <Red>${socialS}</Red>
        </li>
        <li>
          Medicare: <Red>${medicare}</Red>
        </li>
        <li>
          State Tax: <Red>${sTax}</Red>
        </li>
        <li>
          Insurance: <Red>${insurance}</Red>
        </li>
        <li>
          Credit Card Debt: <Red>${career.credit}</Red>
        </li>
        <li>
          Continuing Education/Training: <Red>${career.training}</Red>
        </li>
      </ul>
      <br />
      Which means your net monthly income is <Green>${netMonth}!</Green>
    </Card2>
  );
};

export default JobSummary;
