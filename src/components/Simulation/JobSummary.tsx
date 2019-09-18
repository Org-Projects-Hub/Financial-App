import React  from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
`;


const JobSummary = ({career}:any) => {

    const anSal = career.annualSalary.toFixed(2);
    const grossSal = career.annualSalary / 12;
    const fedTax = career.federalTax.toFixed(2);
    const socialS = career.socialSecurity.toFixed(2);
    const medicare = career.medicare.toFixed(2);
    const sTax = career.stateTax.toFixed(2);
    const edu = career.education;

    const netMonth = (grossSal - fedTax - socialS -medicare - sTax); 

    return(
    
            <Wrapper>
            
                You were hired as a {career.position}, 
                which requires an education level of at least {edu} <br/>

                Your annual salary is ${anSal} <br/>

                You gross ${grossSal.toFixed(2)} a month.<br/>

                Your taxes include: 
                    <table>
                        <th></th>
                            <tr>
                                <td>Federal Taxes: ${fedTax}</td>
                            </tr>
                            <tr>
                                <td>Social Security: ${socialS}</td>
                            </tr>
                            <tr>
                                <td>Medicare: ${medicare}</td>
                            </tr>
                            <tr>
                                <td>State Tax: ${sTax}</td>
                            </tr>
                    </table>

                Which means you bring home ${netMonth.toFixed(2)}!

            </Wrapper>
        
        
        )
}

export default JobSummary;