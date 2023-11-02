//Imports
import { useState, useEffect } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import axios from 'axios';

//Components
import routes from './routes.jsx';
import { UserContext } from './contexts/UserContext.jsx';

function App() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

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
        console.log(res);
        setUser(res.data);
        setVerified(true);
      })
      .catch((e) => {
        setVerified(false);
        console.log(e);
        // navigate('/');
      });
  }, [ user,localStorage]);


  useEffect(() => {
    if (!verified) {
        navigate('/');
    }
}, [user, navigate]);


  const routing = useRoutes(routes());

  return <UserContext.Provider value={{ user, setUser }}>{routing}</UserContext.Provider>;
}

export default App;
