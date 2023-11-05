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
import AddWorkout from './pages/workout/addWorkout.jsx';
import EditWorkout from './pages/workout/editWorkout.jsx';
import AddMeal from './pages/meal/addMeal.jsx';
import EditMeal from './pages/meal/editMeal.jsx';
import AddGoal from './pages/goal/addGoal.jsx';
import EditGoal from './pages/goal/editGoal.jsx';
import ViewGoalPage from './pages/goal/viewGoal.jsx';
import ViewWorkoutPage from './pages/workout/viewWorkout.jsx';
import ViewMealPage from './pages/meal/viewMeal.jsx';

const routes = () => [
  {
    path: '/',
    element: <MainScreen />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  { //login and register routes here -----------------------//
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
  {//goal routes here ----------------------------------//
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
  },
  {
    path: 'viewgoal/:goalId',
    element: <ViewGoalPage />,
  },
  {//workout routes here ----------------------------------//
    path: 'workout',
    element: <Workout />,
  },
  {
    path: 'addworkout',
    element: <AddWorkout />
  },
  {
    path: 'editworkout/:workoutId',
    element: <EditWorkout />
  },
  {
    path: 'viewworkout/:workoutId',
    element: <ViewWorkoutPage />
  },
  {//meal routes here ----------------------------------//
    path: 'meal',
    element: <Meal />,
  },

  {
    path: 'addmeal',
    element: <AddMeal />,
  },
  {
    path: 'editmeal/:mealId',
    element: <EditMeal />,
  },
  {
    path: 'viewmeal/:mealId',
    element: <ViewMealPage />
  }
];

export default routes;
