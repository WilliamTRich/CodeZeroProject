//Imports
import { Navigate } from 'react-router-dom';

//Pages
import MainScreen from './pages/mainscreen/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import Login from './pages/login-reg/Login.jsx';
import Register from './pages/login-reg/Register.jsx';
import Chat from './pages/chat/Chat';
import {Nav} from './components/Nav.jsx';
import ClientLogout from './components/ClientLogout.jsx';
import TrainerLogout from './components/TrainerLogout.jsx';

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
      path: 'client-logout',
      element: <ClientLogout userType={'client'} />,
    },
    {
      path: 'trainer-logout',
      element: <TrainerLogout userType={'trainer'}/>,
    }
];

export default routes;
