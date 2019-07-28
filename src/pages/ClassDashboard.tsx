import React from 'react';
import { classes } from '../fakeJson';


const ClassDashboard = (props : any) => {


    const url = window.location.href;
    const slash = url.lastIndexOf("/");
    
    function getUser(classID: any)
    {
        for (let x = 0; x < classes.length; x++)
        {
            if (classID === classes[x].id)
            {
                return classes[x]
            }
        }

        return -1;
    }
    
    const classs = getUser(url.substring(slash+1));


    if (classs === -1)
    {
        throw new Error("Class Not Found");
    }
            


    return(
        <div>
            <p>this is a class' dashboard</p>
            <p>Class Name: {classs.className}</p>
        </div>
    );
};

export default ClassDashboard;

