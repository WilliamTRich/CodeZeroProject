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
import  AddWorkout  from './pages/workout/addWorkout.jsx';
import  EditWorkout  from './pages/workout/editWorkout.jsx';
import  AddMeal  from './pages/meal/addMeal.jsx';
import  EditMeal  from './pages/meal/editMeal.jsx';
import  AddGoal  from './pages/goal/addGoal.jsx';
import EditGoal  from './pages/goal/editGoal.jsx';

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
        path: 'addworkout',
        element: <AddWorkout />,
    },
    {
        path: 'editworkout',
        element: <EditWorkout />,
    },
    {
        path: 'meal',
        element: <Meal />,
    },
    
    {
        path: 'addmeal',
        element: <AddMeal />,
    },
    {
        path: 'editmeal',
        element: <EditMeal />,
    },
    {
        path: 'goal',
        element: <Goal />,
    },
    {
        path: 'addgoal',
        element: <AddGoal />,
    },
    {
        path: 'editgoal/:goalId',
        element: <EditGoal />,
    }
];

export default routes;
