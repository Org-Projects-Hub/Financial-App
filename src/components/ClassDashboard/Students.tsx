import React from 'react';
import styled from 'styled-components';
import { Grid, GridColItem } from '../../style/styled';
import { users } from '../../fakeJson';
import RedX from '../assets/images/red_x.png';




const InfoTitle = styled.div`
    text-align: left;
    font-size: 175%;
    margin-top: 4%;
    margin-bottom: 1%;
    margin-left: 4%;
`;

//margin: 0px 20% 1% 20%;

const StudentDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    place-items: center;
    padding: 2%;
    background: white;
    border: 2px solid blue;
    border-radius: 1em;
    overflow: hidden;
    margin-bottom: 2%;
    transition: box-shadow 500ms;

    &:hover {
        box-shadow: 5px 5px 15px 1px gray;
    }


    @media(max-width: 600px){
        display: inline-block;
    }
`;

const Btn = styled.i`
    cursor: pointer;
    background: white;
    border: 0;
    transition: text-shadow 500ms;

    &:hover {
        text-shadow: 2px 2px 7px gray;
    }
`;




// This component is made to condense the repetition of code on the ClassDashboard component since the only difference would be the Title and the array that's being used.
const Students = (props: any) => {


    const [code, setCode] = React.useState(props.code);
 
  

    return (
        <div>
            <InfoTitle>{props.title}: {props.array.length}</InfoTitle>

            {/* For every student that was found, display a StudentDiv for each one */}
            {props.array.map((student: any, index: number) => 
                
                <Grid cols="16" >
                    <GridColItem colStart="2" colEnd="13" align="" >
                        {console.log(student)}
                        <StudentDiv>
                            <GridColItem colStart="1" colEnd="1" align="center">{student.u_id.firstName + ' ' + student.u_id.lastName}</GridColItem>
                            {/* <GridColItem colStart="2" colEnd="3" align="center">{student.age}</GridColItem>
                            <GridColItem colStart="3" colEnd="5" align="center">{student.grade}</GridColItem>
                            <GridColItem colStart="6" colEnd="8" align="center">{student.email}</GridColItem> */}
                        </StudentDiv>
                    </GridColItem>
                    <GridColItem colStart="14" colEnd="15" align="">
                        { 
                            props.title === "Needs Confirming" ? 

                            <Btn style={{color: "green", fontSize: "320%"}} className="material-icons" 
                            onClick={() => {
                                let s_id = student._id;
                                props.verifyStudentRequest({code, s_id});
                            }}>check_circle</Btn> 
                            :
                            null 
                        }
                    </GridColItem>
                    <GridColItem colStart="15" colEnd="16" align="">
                        { 
                            props.title === "Needs Confirming" ? 
                            
                            <Btn style={{color: "red", fontSize: "320%"}} className="material-icons" onClick={() => console.log('button clicked')}>cancel</Btn> 
                            : 
                            null 
                        }
                    </GridColItem>
                    
                </Grid>
            )}

            <hr style={{margin: '4%'}}/>
        </div>

    );
}

export default Students;