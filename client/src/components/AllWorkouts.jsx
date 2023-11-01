import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext.jsx';


const AllWorkouts = (props) => {
    const [workouts, setWorkouts] = useState([]);
    const { user } = useContext(UserContext);


    useEffect(() => {
        // Fetch user's associated workouts from the API
        const fetchWorkouts = async () => {
            try {
                const response = await axios.get(`/api/workouts/${user._id}`);
                setWorkouts(response.data);
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };

        fetchWorkouts();
    }, [user._id]);

    const handleEdit = (workoutId) => {
        Navigate('/editworkout')
        console.log('Edit workout id:', workoutId);
    };

    const handleDelete = (workoutId) => {
        // need to add stuff to delete here
        console.log('Delete workout id:', workoutId);
    };

    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Live</th>
                    <th>Self Lead</th>
                    <th>Edit/Delete Workout</th>
                </tr>
            </thead>
            <tbody>
                {workouts.map((workout) => (
                    <tr key={workout._id}>
                        <td>{workout.workoutTitle}</td>
                        <td>{new Date(workout.workoutDate).toLocaleDateString()}</td>
                        <td>{workout.workoutTime}</td>
                        <td>{workout.live ? 'Yes' : 'No'}</td>
                        <td>{workout.selfLead ? 'Yes' : 'No'}</td>
                        <button onClick={() => handleEdit(workout._id)}>Edit</button>
                        <button onClick={() => handleDelete(workout._id)}>Delete</button>                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AllWorkouts;
