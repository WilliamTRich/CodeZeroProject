//Imports
import { Navigate } from 'react-router-dom';

//Pages
import MainScreen from './pages/mainscreen/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import Login from './pages/login-reg/index.jsx';

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
        path: 'login',
        element: <Login />,
    },
];

export default routes;
