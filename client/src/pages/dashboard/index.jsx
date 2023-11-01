//Imports
import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Components
import { Nav } from '../../components/Nav.jsx';
import { CreateGoal } from '../../components/Goals';
import { UserContext } from '../../contexts/UserContext.jsx';
import Calendar from '../../components/Calendar'
import AllWorkouts from '../../components/AllWorkouts'
import AllMeals from '../../components/AllMeals'

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <div className="flex bg-background h-screen w-screen">
        <Nav user={user} />
        <div className="h-screen w-screen flex flex-col p-4 rounded-lg shadow-lg bg-background text-white relative">
          <h1 className="text-5xl font-semibold mb-4 border-b-2 border-primary w-full text-end">
            Dashboard
          </h1>
      
          <div className="flex flex-col md:flex-row items-start flex-1"> 
            <div className="w-full md:w-2/3 bg-gray-800 text-white p-4 mb-4 md:mb-0 border border-secondary rounded flex-1"> 
              {/* <Calendar user={user} setUser={setUser} verified={verified} /> */}
              <Calendar />
            </div>
      
            <div className="md:w-1/3 md:pl-4 flex flex-col"> 
              <div className="border border-secondary rounded p-2 mb-4 flex-1"> {/* Updated flex property */}
                <CreateGoal />
              </div>
      
              <div className="border border-secondary rounded p-2 flex-1"> 
                <img src="/graph.jpg" className="w-full h-full" alt="graph" />
              </div>

              {/* <div className="border border-secondary rounded p-2 flex-1"> 
              <AllWorkouts />
              </div>

              <div className="border border-secondary rounded p-2 flex-1"> 
              <AllMeals />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Dashboard;
