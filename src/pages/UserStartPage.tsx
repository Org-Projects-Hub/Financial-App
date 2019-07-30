import React from 'react';
import styled from 'styled-components';
import { Class } from '../components';
import { classes, users } from '../fakeJson';
import { Link } from 'react-router-dom';


const Border = styled.div`
    margin: 0px;
    background-color: #f1f1f1;
    min-height: 100vh;
`;

const Container = styled.div`
    padding: 2% 0px;
    margin: 0px 15%;
    background-color: white;
    min-height: 100vh;
    text-align: center;
    box-shadow: 0px 0px 20px 5px gray;

`;

const HomeButton = styled.button`
    text-align: center;
    border-radius: 0.5em;
    font-size: 120%;
    width: 10%;
    padding: 1%;
    position: fixed;
    top: 5%;
    left: 6%;
    transition: transform 750ms;

    &:hover {
        transform: scale(1.25);
    }

`;

/* const AnotherButton = styled(HomeButton)`
    
`; */

const AddClass = styled.button`
    color: white;
    background-color: #d6a862;
    text-align: center;
    border-radius: 0.5em;
    font-size: 120%;
    width: 10%;
    padding: 1%;
    position: fixed;
    bottom: 10%;
    right: 2%;

    transition: transform 750ms;

    &:hover {
        transform: scale(1.25);
    }

`;


const SettingsButton = styled.button`
    border: 0;
    position: fixed;
    top: 5%;
    right: 4.5%;
    transition: transform 750ms;

    &:hover {
        transform: scale(1.5);
    }

`;



const UserStartPage = (props: any) => {

    //const userName = 'BJones';
    const userName = 'JessieB';

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


    return(
        <Border>
                <Link to="/home"><HomeButton>&lt; Home</HomeButton></Link>
                <Link to="/setting"><SettingsButton><i style={{fontSize: '400%', backgroundColor: '#f1f1f1'}} className="fas fa-cog"></i></SettingsButton></Link>
                
                {
                    user.accountType === 'teacher' ? 
                    
                        <AddClass style={{backgroundColor: '#d6a862'}}>Add Class</AddClass> 
                        : 
                        <AddClass style={{backgroundColor: '#649d96'}}>Join Class</AddClass>
                }

            <Container>
                {classObjs.length >= 1 ? classObjs.map((cla: object, index: number) => 
                    <div key={index}>
                        <Class classObj={cla} accountType={user.accountType} />
                    </div>
                ) : <div></div> }
            </Container>
        </Border>

    );
};

export default UserStartPage;