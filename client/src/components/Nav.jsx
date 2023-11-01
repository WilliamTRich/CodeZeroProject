import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext.jsx';


export const Nav = (props) => {
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

  const logoutUser = () => {
    console.log('Logging out...');
    console.log(localStorage.getItem('AccessToken'))
    setUser({})
    navigate('/')
    console.log(localStorage.getItem('AccessToken'))
  };

  return (
    <div className="flex h-screen w-56 flex-col justify-around bg-accent-dark">
      <img src="/user-icon.png" className="mx-auto h-32 w-32 justify-center" alt={'User icon'} />
      <div className="flex h-64 w-full flex-col items-center justify-around text-xl text-primary">
        Hi, {user.firstName}!
        <button
          className={
            'bg-secondary w-40 text-center text-accent-extralight py-2 rounded-lg hover:bg-secondary-dark  duration-300 focus:outline-none'
          }
          onClick={DashboardClick}
        >
          Dashboard
        </button>
        <button
          className={
            'bg-secondary w-40 text-center text-accent-extralight py-2 rounded-lg hover:bg-secondary-dark duration-300 focus:outline-none'
          }
          onClick={MessagesClick}
        >
          Messages
        </button>
        <button
          className={
            'bg-secondary w-40 text-center text-accent-extralight py-2 rounded-lg hover:bg-secondary-dark duration-300 focus:outline-none'
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
