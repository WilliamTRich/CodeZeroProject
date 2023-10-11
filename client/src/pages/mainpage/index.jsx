import React from 'react';
import { MainPhoto } from '../../components/MainPhoto';
import { Link } from 'react-router-dom';
//Components

const MainScreen = () => {
    return(
        <div>
            {/* <Nav/> */} <Link to="login">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Log in As Client</button>
            </Link>
            <Link to="login">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Log in as Trainer</button>
            </Link>
            <MainPhoto/>
        </div>
    )
        
    
};

export default MainScreen;