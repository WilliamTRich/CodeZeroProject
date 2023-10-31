import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext.jsx';


export const Nav = (props) => {
  const { userType } = props;
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const DashboardClick = () => {
    navigate('/dashboard');
  };

  const MessagesClick = () => {
    navigate('/chat');
  };

  const CalendarClick = () => {
    navigate('/calendar');
  };

  const clearUser = () => {
    setUser(null);
  };

  const logoutUser = () => {
    console.log('Logging out...');
    console.log(userType)
    axios.post(`http://localhost:8000/api/${userType}s/logout`, user)
      .then(() => {
        console.log('Logout successful');
        localStorage.removeItem('AccessToken');
        clearUser();
        navigate('/');
      })
      .catch((err) => {
        console.log('Logout error:', err);
      });
  };

  return (
    <div className="flex h-screen w-56 flex-col justify-around bg-accent">
  <img src="/user-icon.png" className="mx-auto h-32 w-32 justify-center" alt={'User icon'} />
  <div className="flex h-64 w-full flex-col items-center justify-around text-xl text-primary">
    Hi, {user.firstName}!
    <button
      className={
        'bg-secondary w-40 text-center py-2 rounded-lg hover:bg-secondary-dark hover:text-secondary-light duration-300 focus:outline-none'
      }
      onClick={DashboardClick}
    >
      Dashboard
    </button>
    <button
      className={
        'bg-secondary w-40 text-center py-2 rounded-lg hover:bg-secondary-dark hover:text-secondary-light duration-300 focus:outline-none'
      }
      onClick={MessagesClick}
    >
      Messages
    </button>
    <button
      className={
        'bg-secondary w-40 text-center py-2 rounded-lg hover:bg-secondary-dark hover:text-secondary-light duration-300 focus:outline-none'
      }
      onClick={CalendarClick}
    >
      Calendar
    </button>
  </div>
  <button
    className={
      'w-40 self-center bg-danger px-8 py-3 text-xl rounded-md text-white hover:bg-danger-dark transition duration-300 focus:outline-none'
    }
    onClick={logoutUser}
  >
    Log Out
  </button>
</div>


  );
};
