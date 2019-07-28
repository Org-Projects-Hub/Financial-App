import React from 'react';
import styled from 'styled-components';
import { Class } from '../components';
import { classes, users } from '../fakeJson';


const Border = styled.div`
    margin: 0px;
    background-color: #f1f1f1;
    
`;

const Container = styled.div`
    padding: 2% 0px;
    margin: 0px 15%;
    background-color: white;
    min-height: 100%;
    text-align: center;
    box-shadow: 0px 0px 20px 5px gray;

`;

const Button = styled.div`

`;


const UserStartPage = ({userName}:{userName: string}) => {

    //userName = 'BJones';
    userName = 'JessieB';

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
            <Container>
                <Button> &lt; Home</Button>
                <Button><img src="" alt="settings"/></Button>
                <Button>Add Class</Button>
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