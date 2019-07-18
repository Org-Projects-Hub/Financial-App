import React, { useState } from 'react';
import styled from 'styled-components';
import {ModalTemp} from './Modal';

const Paragraph = styled.p `
    font-size: 180%;
    margin: 1%;`;


const TeamMember = (props : any) => {
    const [modal, setModal] = useState(false);
    const {firstName, lastName, email, currentProjects, finishedProjects, username} = props;
    return(
        <a href={"/profilepage/" + username} /* onClick={()=>setModal(!modal)}*/ style={{padding: "1% 10% 1% 10%"}} id={username}>
            <Paragraph >Name: {firstName} {lastName}</Paragraph>
            <Paragraph >Email: {email}</Paragraph>
            <Paragraph >Current Projects: {currentProjects}</Paragraph>
            <Paragraph >Finished Projects: {finishedProjects}</Paragraph>
            {modal &&  <ModalTemp show={modal} {...props} onClose={()=>setModal(!modal)}/> }
        </a>
    );
}

export default TeamMember;
