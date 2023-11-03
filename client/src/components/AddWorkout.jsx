import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import { UserContext } from '../contexts/UserContext.jsx';


const AddWorkout = (props) => {
    const navigate = useNavigate();
    const [workoutTitle, setWorkoutTitle] = useState("");
    const [workoutDate, setWorkoutDate] = useState("");
    const [workoutTime, setWorkoutTime] = useState("");
    const [live, setLive] = useState(false);
    const [selfLed, setSelfLed] = useState(false);
    const [notes, setNotes] = useState("");
    const { user } = useContext(UserContext);

    const handleLiveChange = (e) => {
        setLive(e.target.value === 'true');
    };

    const handleSelfLeadChange = (e) => {
        setSelfLed(e.target.value === 'true');
    };

    const newSubmitHandler = (e) => {
        e.preventDefault();

        const userId = user._id
        let newWorkout;

        if (user.userType === "client") {
            console.log("user type is client")
            newWorkout = {
                workoutTitle,
                workoutDate,
                workoutTime,
                live,
                selfLed,
                notes,
                client: user._id,
            }
            console.log(newWorkout);
        } else if (user.userType === "trainer") {
            console.log("user type is trainer")
            newWorkout = {
                workoutTitle,
                workoutDate,
                workoutTime,
                live,
                selfLed,
                notes,
                trainer: user._id,
            };
        } else {
            console.error("Invalid userType:", user.userType);
            return;
        }

        axios.post(`http://localhost:8000/api/workouts/${userId}`, newWorkout, {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data);
                navigate('/workout');
            })
            .catch((error) => {
                console.error("Error creating goal:", error);
            });
    }

    return (
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <h1 className="text-primary text-5xl font-bold">Add Workout</h1>
            <div>
                <form
                    onSubmit={newSubmitHandler}
                    noValidate
                    autoComplete="off"
                    className="flex flex-col w-full max-w-md gap-4"
                >
                    <div className="mb-3">
                        <label className="text-primary mr-2">Workout Title: </label>

                        <input
                            onChange={(e) => setWorkoutTitle(e.target.value)}
                            name="title"
                            value={workoutTitle}
                            className="border-primary border-2 rounded p-2 text-black"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-primary mr-2">Workout Date: </label>

                        <input
                            onChange={(e) => setWorkoutDate(e.target.value)}
                            name="date"
                            value={workoutDate}
                            type="date"

                            className="border-primary border-2 rounded p-2 text-black"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-primary mr-2">Workout Time: </label>

                        <input
                            onChange={(e) => setWorkoutTime(e.target.value)}
                            name="time"
                            value={workoutTime}
                            type="time"
                            className="border-primary border-2 rounded p-2 text-black"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-primary mr-2">Live?</label>
                        <select
                            onChange={handleLiveChange}
                            value={live.toString()} name="live"
                            className="border-primary border-2 rounded p-2 text-black"
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>

                    </div>
                    <div className="mb-3">
                        <label className="text-primary mr-2">Self Led?</label>
                        <select
                            onChange={handleSelfLeadChange}
                            value={selfLed.toString()}
                            name="self led"
                            className="border-primary border-2 rounded p-2 text-black"
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>

                    </div>
                    <div className="mb-3 flex">
                        <label className="text-primary mr-2">Notes/Instructions: </label>

                        <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            name="notes"
                            value={notes}
                            type="text"
                            className="border-primary border-2 rounded p-2 text-black"
                            rows="5"

                        />
                    </div>
                    <button
                        className="bg-highlight text-background py-2 px-4 rounded-lg hover:bg-secondary hover:text-accent-extralight transition duration-300"
                        type="submit"
                    >Add Workout</button>
                </form>
            </div>


        </div>


    )
}

export default AddWorkout;
