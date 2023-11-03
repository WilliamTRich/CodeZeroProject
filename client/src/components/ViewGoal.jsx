import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewGoal = ({ goalId }) => {
    const [goal, setGoal] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/goals/${goalId}`)
            .then((res) => {
                setGoal(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [goalId]);

    if (!goal) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col w-full max-w-md gap-4">
            <label className="text-primary">Goal Title</label>
            <div className="border-primary border-2 rounded p-2 text-black mb-4">
                {goal.goalTitle}
            </div>

            <label className="text-primary">Goal End Date</label>
            <div className="border-primary border-2 rounded p-2 text-black mb-4">
                {goal.goalEndDate}
            </div>

            <label className="text-primary">Goal Steps</label>
            <div className="border-primary border-2 rounded p-2 text-black mb-4">
                {goal.goalSteps}
            </div>

            <label className="text-primary">Completed?</label>
            <div className="border-primary border-2 rounded p-2 text-black mb-4">
                {goal.completed ? 'Yes' : 'No'}
            </div>
        </div>
    );
};

export default ViewGoal;
