import React from 'react';
import styled from 'styled-components';
import { Students, UserModal } from '../components';
import { classes } from '../fakeJson';
import { Link } from 'react-router-dom';
import SettingsGear from '../assets/images/settingsGear.png';
import { Border, Container, SettingsButton, AddStudent, BackButton} from '../style/styled';



const ClassTitle = styled.div`
    text-align: center;
    font-size: 200%;
`;

//ghjkh

// This component is strcitly for the teachers to control whats going on with each class, when a teacher clicks on a class this is what pops up.
const ClassDashboard = (props : any) => {

    const [modal, setModal] = React.useState(false);

    // Getting the class id from the URL
    const url = window.location.href;
    const slash = url.lastIndexOf("/");

    // Loops through the classes array and returns the data associated with that class. If the class doesn't exist, throw an error.
    function getUser(classID: any)
    {
        for (let x = 0; x < classes.length; x++)
        {
            if (classID === classes[x].id)
            {
                return classes[x]
            }
        }

        return -1;
    }

    const classs = getUser(url.substring(slash+1));

    if (classs === -1)
    {
        throw new Error("Class Not Found");
    }



    return(

        <Border>
            <Container>
                <ClassTitle>{classs.className}</ClassTitle>
                <p style={{fontSize: '125%'}}>Code: {classs.classCode}</p>

                {/* Passes the appropriate array of student username's to the Students component */}
                <Students array={classs.requests} title='Needs Confirming'></Students>
                <Students array={classs.registered} title='Registered'></Students>
                <Students array={classs.completed} title='Completed'></Students>

                {/* Buttons for navigation */}
                <AddStudent onClick={()=>setModal(true)}> Add Student</AddStudent>
                <div style={{width: "100%"}}><Link to="/classes"><BackButton>&lt; Back</BackButton></Link></div>
                <div style={{width: "100%"}}><Link to="/setting"><SettingsButton src={SettingsGear}></SettingsButton></Link></div>

                <UserModal backgroundColor='#d67762' modalTitle='Enter Student Username' inputText='Student Username' buttonText='Add' show={modal} onClose={()=>setModal(false)}></UserModal>
            </Container>
        </Border>
    );
};

export default ClassDashboard;
