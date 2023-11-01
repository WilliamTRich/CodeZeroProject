//Imports
import { Navigate } from 'react-router-dom';

//Pages
import MainScreen from './pages/mainscreen/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import Login from './pages/login-reg/Login.jsx';
import Register from './pages/login-reg/Register.jsx';
import Chat from './pages/chat/Chat';
import Calendar from './pages/calendar/index.jsx';
import Workout from './pages/workout/index.jsx';
import Meal from './pages/meal/index.jsx';
import Goal from './pages/goal/index.jsx';

import {Nav} from './components/Nav.jsx';


const routes = () => [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/',
    element: <MainScreen />,
  },
  {
    path: 'client-login',
    element: <Login userType={'client'} />,
  },
  {
    path: 'client-register',
    element: <Register userType={'client'} />,
  },
  {
    path: 'trainer-login',
    element: <Login userType={'trainer'} />,
  },
  {
    path: 'trainer-register',
    element: <Register userType={'trainer'} />,
  },
    {
        path: 'chat',
        element: <Chat />,
    },
    {
        path: 'calendar',
        element: <Calendar />,
    },
    {
        path: 'workout',
        element: <Workout />,
    },
    {
        path: 'meal',
        element: <Meal />,
    }
    ,
    {
        path: 'goal',
        element: <Goal />,
    }
];

export default routes;
