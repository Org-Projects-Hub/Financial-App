import React from 'react';
import styled from 'styled-components';
import {Students} from '../components';
import { users, classes } from '../fakeJson';
import { Link } from 'react-router-dom';

const BackButton = styled.button`
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

const AddStudent = styled.button`
    color: white;
    background-color: #d67762;
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

const ClassTitle = styled.div`
    text-align: center;
    font-size: 200%;

`;




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

        <Border>
            <Link to="/classes"><BackButton>&lt; Back</BackButton></Link>
            <Link to="/setting"><SettingsButton><i style={{fontSize: '400%', backgroundColor: '#f1f1f1'}} className="fas fa-cog"></i></SettingsButton></Link>
            <AddStudent>Add Student</AddStudent>

            <Container>
                <ClassTitle>{classs.className}</ClassTitle>
                <p style={{fontSize: '125%'}}>Code: {classs.classCode}</p>

                <Students array={classs.requests} title='Needs Confirming'></Students>
                <Students array={classs.registered} title='Registered'></Students>
                <Students array={classs.completed} title='Completed'></Students>

            </Container>
        </Border>
    );
};

export default ClassDashboard;
