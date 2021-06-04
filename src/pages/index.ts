import React from 'react';

const Startpage = React.lazy(() => import('./Startpage'));
const Setting = React.lazy(() => import('./Setting'));
const Simulation = React.lazy(() => import('./Simulation'));
const Signup = React.lazy(() => import('./Signup'));
const AdminPanel = React.lazy(() => import('./AdminPanel'));

export { Startpage, Setting, Simulation, Signup, AdminPanel };
