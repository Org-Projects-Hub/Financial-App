import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Class, UserModal, Loader } from '../components';
import { classes, users } from '../fakeJson';
import { Link } from 'react-router-dom';
import SettingsGear from '../assets/images/settingsGear.png';
import { Border, Container, HomeButton, AddClass, SettingsButton, ResourcesButton, TakeSim, Grid } from '../style/styled';
import api from '../api/index';
//import console = require('console');


const JoinClass = styled(AddClass)``;

//This page is the container for the first page that a user sees when they log in, it renders the simulations / current class components and all the buttons.
const UserStartPage = (props: any) => {

    const [modal, setModal] = useState(false);
    const [contentLoaded, setContentLoaded] = useState(false);
    let userName;

  /*   userName = 'BJones'; //requests
    userName = 'JMe'; //registered
    userName = 'KilUm'; // registered and completed*/
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
            /* could redo this, for each class id in the user class id array, check if the class exists, if it does, return the class object, if not return null or false or something  */
            for (let y = 0; y < /* need to get total amount of classes */ classes.length; y++) {
                if (user.classIds.indexOf( /* need to see if current class id is in the users class id array */classes[y].id) !== -1) {
                    classObjs.push(/* need to push entire class object into arrray for .mapping() */ classes[y]);
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


   let getInitClasses = () => {
        if(!contentLoaded){
            api.getClass()
                .then((res)=> {
                    classObjs.push(res);
                    console.log(res);
                    setContentLoaded(true);

                })
                .catch((err)=>{
                    alert(err);
                    setContentLoaded(true);
                });
            }
    }

    let createNewClass = ({className, schoolName} : any) => {
        setContentLoaded(false);

        api.createClass({className, schoolName})
            .then(() => {
                getInitClasses();
            })
            .catch((err) => {alert(err)})
    }

    useEffect(() => {getInitClasses()}, []);

    return(


        <>{contentLoaded ?
            <Border>

                <Container>
                    {/* if there are classes in the classObjs array, loop over each element, if not display <p> tag */}
                    {classObjs.length >= 1 ?

                        classObjs.map((cla: object, index: number) =>

                            // for every element in the classObjs array, display a class component while also passing the index, the classObj, and the current user to props
                            <Class num={index + 1} classObj={cla} userObj={user} />)

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

                                <div>
                                    <AddClass style={{backgroundColor: buttonBackgroundColor}} onClick={()=>setModal(true)}>Add Class</AddClass>
                                    <UserModal createNewClass={createNewClass}  accountType={user.accountType} backgroundColor={buttonBackgroundColor} modalTitle='Enter Class Name' inputText='Class Name' buttonText='Create' show={modal} onClose={()=>setModal(false)}></UserModal>
                                </div>
                                :

                                // if the user is a student, display the JoinClass Component
                                user.accountType === 'student' ?
                                    <div>
                                        <JoinClass style={{backgroundColor: buttonBackgroundColor}} onClick={()=>setModal(true)}>Join Class</JoinClass>
                                        <UserModal accountType={user.accountType} backgroundColor={buttonBackgroundColor} modalTitle='Enter Class Code' inputText='Class Code' buttonText='Join' show={modal} onClose={()=>setModal(false)}></UserModal>
                                    </div>
                                    :

                                    // if the user is neither a teacher or student, then display the TakeSimulation Component for the 'Other' account type
                                    <Link to='/simulation'>
                                        <TakeSim style={{backgroundColor: buttonBackgroundColor}}>Take New Simulation</TakeSim>
                                    </Link>
                        }


                        {/* <div style={{width: "100%"}}><Link to="/resources"><ResourcesButton style={{backgroundColor: buttonBackgroundColor}}>Resources</ResourcesButton></Link></div>
                        <div style={{width: "100%"}}><Link to="/home"><HomeButton>&lt; Home</HomeButton></Link></div>
                        <div style={{width: "100%"}}><Link to="/setting"><SettingsButton src={SettingsGear}></SettingsButton></Link></div> */}

                    </Grid>
                </Container>
            </Border>

            :

            <Loader />
        } </>

    );
};

export default UserStartPage;
