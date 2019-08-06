import React from 'react';
import styled from 'styled-components';
import { Class } from '../components';
import { classes, users } from '../fakeJson';
import { Link } from 'react-router-dom';
import SettingsGear from '../assets/images/settingsGear.png';
import { Border, Container, HomeButton, AddClass, SettingsButton, ResourcesButton, TakeSim, Grid } from '../style/styled';


const JoinClass = styled(AddClass)``;

//This page is the container for the first page that a user sees when they log in, it renders the simulations / current class components and all the buttons.
const UserStartPage = (props: any) => {

    let userName;

    userName = 'BJones'; //requests
    userName = 'JMe'; //registered
    userName = 'KilUm'; // registered and completed
    userName = 'JessieB'; //teacher
    //userName = 'WaynesWorld'; //other

    // this interface is to avoid type errors with mapping elements from the user array
    interface userObject {
        username: string,
        accountType: string;
        classIds: Array<string>;
    };

    let user: userObject;
    let classObjs = [];


    // for each user in the user array, check for the current users' object/data, once you 
        // find it, loop through their class ids and add the class' data to the classObjs array
    for (let x = 0; x < users.length; x++) {
        if (users[x].username === userName) {

            user = users[x];

            for (let y = 0; y < classes.length; y++) {
                if (user.classIds.indexOf(classes[y].id) !== -1) {
                    classObjs.push(classes[y]);
                }
            }

            break;
        }
    }


    let buttonBackgroundColor;

    // determines button color depending on account type
    if (user.accountType === 'teacher') {
        buttonBackgroundColor = '#d6a862';

    } else if(user.accountType === 'student') {
        buttonBackgroundColor = '#649d96';

    } else {
        buttonBackgroundColor = '#ffa51a';
    }


    return(
        <Border>
            <Container>
                {/* if there are classes in the classObjs array, loop over each element, if not display <p> tag */}
                {classObjs.length >= 1 ? 

                    classObjs.map((cla: object, index: number) =>

                        // for every element in the classObjs array, display a class component while also passing the index, the classObj, and the current user to props
                        <Class num={index + 1} classObj={cla} accountType={user.accountType} userObj={user} />) 

                    : 

                    <div style={{textAlign: 'center', fontSize: '200%'}}>
                        <p>No classes registered</p>
                    </div> 
                }


                {/* This is where all the buttons are rendered on the page, in a browser the position is fixed so it doesn't matter 
                        where they are, but on mobile the position is changed to relative so they need to be at the bottom so they stack on the page. */}
                
                <Grid cols="1">
                    {   // if the user is a teacher, display the AddClass Component
                        user.accountType === 'teacher' ?

                            <AddClass style={{backgroundColor: buttonBackgroundColor}}>Add Class</AddClass>

                            : 

                            // if the user is a student, display the JoinClass Component
                            user.accountType === 'student' ?

                                <JoinClass style={{backgroundColor: buttonBackgroundColor}}>Join Class</JoinClass> 

                                : 

                                // if the user is neither a teacher or student, then display the TakeSimulation Component for the 'Other' account type
                                <TakeSim style={{backgroundColor: buttonBackgroundColor}}>Take New Simulation</TakeSim>
                    }

                    
                    <div style={{width: "100%"}}><Link to="/resources"><ResourcesButton style={{backgroundColor: buttonBackgroundColor}}>Resources</ResourcesButton></Link></div>
                    <div style={{width: "100%"}}><Link to="/home"><HomeButton>&lt; Home</HomeButton></Link></div>
                    <div style={{width: "100%"}}><Link to="/setting"><SettingsButton src={SettingsGear}></SettingsButton></Link></div>
                </Grid>
            </Container>
        </Border>

    );
};

export default UserStartPage;
