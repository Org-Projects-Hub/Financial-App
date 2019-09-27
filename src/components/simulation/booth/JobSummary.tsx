import React, {useState} from 'react';
import {Grid, Card} from '../../../style/styled'
import styled from 'styled-components';


const Red = styled.span`
color:red;
font-size: 16pt;
`;

const Green = styled.span`
color:green;
font-size: 16pt;
`;

const Card2 = styled(Card)`
font-family: 'Capriola', sans-serif;
min-width:60vw;
`;

const JobSummary = ({career}:any):JSX.Element => {

    const anSal = career.annualSalary.toFixed(2);
    const grossSal = career.annualSalary / 12;
    const fedTax = career.federalTax.toFixed(2);
    const socialS = career.socialSecurity.toFixed(2);
    const medicare = career.medicare.toFixed(2);
    const sTax = career.stateTax.toFixed(2);
    const edu = career.education;
    const position = career.position;

    const netMonth = (grossSal - fedTax - socialS -medicare - sTax); 

    const vowel = new Set(['A','E','I','O','U'])

    const [grammar, setGram] = useState("a")
    const [flag, setFlag] = useState(false)

    if(vowel.has(position.charAt(0)) && flag == false){
        setGram("an");
        setFlag(true);
    }


    return(
            <Card2>    
                You were hired as {grammar} {position}, 
                which requires an education level of at least a {edu}! <br/>

                <hr/><br/>

                As {grammar} {position}, you will make <Green>${anSal}</Green> a year.<br/><br/>

                This means your gross monthly salary is <Green>${grossSal.toFixed(2)}</Green><br/><br/>

                You will have to pay the following taxes:
                    
                    <ul>        
                        <li>Federal Taxes: <Red>${fedTax}</Red></li>
                        <li>Social Security: <Red>${socialS}</Red></li>
                        <li>Medicare: <Red>${medicare}</Red></li>
                        <li>State Tax: <Red>${sTax}</Red></li>
                    </ul>

                    <br/>Which means your net monthly income is <Green>${netMonth.toFixed(2)}</Green>!

            </Card2>
        
        
        )
}

export default JobSummary;