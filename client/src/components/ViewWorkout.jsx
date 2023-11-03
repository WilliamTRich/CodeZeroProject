import React, { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from '../contexts/UserContext.jsx';

const ViewWorkout = (props) => {
    const [workout, setWorkout] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { workoutId } = useParams();

    const convertToAmPmFormat = (time24Hour) => {
        const [hours, minutes] = time24Hour.split(':');
        const formattedTime = new Date(0, 0, 0, hours, minutes);
        const options = { hour: 'numeric', minute: '2-digit', hour12: true };
        return formattedTime.toLocaleTimeString([], options);
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/workouts/${user._id}/${workoutId}`)
            .then((res) => {
                setWorkout(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [user._id, workoutId])

    if (!workout) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <div className="flex items-center">            
                <label className="text-primary text-lg font-semibold p-2">Workout Title:</label>
                <p>{workout.workoutTitle}</p>
            </div>
            <div className="flex items-center">            
                <label className="text-primary text-lg font-semibold p-2">Workout Date:</label>
                <p>
                    {/* {workout.workoutDate} */}
                    {new Date(workout.workoutDate).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}                
                </p>
            </div>
            <div className="flex flex-col items-center">            
                <label className="text-primary text-lg font-semibold">Workout Time:</label>
                <p>{workout && convertToAmPmFormat(workout.workoutTime)}</p>
            </div>
            <div className="flex flex-col items-center">            
                <label className="text-primary text-lg font-semibold">Live?</label>
                <p>{workout.live ? 'Yes' : 'No'}</p>
            </div>            
            <div className="flex flex-col items-center">            
                <label className="text-primary text-lg font-semibold">Self Led?</label>
                <p>{workout.selfLed ? 'Yes' : 'No'}</p>
            </div>
            <div className="flex flex-col items-center">            
                <label className="text-primary text-lg font-semibold">Notes/Instructions: </label>
                <p>{workout.notes ? 'Yes' : 'No'}</p>
            </div>
        </div>

    );
};

export default ViewWorkout;
