//Imports
import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import axios from 'axios';

//Components
import routes from './routes.jsx';
import { UserContext } from './contexts/UserContext.jsx';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessToken = localStorage.getItem('AccessToken');
    const setHeader = {
      headers: {
        'X-Authorization': accessToken ? accessToken : 'Null',
      },
    };

    axios
      .get(`http://localhost:8000/api/users/validate`, setHeader)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
        setUser(null);
      });
  }, []);

  const routing = useRoutes(routes(user));

  return <UserContext.Provider value={{ user, setUser }}>{routing}</UserContext.Provider>;
}

export default App;
