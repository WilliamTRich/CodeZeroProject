//Imports
import { useNavigate } from 'react-router-dom';

const MainNav = () => {
  const navigate = useNavigate();
  return (
    <div className={'flex h-1/6 px-4 py-2 w-full items-center bg-accent border-b-2 border-b-highlight'}>
      <h1 className={'w-2/3 text-6xl text-primary'}>Fitness App</h1>
      <div className={'flex h-full w-1/3 items-center gap-4'}>
        <button
          className={
            'px-6 py-2 text-3xl bg-highlight text-background border-background border-2 hover:bg-secondary hover:text-primary'
          }
          onClick={() => navigate('/client-login')}
        >
          Log in as Client
        </button>
        <button
          className={
            'px-6 py-2 text-3xl bg-highlight text-background border-background border-2 hover:bg-secondary hover:text-primary'
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
