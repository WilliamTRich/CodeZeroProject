import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainNav = () => {
  const navigate = useNavigate();
  return (
    <div className={'flex h-1/6 px-4 py-2 w-full justify-center items-center border-b-2 border-b-highlight'} >                       
      <img
        src={'pulse360Logo.png'}
        alt={'pulse360 logo and tag: full cycle fitness'}
        className={'h-[10%] w-[10%] object-cover rounded-2xl mb-6 md:mb-0 md:h-full'}
      /> 
       {/* <h1 className={'flex-grow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-dark text-center'}>

        Pulse360
      </h1> */}
      {/* <div className={'flex items-center space-x-4'}>
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
      </div> */}
    </div>
  );
};

export default MainNav;
