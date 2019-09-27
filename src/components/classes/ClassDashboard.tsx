import React from 'react';
import styled from 'styled-components';
import { Students, UserModal, Loader } from '..';
import { Link } from 'react-router-dom';
import { Border, Container, AddStudent, BackButton} from '../../style/styled';
import api from '../../api';


const ClassTitle = styled.div`
    text-align: center;
    font-size: 200%;`;

// This component is strcitly for the teachers to control whats going on with each class, when a teacher clicks on a class this is what pops up.
const ClassDashboard = (props : any):JSX.Element => {

    const [modal, setModal] = React.useState(false);
    const [contentLoaded, setContentLoaded] = React.useState(false);
    const [students, setStudents] = React.useState();
    const [classTitle, setClassTitle] = React.useState('');

    // Getting the class id from the URL
    const url = window.location.href;
    const slash = url.lastIndexOf("/");
    const code = url.substring(slash+1);

    let getClassStudents = () => {
        api.getClass()
            .then((res)=> {
                if(res.success){
                    for(let x = 0; x < res.class.length; x ++) {
                      if (res.class[x].c_id.code === code){
                            setClassTitle(res.class[x].c_id.className);
                            return;
                        }
                    }
                }
                else alert(res.message);
            })
            .catch((err)=>{
                alert(err);
            })

        api.getStudent(code)
        .then((res) => {
            if (res.success) {
                setStudents(res.students);
            } else {
                alert(res.message);
            }
            
            setContentLoaded(true);
        })
        .catch((err) => {
            alert(err);
            setContentLoaded(true);
        })
    }


    let addStudent = () => {
        alert('waiting on route in backend');
    }

    let verifyStudentRequest = ({code, s_id} : any) => {

        setContentLoaded(false);

        api.verifyStudent({code, s_id})
            .then((res) => {
                if (res.success) {
                alert(res.message);}
                setContentLoaded(true);
                getClassStudents();
            })
            .catch((err) => {
                alert(err);
                setContentLoaded(true);
            })
    }


    React.useEffect(() => {getClassStudents()}, []);

    return(
        <>{contentLoaded ? 
            
            <Border>
                <Container>
                    <ClassTitle>{classTitle}</ClassTitle>
                    <p style={{fontSize: '125%'}}>Code: {code}</p>

                    {/* Passes the appropriate array of student username's to the Students component */}
                    <Students verifyStudentRequest={verifyStudentRequest} code={code} array={students.unVerifiedstudents} title='Needs Confirming'></Students>
                    <Students verifyStudentRequest={verifyStudentRequest} code={code} array={students.verifiedstudents} title='Registered'></Students>
                    <Students verifyStudentRequest={verifyStudentRequest} code={code} array={students.completedStudents} title='Completed'></Students>

                    {/* Buttons for navigation */}
                    <AddStudent onClick={()=>setModal(true)}> Add Student</AddStudent>
                    <div style={{width: "100%"}}><Link to="/classes"><BackButton>&lt; Back</BackButton></Link></div>
                    {/* <div style={{width: "100%"}}><Link to="/setting"><SettingsButton src={SettingsGear}></SettingsButton></Link></div>*/}
                    <UserModal addStudent={addStudent} backgroundColor='#d67762' modalTitle='Enter Student Username' inputText='Student Username' buttonText='Add' show={modal} onClose={()=>setModal(false)}></UserModal>
                </Container>
            </Border>       
            :         
            <Loader />
        }
        </>
    );
};

export default ClassDashboard;
