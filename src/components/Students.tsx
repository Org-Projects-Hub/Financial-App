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

// This component is made to condense the repetition of code on the ClassDashboard component since the only difference would be the Title and the array that's being used.
const Students = (props: any) => {

    let studentArray: any;
    studentArray = [];

    // Loop through the array that's passed in, for every student user name, loop through the users array and get the users object and add it to the array.
    for (let x = 0; x < props.array.length; x++) {
        for (let y = 0; y < users.length; y++) {
            if (users[y].username === props.array[x]) {
                studentArray.push(users[y]);
            }
        }
    }
    
    
    
    
    
    
   /*  props.array.map((student: string) => 
    {
        for (let x = 0; x < users.length; x++) {
                if (users[x].username === student) {
                    studentArray.push(users[x]);
                }
            }
        }
    ); */
    


    return (
        <div>
            <InfoTitle>{props.title}: {studentArray.length}</InfoTitle>

            {/* For every student that was found, display a StudentDiv for each one */}
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