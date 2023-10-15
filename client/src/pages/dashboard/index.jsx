//Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { AddGoal} from '../../components/AddGoal';
import { CaloriesGraph } from '../../components/caloriesGraph';
import { GoalsList } from '../../components/GoalsList';

//Components

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Link to="login">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Login
                </button>
            </Link>
            <div className='goalstracker'>
                <AddGoal/>
                <GoalsList/>
            </div>
            <CaloriesGraph/>
        </>
    );
};

export default Dashboard;
