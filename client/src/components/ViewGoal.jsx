import React, { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from '../contexts/UserContext.jsx';

const ViewGoal = (props) => {
    const [goal, setGoal] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { goalId } = useParams();

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    };


    useEffect(() => {
        axios.get(`http://localhost:8000/api/goals/${user._id}/${goalId}`)
            .then((res) => {
                setGoal(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [user._id, goalId])

    if (!goal) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <div className="flex items-center">            
                <label className="text-primary text-lg font-semibold p-2">Goal Title:</label>
                <p>{goal.goalTitle}</p>
            </div>
            <div className="flex items-center">            
                <label className="text-primary text-lg font-semibold p-2">Goal End Date:</label>
                <p>{formatDate(goal.goalEndDate)}</p>
            </div>
            <div className="flex flex-col items-center">            
                <label className="text-primary text-lg font-semibold">Goal Steps:</label>
                <p>{goal.goalSteps}</p>
            </div>
            <div className="flex flex-col items-center">            
                <label className="text-primary text-lg font-semibold">Completed?</label>
                <p>{goal.completed ? 'Yes' : 'No'}</p>
            </div>
        </div>

    );
};

export default ViewGoal;
