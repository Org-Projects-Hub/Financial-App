import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Class, UserModal, Loader, TakeSimModal } from '..';
import { Border, Container, AddClass, Grid } from '../../style/styled';
import api from '../../api/index';
import noData from '../../assets/no-data.svg';


/* const JoinClass = styled(AddClass)`
    @media screen and (max-width: 879px) {
        position: relative;
        width: 50vw;
        margin: 2% 3%;
    }
`;
const TakeSim = styled(AddClass)`
    bottom: 26%;
    @media screen and (max-width: 879px) {
        position: relative;
        width: 50vw;
        margin: 2% 3%;
      }
`; */

interface ClassState {class: any[], contentLoaded: boolean, error: boolean, modal : boolean };

let initialState: ClassState = { class: [], contentLoaded: false, error: false, modal : false }; 

type Action = { type: string, class ?: any[], contentLoaded ?: boolean, error ?: boolean, modal ?: boolean };

function reducer(state: ClassState = initialState, action: Action): ClassState {
    switch (action.type) {
        case 'GET_CLASSES':
            console.log(action.class)
            return {
                class: action.class,
                contentLoaded: true,
                error: action.error || false,
                modal: false
            };

        case 'CREATE_CLASS':
            return {
                class: action.class.concat(state.class),
                contentLoaded: true,
                error: action.error || false,
                modal: false
            };
        case 'API_CALL':
            return {
                ...state,
                contentLoaded: false
            };
        case 'ERROR':
            return {
                ...state,
                error: true
            };
        case 'DISABLE_MODAL':
            return {
                ...state,
                modal: false
            };
        case 'ACTIVATE_MODAL':
            return {
                ...state,
               modal: true
            };
        default:
            JSON.parse(JSON.stringify(state))
    };
}


//This page is the container for the first page that a user sees when they log in, it renders the simulations / current class components and all the buttons.
const UserStartPage = (props: any) : JSX.Element=> {
    const [takeSimModal, setTakeSimModal] = useState<boolean>(false);
    const [state, dispatch ] = useReducer(reducer, initialState);
    let { user } = props;
    // determines button color depending on account type
    let buttonBackgroundColor =  user.account === 'teacher'? '#d6a862' : user.account === 'student'? '#649d96' : '#ffa51a';

    let getInitClasses = () => {
        dispatch({type: 'API_CALL'});
        api.getClass()
            .then((res)=> {
                if(res.success)dispatch({type: 'GET_CLASSES', class: res.class});
                else dispatch({type: 'GET_CLASSES', error: true, class: [] });
            })
            .catch((err)=>alert(err));
    }
    
    let createNewClass = ({className, school} : any) => {
        dispatch({type: 'API_CALL'});
        api.createClass({className, school})
            .then((res) => {
                console.log(res)
                if(res.success) dispatch({type: 'CREATE_CLASS', class:  [{c_id : res.class}]});
                else alert(res.message);
            })
            .catch((err) => {alert(err)})
            .finally(() => dispatch({ type: 'DISABLE_MODAL'}))
    }
    
    let joinClass = ({code}: any) => {
        dispatch({type: 'API_CALL'});
        api.addClass({code})
            .then((res) => {
                if(!res.success) alert(res.message);
                else getInitClasses();
            })
            .catch((err) => {alert(err)})
            .finally(() =>  dispatch({ type: 'DISABLE_MODAL'}));
    }

    useEffect(() => {getInitClasses()}, []);
    return(
        <>{state.contentLoaded ?     
            <Border>
                <Container>
                    {/* if there are classes in the classObjs array, loop over each element, if not display <p> tag */}
                    {state.class.length >= 1 ?
                        state.class.map((cla: any, index: number) =>
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
                                    <AddClass style={{backgroundColor: buttonBackgroundColor}} onClick={()=>dispatch({type: 'ACTIVATE_MODAL'})}>Add Class</AddClass>
                                    <UserModal 
                                        createNewClass={createNewClass}  
                                        accountType={user.account} 
                                        backgroundColor={buttonBackgroundColor} 
                                        modalTitle='Enter Class Name' 
                                        inputText='Class Name' 
                                        buttonText='Create' 
                                        show={state.modal} 
                                        onClose={()=>dispatch({type: 'ACTIVATE_MODAL'})}>
                                    </UserModal>
                                </div>
                                :       
                                // if the user is a student, display the JoinClass Component
                                <div>
                                    <AddClass style={{backgroundColor: buttonBackgroundColor}} onClick={()=>dispatch({type: 'ACTIVATE_MODAL'})}>Join Class</AddClass>
                                    <AddClass style={{backgroundColor: buttonBackgroundColor}} onClick={()=>setTakeSimModal(true)}>Take Simulation</AddClass>
                                    <UserModal 
                                        joinClass={joinClass} 
                                        accountType={user.account} 
                                        backgroundColor={buttonBackgroundColor} 
                                        modalTitle='Enter Class Code' 
                                        inputText='Class Code' 
                                        buttonText='Join' 
                                        show={state.modal} 
                                        onClose={()=>dispatch({type: 'ACTIVATE_MODAL'})}>
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
