import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext.jsx';
import { useNavigate } from 'react-router-dom';


const AllWorkouts = (props) => {
    const navigate = useNavigate();
    const [workouts, setWorkouts] = useState([]);
    const { user } = useContext(UserContext);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/workouts/${user._id}`)
            .then(res => {
                // console.log(res.data)
                setWorkouts(res.data)
            })
            .catch(err => console.error(err))
    }, [user._id])

    const handleEdit = (workoutId) => {
        navigate('/editworkout')
        console.log('Edit workout id:', workoutId);
    };

    const handleDelete = (workoutId) => {
        console.log('Delete workout id:', workoutId);
        axios.delete(`http://localhost:8000/api/workouts/${deletedId}`)
        .then(res => {
            console.log(res)
            removeFromDom(deletedId)
        })
        .catch(err => {
            console.log(err)
        })
    };
    
    const removeFromDom = deletedId => {
        setWorkouts(workouts.filter(workout => deletedId !== workout._id))
    }

    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Live</th>
                    <th>Self Lead</th>
                    <th>View/Edit/Delete Workout</th>
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
                        <td>
                            <button onClick={() => handleView(meal._id)}>View</button>
                            <button onClick={() => handleEdit(meal._id)}>Edit</button>
                            <button onClick={() => handleDelete(meal._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AllWorkouts;
