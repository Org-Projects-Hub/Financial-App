import React from 'react';
import styled from 'styled-components';
import { Class } from '../components';
import { classes, users } from '../fakeJson';
import { Link } from 'react-router-dom';
import { Border, Container, HomeButton, AddClass, SettingsButton, ResourcesButton } from '../style/styled';


const JoinClass = styled(AddClass)``;


const UserStartPage = (props: any) => {

    let userName;

    userName = 'BJones'; //requests
    userName = 'JMe'; //registered
    userName = 'KilUm'; // registered and completed

    userName = 'JessieB'; //teacher

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

    user.accountType !== 'teacher' ? buttonBackgroundColor = '#649d96' : buttonBackgroundColor = '#d6a862';



    return(
        <Border>
                <Link to="/home"><HomeButton>&lt; Home</HomeButton></Link>
                <Link to="/setting"><SettingsButton><i style={{fontSize: '400%', backgroundColor: '#f1f1f1'}} className="fas fa-cog"></i></SettingsButton></Link>
                <Link to="/resources"><ResourcesButton style={{backgroundColor: buttonBackgroundColor}}>Resources</ResourcesButton></Link>

                {
                    user.accountType === 'teacher' ?

                        <AddClass style={{backgroundColor: buttonBackgroundColor}}>Add Class</AddClass>
                        :
                        <JoinClass style={{backgroundColor: buttonBackgroundColor}}>Join Class</JoinClass>
                }

            <Container>
                {classObjs.length >= 1 ? classObjs.map((cla: object, index: number) =>
                    <div key={index}>
                        <Class classObj={cla} accountType={user.accountType} userObj={user} />
                    </div>
                    ) 
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
