//Imports
import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Calendar from '../../components/Calendar'

//Components
import { Nav } from '../../components/Nav.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';


const CalendarPage = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            {user ? (
                <div className={'flex bg-background h-screen w-screen'}>
                    <div className="fixed h-screen w-48 flex flex-col justify-evenly items-center bg-accent-dark left-0 top-0">
                        <Nav user={user} />
                    </div>
                    <div className="flex-1 flex flex-col p-4 rounded-lg shadow-lg bg-background text-white ml-48 mr-4">
                        <h1 className="text-5xl font-semibold mb-4 border-b-2 border-primary w-full text-end">
                            Calendar
                        </h1>

                        {/* <div className="flex flex-col md:flex-row items-end"> */}
                        <div className="w-full bg-gray-800 text-white p-4 mb-4 md:mb-0 border border-secondary rounded">
                            {/* <Calendar user={user} setUser={setUser} verified={verified} /> */}
                            <Calendar />

                        </div>
                    </div>
                </div>
                // </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default CalendarPage;
