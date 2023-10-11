import React from 'react';
import { MainPhoto } from '../../components/MainPhoto';
import { Link } from 'react-router-dom';
//Components

const MainScreen = () => {
    return(
        <div>
            {/* <Nav/> */} <Link to="login">
            <button>Log in As Client</button>
            <button>Log in as Trainer</button>
            </Link>
            <MainPhoto/>
        </div>
    )
        
    
};

export default MainScreen;