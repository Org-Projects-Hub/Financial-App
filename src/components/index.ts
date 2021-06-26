import React from 'react';

import Header from './shared-components/Header';
import Loader from './shared-components/Loader';
import Navbar from './shared-components/Navbar';

import SettingItem from './settings/SettingItem';

import { Modal, InfoModal } from './shared-components/Modal';
import Hints from './shared-components/Hints';
import SelectInput from './shared-components/SelectInput';

const StudentDashboard = React.lazy(() => import('./classes/StudentDashboard'));
const ClassDetails = React.lazy(() => import('./classes/ClassDetails'));
const ClassStats = React.lazy(() => import('./classes/ClassStats'));
const TeacherDashboard = React.lazy(() => import('./classes/TeacherDashboard'));

const TestController = React.lazy(() => import('./tests/TestController'));
const RunSimulation = React.lazy(() => import('./simulation/RunSimulation'));
const Spinner = React.lazy(() => import('./jobs/Spinner'));
const JobSummary = React.lazy(() => import('./jobs/JobSummary'));
const Booth = React.lazy(() => import('./booth/Booth'));
const BoothSelect = React.lazy(() => import('./booth/BoothSelect'));
const TestLayout = React.lazy(() => import('./tests/TestLayout'));
const Evaluation = React.lazy(() => import('./simulation/Evaluation'));

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
  TestController,
  Spinner,
  JobSummary,
  Booth,
  BoothSelect,
  TestLayout,
  Evaluation,
  ClassDetails,
  ClassStats,
};
