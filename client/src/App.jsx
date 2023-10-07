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
const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: 'login',
        element: <Login />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
