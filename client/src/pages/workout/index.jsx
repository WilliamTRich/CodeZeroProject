//Imports
import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Components
import { Nav } from '../../components/Nav.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';

import AllWorkouts from '../../components/AllWorkouts'

const Workout = (props) => {
    const { user } = useContext(UserContext);

    return (
        <>
            {user ? (
                <div className={'flex bg-background h-screen w-screen'}>
                    <Nav user={user} />
                    {/* <Nav /> */}

                    <div className="h-screen w-screen flex flex-col p-4 rounded-lg shadow-lg bg-background text-white relative">
                        <h1 className="text-5xl font-semibold mb-4 border-b-2 border-primary w-full text-end">
                            Workouts
                        </h1>
                        <div className='flex flex-col items-center'>
                            <Link to="/add-workout">
                                <button className="bg-primary text-white mb-4 py-2 px-4 rounded hover:bg-primary-dark transition duration-300">
                                    Add Workout
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="w-full bg-gray-800 text-white p-4 mb-4 md:mb-0 border border-secondary rounded">
                                <AllWorkouts />

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

export default Workout;
