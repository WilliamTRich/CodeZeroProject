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

  const WorkoutClick = () => {
    navigate('/workout');
  };

  const MealClick = () => {
    navigate('/meal');
  };

  const GoalClick = () => {
    navigate('/goal');
  };


  const logoutUser = () => {
    console.log('Logging out...');
    setUser({})
    navigate('/')
  };

  return (
    <div className="flex h-screen flex-col justify-evenly items-center bg-accent-dark">
      <div>
        <img
          src={'pulse360Logo.png'}
          alt={'pulse360 logo and tag: full cycle fitness'}
          className={'w-full h-auto object-cover md:max-h-[9em]'}
          />
      </div>

      <img
        src="/user-icon.png"
        className="mx-auto h-16 w-16 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 justify-center"
        alt={'User icon'} />
      <div className="flex h-96 w-full flex-col items-center justify-around text-xl text-primary">
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
        <button
          className={
            'bg-secondary w-40 text-center text-accent-extralight py-2 rounded-lg hover:bg-secondary-dark duration-300 focus:outline-none'
          }
          onClick={GoalClick}
        >
          Goals
        </button>
        <button
          className={
            'bg-secondary w-40 text-center text-accent-extralight py-2 rounded-lg hover:bg-secondary-dark duration-300 focus:outline-none'
          }
          onClick={WorkoutClick}
        >
          Workouts
        </button>
        <button
          className={
            'bg-secondary w-40 text-center text-accent-extralight py-2 rounded-lg hover:bg-secondary-dark duration-300 focus:outline-none'
          }
          onClick={MealClick}
        >
          Meals
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
