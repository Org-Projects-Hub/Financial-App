import React from 'react';
import styled from 'styled-components';
import TeacherClass from './TeacherClass';
import ArchivedClass from './ArchivedClass';
import StudentClass from './StudentClass';

const Wrapper = styled.div`
    margin: 1em 0;
    width: 80%;
    text-align: center;
    display: inline-block;
`;


const Class = (props: any):JSX.Element => {
    const [isArchived, setIsArchived] = React.useState(false); /* Replace this with props.classObj.isArchived whenever it's added */

    return(
        <Wrapper id="wrap">

            {/* No matter what the account type, we want anything that is rendered to be centered */}
            <div id="other div" style={{width: '70%', display: 'inline-block', borderRadius: '1em', textAlign: 'center'}}>
            {   
                // if the user is a teacher display this class information
                props.userObj.account === 'teacher' ?  

                    isArchived ? /* Replace this with props.classObj.isArchived whenever it's added */
                        <ArchivedClass classProps={props}></ArchivedClass> 
                        : 
                        <TeacherClass classProps={props}></TeacherClass>

                    :

                    <StudentClass classProps={props}></StudentClass>

            }  
            </div>
        </Wrapper>
    );
};

export default Class;