import React from 'react';
import { Class } from '../components';
import { classes, users } from '../fakeJson';


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
        <div>
            <p>this is the user start page</p>

            {classObjs.length >= 1 ? classObjs.map((cla: object, index: number) => 
                <div key={index}>
                    <Class classObj={cla} accountType={user.accountType} />
                </div>
            ) : <div></div> }
        </div>
    );
};

export default UserStartPage;