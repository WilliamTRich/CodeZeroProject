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
                setWorkouts(res.data)
            })
            .catch(err => console.error(err))
    }, [user._id])

    const handleView = (workoutId, user) => {
        navigate(`/viewworkout/${workoutId}`)
        console.log('View workout id:', workoutId);
    };

    const handleEdit = (workoutId) => {
        navigate(`/editworkout/${workoutId}`)
        console.log('Edit workout id:', workoutId);
    };

    const handleDelete = (workoutId, user) => {
        console.log('Delete workout id:', workoutId);
        axios.delete(`http://localhost:8000/api/workouts/${user._id}/${workoutId}`)
        .then(res => {
            console.log(res)
            removeFromDom(workoutId)
        })
        .catch(err => {
            console.log(err)
        })
    };
    
    const removeFromDom = deletedId => {
        setWorkouts(workouts.filter(workout => deletedId !== workout._id))
    }

    const formattedDate = new Date(workouts.workoutDate).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });


    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th className="text-center">Title</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Time</th>
                    <th className="text-center">Live</th>
                    <th className="text-center">Self Led</th>
                    <th className="text-center">View/Edit/Delete Workout</th>
                </tr>
            </thead>
            <tbody>
                {workouts.map((workout) => (
                    <tr key={workout._id}>
                        <td  className="text-center">{workout.workoutTitle}</td>
                        <td className="text-center">                            
                        {new Date(workout.workoutDate).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </td>
                        <td className="text-center">{workout.workoutTime}</td>
                        <td className="text-center">{workout.live ? 'Yes' : 'No'}</td>
                        <td className="text-center">{workout.selfLed ? 'Yes' : 'No'}</td>
                        <td className="text-center space-x-2">
                            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleView(workout._id, user)}>View</button>
                            <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleEdit(workout._id, user)}>Edit</button>
                            <button className="bg-accent-medium hover:bg-accent-light text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDelete(workout._id, user)}>Delete</button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AllWorkouts;
