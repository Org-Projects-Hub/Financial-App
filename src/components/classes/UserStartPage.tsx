import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Class, UserModal, Loader } from '..';
import { Link } from 'react-router-dom';
import { Border, Container, AddClass, TakeSim, Grid } from '../../style/styled';
import api from '../../api/index';
import noData from '../../assets/no-data.svg'
const JoinClass = styled(AddClass)``;

//This page is the container for the first page that a user sees when they log in, it renders the simulations / current class components and all the buttons.
const UserStartPage = (props: any) :JSX.Element=> {

    const [modal, setModal] = useState(false);
    const [contentLoaded, setContentLoaded] = useState(false);
    const [resClass, setResClass] = useState([]);
    let user = props.user;

    let buttonBackgroundColor;

    // determines button color depending on account type
    if (user.account === 'teacher') {
        buttonBackgroundColor = '#d6a862';

    } else if(user.account === 'student') {
        buttonBackgroundColor = '#649d96';

    } else {
        buttonBackgroundColor = '#ffa51a';
    }

   let getInitClasses = () => {
        api.getClass()
            .then((res)=> {
                if(res.success)setResClass(res.class);
                else alert(res.message);
                setContentLoaded(true);
            })
            .catch((err)=>{
                alert(err);
                setContentLoaded(true);
            })
            .finally(() => {setModal(false)});   
    }

    let createNewClass = ({className, school} : any) => {
        setContentLoaded(false);
        api.createClass({className, school})
            .then((res) => {
                if(res.success)setResClass([...resClass, res.class]);
                else alert(res.message);
                getInitClasses()
            })
            .catch((err) => {alert(err)})
            .finally(() => setModal(false))
    }

    let joinClass = ({code}: any) => {
        setContentLoaded(false);
        api.addClass({code})
            .then((res) => {
                if(!res.success) {
                    alert(res.message);
                    setContentLoaded(true);
                }
                else getInitClasses();
            })
            .catch((err) => {alert(err)})
            .finally(() => {setModal(false)});
    }

    useEffect(() => {getInitClasses()}, []);

    return(
        <>{contentLoaded ?
            <Border>
                <Container>
                    {/* if there are classes in the classObjs array, loop over each element, if not display <p> tag */}
                    {resClass.length >= 1 ?

                        resClass.map((cla: any, index: number) =>

                            // for every element in the classObjs array, display a class component while also passing the index, the classObj, and the current user to props
                            <Class num={index + 1} classObj={cla.c_id} userObj={user} key={index} />)
                        :
                        <div style={{textAlign: 'center', fontSize: '200%'}}>
                            <div className="centered-img">
                                <img className="img-lg" src={noData} alt="No Data" />
                            <p className="center bold">No classes registered</p>
                            </div>
                        </div>
                    }

                    {/* This is where all the buttons are rendered on the page, in a browser the position is fixed so it doesn't matter
                            where they are, but on mobile the position is changed to relative so they need to be at the bottom so they stack on the page. */}

                    <Grid cols="1">
                        {   // if the user is a teacher, display the AddClass Component
                            user.account === 'teacher' ?

                                <div>
                                    <AddClass style={{backgroundColor: buttonBackgroundColor}} onClick={()=>setModal(true)}>Add Class</AddClass>
                                    <UserModal 
                                        createNewClass={createNewClass}  
                                        accountType={user.account} 
                                        backgroundColor={buttonBackgroundColor} 
                                        modalTitle='Enter Class Name' 
                                        inputText='Class Name' 
                                        buttonText='Create' 
                                        show={modal} 
                                        onClose={()=>setModal(false)}>
                                    </UserModal>
                                </div>
                                :
                                // if the user is a student, display the JoinClass Component
                                <div>
                                    <JoinClass style={{backgroundColor: buttonBackgroundColor}} onClick={()=>setModal(true)}>Join Class</JoinClass>
                                    <UserModal 
                                        joinClass={joinClass} 
                                        accountType={user.account} 
                                        backgroundColor={buttonBackgroundColor} 
                                        modalTitle='Enter Class Code' 
                                        inputText='Class Code' 
                                        buttonText='Join' 
                                        show={modal} 
                                        onClose={()=>setModal(false)}>
                                    </UserModal>
                                </div>

                                    // if the user is neither a teacher or student, then display the TakeSimulation Component for the 'Other' account type
                                   /*  <Link to='/simulation'>
                                        <TakeSim style={{backgroundColor: buttonBackgroundColor}}>Take New Simulation</TakeSim>
                                    </Link> */
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
