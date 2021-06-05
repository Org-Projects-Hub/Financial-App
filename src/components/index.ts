import React from 'react';

import Header from './shared-components/Header';
import Loader from './shared-components/Loader';
import Navbar from './shared-components/Navbar';

import SettingItem from './SettingItem';

import { Modal, InfoModal } from './shared-components/Modal';
import Hints from './shared-components/Hints';
import SelectInput from './shared-components/SelectInput';

const StudentDashboard = React.lazy(() => import('./classes/StudentDashboard'));
const ClassDetails = React.lazy(() => import('./classes/ClassDetails'));
const ClassStats = React.lazy(() => import('./classes/ClassStats'));
const TeacherDashboard = React.lazy(() => import('./classes/TeacherDashboard'));

const Login = React.lazy(() => import('./Login'));
const TestController = React.lazy(
  () => import('./simulation/test1/TestController')
);
const RunSimulation = React.lazy(
  () => import('./simulation/booth/RunSimulation')
);
const Spinner = React.lazy(() => import('./simulation/booth/Spinner'));
const JobSummary = React.lazy(() => import('./simulation/booth/JobSummary'));
const Booth = React.lazy(() => import('./simulation/booth/Booth'));
const BoothSelect = React.lazy(() => import('./simulation/booth/BoothSelect'));
const TestLayout = React.lazy(() => import('./simulation/test1/TestLayout'));

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
  Spinner,
  JobSummary,
  Booth,
  BoothSelect,
  TestLayout,
  ClassDetails,
  ClassStats,
};
