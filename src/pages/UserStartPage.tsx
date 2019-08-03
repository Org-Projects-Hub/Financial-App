import React from 'react';
import styled from 'styled-components';
import { Class } from '../components';
import { classes, users } from '../fakeJson';
import { Link } from 'react-router-dom';
import SettingsGear from '../assets/images/settingsGear.png';
import { Border, Container, HomeButton, AddClass, SettingsButton, ResourcesButton, TakeSim } from '../style/styled';


const JoinClass = styled(AddClass)``;


const UserStartPage = (props: any) => {

    let userName;

    userName = 'BJones'; //requests
    userName = 'JMe'; //registered
    userName = 'KilUm'; // registered and completed

    //userName = 'JessieB'; //teacher

    userName = 'WaynesWorld';

    interface userObject {
        username: string,
        accountType: string;
        classIds: Array<string>;
    };

    let user: userObject;
    let classObjs = [];


    for (let x = 0; x < users.length; x++) {
        if (users[x].username === userName) {

            user = users[x];

            for (let y = 0; y < classes.length; y++) {
                if (user.classIds.indexOf(classes[y].id) != -1) {
                    classObjs.push(classes[y]);
                }
            }

            break;
        }
    }


    let buttonBackgroundColor;

    if (user.accountType === 'teacher') {
        buttonBackgroundColor = '#649d96';
    } else if(user.accountType === 'student') {
        buttonBackgroundColor = '#d6a862';
    } else {
        buttonBackgroundColor = '#ffa51a';
    }


    return(
        <Border>
            <Container>
                <Link to="/home"><HomeButton>&lt; Home</HomeButton></Link>
                <Link to="/setting"><SettingsButton src={SettingsGear}></SettingsButton></Link>
                <Link to="/resources"><ResourcesButton style={{backgroundColor: buttonBackgroundColor}}>Resources</ResourcesButton></Link>
            
                {
                    user.accountType === 'teacher' ?

                        <AddClass style={{backgroundColor: buttonBackgroundColor}}>Add Class</AddClass>
                        : 
                        user.accountType === 'student' ?
                            <JoinClass style={{backgroundColor: buttonBackgroundColor}}>Join Class</JoinClass> 
                            : 
                            <TakeSim style={{backgroundColor: buttonBackgroundColor}}>Take New Simulation</TakeSim>
                }
                
                {classObjs.length >= 1 ? classObjs.map((cla: object, index: number) =>
                    <Class num={index + 1} classObj={cla} accountType={user.accountType} userObj={user} />) 
                    : 
                    <div style={{textAlign: 'center', fontSize: '200%'}}>
                        <p>No classes registered</p>
                    </div> 
                }
            </Container>
        </Border>


    );
};

export default UserStartPage;
