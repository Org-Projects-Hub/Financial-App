import React from 'react';
import { Class } from '../components';
import { users } from '../fakeJson';



const UserStartPage = ({userName}:{userName: string}) => {

    userName = 'BJones';

    interface userObject {
        accountType: string;
        classes: Array<string>;
    };

    let user: userObject;

    for (let x = 0; x < users.length; x++) {
        if (users[x].username == userName) {
            user = users[x];
            break;
        }
    }


    return(
        <div>
            <p>this is the user start page</p>

            {user.classes.map((cla: string, index: number) => 
                <div key={index} >
                    <Class id={cla} accountType={user.accountType} />
                </div>
            )}
        </div>
    );
};

export default UserStartPage;