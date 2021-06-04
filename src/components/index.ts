import React from 'react';

import Header from './shared-components/Header';
import Loader from './shared-components/Loader';
import Navbar from './shared-components/Navbar';
import StudentDashboard from './classes/StudentDashboard';
import TeacherDashboard from './classes/TeacherDashboard';
//import PrePostTest from './simulation/test/PrePostTest';
import SettingItem from './SettingItem';
//import Results from './simulation/test/Results';
import { Modal, InfoModal } from './shared-components/Modal';
import Hints from './shared-components/Hints';
import SelectInput from './shared-components/SelectInput';

const Login = React.lazy(() => import('./Login'));
const TestController = React.lazy(
  () => import('./simulation/test1/TestController')
);
const RunSimulation = React.lazy(
  () => import('./simulation/booth/RunSimulation')
);

export {
  Header,
  Loader,
  Navbar,
  SettingItem,
  StudentDashboard,
  TeacherDashboard,
  Modal,
  Hints,
  SelectInput,
  RunSimulation,
  InfoModal,
  Login,
  TestController,
};
