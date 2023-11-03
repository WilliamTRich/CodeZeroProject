import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

const GoalsTable = (props) => {
    const navigate = useNavigate();
    const [goals, setGoals] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(user._id)
        axios.get(`http://localhost:8000/api/goals/${user._id}`)
            .then(res => {
                setGoals(res.data)
            })
            .catch(err => console.error(err))
    }, [user._id])


    const handleEdit = (goalId, user) => {
        navigate(`/editgoal/${goalId}`)
        console.log('Edit goal id:', goalId);
    };

    const handleDelete = (goalId, user) => {
        console.log('Delete goal id:', goalId);
        axios.delete(`http://localhost:8000/api/goals/${user._id}/${goalId}`)
            .then(res => {
                console.log(res)
                removeFromDom(goalId)
            })
            .catch(err => {
                console.log(err)
            })
    };

    const removeFromDom = goalId => {
        setGoals(goals.filter(goal => goalId !== goal._id))
    }

    const handleGoalCompletion = (goalIndex, user) => {
        const updatedGoals = [...goals];
        updatedGoals[goalIndex].completed = !updatedGoals[goalIndex].completed;
        setGoals(updatedGoals);
    
        const userId = user._id;
        const goalId = updatedGoals[goalIndex]._id;
        const newCompletedValue = updatedGoals[goalIndex].completed;
    
        axios.patch(`http://localhost:8000/api/goals/${userId}/${goalId}`, { completed: newCompletedValue })
            .then((response) => {
                console.log('Goal updated successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error updating goal:', error);
            });
    };
    

    const formattedGoalEndDate = new Date(goals.goalEndDate).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });


    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th className="text-center">Goal Title</th>
                    <th className="text-center">Goal End Date</th>
                    <th className="text-center">Mark As Completed</th>
                    <th className="text-center">View/Edit/Delete Goal</th>
                </tr>
            </thead>
            <tbody>
                {goals.map((goal, index) => (
                    <tr key={goal._id}>
                        <td className="text-center">{goal.goalTitle}</td>
                        <td className="text-center">
                            {new Date(goal.goalEndDate).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </td>
                        <td className="text-center">
                            <input
                                type="checkbox"
                                checked={goal.completed}
                                onChange={() => handleGoalCompletion(index, user)}
                            />
                        </td>
                        <td className="text-center space-x-2">
                            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleView(goal._id, user)}>View</button>
                            <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleEdit(goal._id, user)}>Edit</button>
                            <button className="bg-accent-medium hover:bg-accent-light text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDelete(goal._id, user)}>Delete</button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

};

export default GoalsTable;
