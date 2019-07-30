import React from 'react';
import styled from 'styled-components';
import { users } from '../fakeJson';



const InfoTitle = styled.div`
    text-align: left;
    font-size: 175%;
    margin-top: 4%;
    margin-bottom: 1%;
    margin-left: 4%;
`;

const StudentDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0px 20% 1% 20%;
    padding: 2%;
    max-width: 600px;
    background: white;
    border: 2px solid blue;
    border-radius: 1em;
    overflow: hidden;
    transition: box-shadow 500ms;

    &:hover {
        box-shadow: 5px 5px 15px 1px gray;
    }
`;


const Students = (props: any) => {

    let studentArray: any;
    studentArray = [];

    
    props.array.map((student: string) => 
        {
            for (let x = 0; x < users.length; x++) {
                if (users[x].username === student) {
                    studentArray.push(users[x]);
                }
            }
        }
    );
    


    return (
        <div>
            <InfoTitle>{props.title}: {studentArray.length}</InfoTitle>

            {studentArray.map((student: any) => 
                <StudentDiv>
                    <p>{student.firstName + ' ' + student.lastName} - {student.age} - {student.grade} - {student.email}</p>
                </StudentDiv>
            )}
            <hr style={{margin: '4%'}}/>
        </div>


    );
}

export default Students;