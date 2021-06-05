import React from 'react';

const Startpage = React.lazy(() => import('./Startpage'));
const Setting = React.lazy(() => import('./Setting'));
const Simulation = React.lazy(() => import('./Simulation'));
const Signup = React.lazy(() => import('./Signup'));
const Login = React.lazy(() => import('./Login'));
const ClassesPage = React.lazy(() => import('./Classes'));

export { Startpage, Setting, Simulation, Signup, ClassesPage, Login };
