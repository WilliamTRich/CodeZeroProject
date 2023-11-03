//Imports
import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Components
import { Nav } from '../../components/Nav.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';
import ViewWorkout from '../../components/ViewWorkout'
import BackButton from '../../components/BackButton.jsx';

const ViewWorkoutPage = (props) => {
    const { user } = useContext(UserContext);

    return (
        <>
            {user ? (
                <div className={'flex bg-background h-screen w-screen'}>
                    <Nav user={user} />

                    <div className="h-screen w-screen flex flex-col p-4 rounded-lg shadow-lg bg-background text-white relative">
                        <h1 className="text-5xl font-semibold mb-4 border-b-2 border-primary w-full text-end">
                            View Workout
                        </h1>

                        <div className="flex flex-col items-center">
                            <div className="w-full md:w-[80%] bg-gray-800 text-white p-4 mb-4 md:mb-0 border border-secondary rounded">
                                <ViewWorkout />
                            </div>
                        </div>
                        <BackButton/>
                    </div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default ViewWorkoutPage;
