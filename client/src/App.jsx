//Imports
import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import axios from 'axios';

//Components
import routes from './routes.jsx';
import { UserContext } from './contexts/UserContext.jsx';

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

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {routing}
        </UserContext.Provider>
    );
}

export default App;
