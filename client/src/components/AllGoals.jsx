import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext.jsx';


const GoalsTable = (props) => {

    const [goals, setGoals] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/goals/${user._id}`)
            .then(res => {
                // console.log(res.data)
                setGoals(res.data)
            })
            .catch(err => console.error(err))
    }, [user._id])


const handleEdit = (goalId) => {
    // need to add stuff to edit here

    Navigate('/editgoal')
    console.log('Edit goal id:', goalId);
};

const handleDelete = (goalId) => {
    console.log('Delete goal id:', goalId);
    axios.delete(`http://localhost:8000/api/goals/${deletedId}`)
    .then(res => {
        console.log(res)
        removeFromDom(deletedId)
    })
    .catch(err => {
        console.log(err)
    })
};

const removeFromDom = deletedId => {
    setGoals(goals.filter(goal => deletedId !== goal._id))
}

const handleGoalCompletion = (goalIndex) => {
    const updatedGoals = [...goals];
    updatedGoals[goalIndex].completed = !updatedGoals[goalIndex].completed;
    setGoals(updatedGoals);
};

return (
    <table className="w-full">
        <thead>
            <tr>
                <th>Goal Title</th>
                <th>Goal Date</th>
                <th>View/Edit/Delete Goal</th>
                <th>Mark As Completed</th>
            </tr>
        </thead>
        <tbody>
            {goals.map((goal) => (
                <tr key={goal._id}>
                    <td>{goal.goalTitle}</td>
                    <td>{goal.goalEndDate}</td>
                    <td>
                        <button onClick={() => handleView(meal._id)}>View</button>
                        <button onClick={() => handleEdit(meal._id)}>Edit</button>
                        <button onClick={() => handleDelete(meal._id)}>Delete</button>
                    </td>
                    <td>
                        <input
                            type="checkbox"
                            checked={goal.completed}
                            onChange={() => handleGoalCompletion(index)}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);
};

export default GoalsTable;
