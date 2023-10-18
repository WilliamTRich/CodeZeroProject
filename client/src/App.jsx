//Imports
import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import axios from 'axios';

//Components
import routes from './routes.jsx';

function App() {
    const [userId, setUserId] = useState({});

    useEffect(() => {
        const accessToken = localStorage.getItem('AccessToken');
        const setHeader = {
            headers: {
                'X-Authorization': accessToken ? accessToken : 'Null',
            },
        };

        axios
            .get('http://localhost:8000/api/users/validate', setHeader)
            .then((res) => {
                setUserId(res.data);
            })
            .catch(() => {
                setUserId(null);
            });
    }, []);

    const routing = useRoutes(routes(userId));

    return <>{routing}</>;
}

export default App;
