import React from 'react';
import { MainPhoto } from '../../components/MainPhoto';
import { Link } from 'react-router-dom';
//Components

const MainScreen = () => {
    return(
        <div>
            <div className='mainscreenlogin flex'>
                {/* tried to float login to the right using float-right bg-slate-100 did not work as planned */}
                <Link to="login">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-1.5">Log in As Client</button>
                </Link>
                <Link to="login">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-1.5"> Log in as Trainer</button>
                </Link>
            </div>
            <MainPhoto/>
        </div>
    )
        
    
};

export default MainScreen;