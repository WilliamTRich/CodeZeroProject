//Imports
import { Routes } from 'react-router-dom';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from 'react-router-dom';
import Dashboard from './pages/dashboard/index';
import Login from './pages/login-reg/index';
import MainScreen from './pages/mainpage/index';
import Chat from './pages/chat/Chat';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainScreen/>,
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'chat',
        element: <Chat />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
