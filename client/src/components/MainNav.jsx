import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainNav = () => {
  const navigate = useNavigate();
  return (
    <div className={'flex h-1/6 px-4 py-2 w-full items-center bg-accent border-b-2 border-b-highlight'}>
      <h1 className={'flex-grow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary text-center'}>
        Pulse360
      </h1>
      <div className={'flex items-center space-x-4'}>
        <button
          className={
            'px-6 py-2 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-highlight text-background border-background border-2 rounded-lg hover:bg-secondary hover:text-accent-extralight'
          }
          onClick={() => navigate('/client-login')}
        >
          Log in as Client
        </button>
        <button
          className={
            'px-6 py-2 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-highlight text-background border-background border-2 rounded-lg hover:bg-secondary hover:text-accent-extralight'
          }
          onClick={() => navigate('/trainer-login')}
        >
          Log in as Trainer
        </button>
      </div>
    </div>
  );
};

export default MainNav;
