//Imports
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

//Components
import Dashboard from './pages/dashboard/index';
import Login from './pages/login-reg/index';
import MainScreen from './pages/mainscreen/index.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainScreen />,
    },
    {
        path: 'dashboard',
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
