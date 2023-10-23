//Imports
import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Components
import { Nav } from '../../components/Nav.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <div className={'flex bg-background h-screen w-screen'}>
          <Nav user={user} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Dashboard;
