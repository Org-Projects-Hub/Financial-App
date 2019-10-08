import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Class, UserModal, Loader, TakeSimModal } from '..';
import { Border, Container, AddClass, Grid } from '../../style/styled';
import api from '../../api/index';
import noData from '../../assets/no-data.svg';


const JoinClass = styled(AddClass)`
    
`;
const TakeSim = styled(AddClass)`
    bottom: 26%; 
`;

interface State {class: any[], contentLoaded: boolean };

let initialState: State = { class: [], contentLoaded: true} 

type Action = { type: 'GET_CLASSES', classes ?: any[], contentLoaded ?: boolean  };

function reducer(state : any = initialState, action : Action){
    switch (action.type){
        case'GET_CLASSES':
        return {
            class: action.classes,
            contentLoaded: true
        };
    default:
      state.toObject();
    };
}

//This page is the container for the first page that a user sees when they log in, it renders the simulations / current class components and all the buttons.
const UserStartPage = (props: any) :JSX.Element=> {

    const [modal, setModal] = useState<boolean>(false);
    const [takeSimModal, setTakeSimModal] = useState<boolean>(false);
    const [contentLoaded, setContentLoaded] = useState<boolean>(false);
    const [resClass, setResClass] = useState<Array<any>>([]);
    const [classes, dispatch ] = useReducer(reducer, {class: [], contentLoaded: true});
    let { user } = props;


    console.log(resClass);
    
    // determines button color depending on account type
    let buttonBackgroundColor =  user.account === 'teacher' ? '#d6a862' : user.account === 'student'? '#649d96' : '#ffa51a';

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
                            <Class classObj={cla} userObj={user} key={index} />)

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
                                    <TakeSim style={{backgroundColor: buttonBackgroundColor}} onClick={()=>setTakeSimModal(true)}>Take Simulation</TakeSim>
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
                                    <TakeSimModal 
                                        backgroundColor={buttonBackgroundColor}  
                                        show={takeSimModal} 
                                        onClose={()=>setTakeSimModal(false)}>
                                    </TakeSimModal>
                                </div>
                        }

                    </Grid>
                </Container>
            </Border>
            :
           <Loader />
        } </>

    );
};

export default UserStartPage;
