//Imports
import { Navigate } from 'react-router-dom';

//Pages
import MainScreen from './pages/mainscreen/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import Login from './pages/login-reg/Login.jsx';
import Register from './pages/login-reg/Register.jsx';

const routes = (userId) => [
    {
        path: '/dashboard',
        element: userId ? <Dashboard /> : <Navigate to={'/'} />,
    },
    {
        path: '/',
        element: <MainScreen />,
    },
    {
        path: 'client-login',
        element: <Login userType={'client'} method={'Login'} />,
    },
    {
        path: 'client-register',
        element: <Register userType={'client'} method={'Register'} />,
    },
    {
        path: 'trainer-login',
        element: <Login userType={'trainer'} method={'Login'} />,
    },
    {
        path: 'trainer-register',
        element: <Register userType={'trainer'} method={'Register'} />,
    },
];

export default routes;
