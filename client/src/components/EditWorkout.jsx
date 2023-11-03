import React, { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from '../contexts/UserContext.jsx';


const EditWorkout = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { workoutId } = useParams();
    const [updateWorkout, setUpdateWorkout] = useState({
        workoutTitle: '',
        workoutDate: '',
        workoutTime: '',
        live: '',
        selfLed: '',
        notes: ''
        });
    console.log(user._id)

    const formatDate = (date) => {
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/workouts/${user._id}/${workoutId}`)
            .then((res) => {
                const formattedDate = formatDate(new Date(res.data.workoutDate));
                const updatedWorkoutData = { ...res.data, workoutDate: formattedDate }; setUpdateWorkout(updatedWorkoutData);
                console.log(updateWorkout)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [user._id, workoutId])

    const onChangeHandler = (e) => {
        let newStateObject = { ...updateWorkout };
        if (e.target.name === 'workoutDate') {
            const selectedDate = new Date(e.target.value);
            const formattedDate = formatDate(selectedDate);
            newStateObject[e.target.name] = formattedDate;
        } else {
            newStateObject[e.target.name] = e.target.value;
        }
        setUpdateWorkout(newStateObject);
    }

    const updateSubmitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/workouts/${user._id}/${workoutId}`, updateWorkout)
            .then((res) => {
                console.log(res.data);
                navigate('/workout');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <h1 className="text-primary text-5xl font-bold">Edit Workout</h1>
            <form
                onSubmit={updateSubmitHandler}
                noValidate
                autoComplete="off"
                className="flex flex-col w-full max-w-md gap-4"
            >
                <div className="mb-3">
                    <label className="text-primary mr-2">Workout Title: </label>
                    <input
                        onChange={onChangeHandler}
                        name="workoutTitle"
                        value={updateWorkout.workoutTitle || ''}
                        className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <div className="mb-3">
                    <label className="text-primary mr-2">Workout Date: </label>
                    <input
                        onChange={onChangeHandler}
                        name="workoutDate"
                        value={updateWorkout.workoutDate || ''}
                        type="date"
                        className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <div className="mb-3">
                    <label className="text-primary mr-2">Workout Time: </label>
                    <input
                        onChange={onChangeHandler}
                        name="workoutTime"
                        type="time"
                        value={updateWorkout.workoutTime || ''}
                        className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <div className="mb-3">
                    <label className="text-primary mr-2">Live?</label>
                    <select
                        onChange={onChangeHandler}
                        value={updateWorkout.live || false}
                        name="live"
                        className="border-primary border-2 rounded p-2 text-black"
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="text-primary mr-2">Self Led?</label>
                    <select
                        onChange={onChangeHandler}
                        value={updateWorkout.selfLed|| false}
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
                        onChange={onChangeHandler}
                        name="notes"
                        value={updateWorkout.notes}
                        type="text"
                        className="border-primary border-2 rounded p-2 text-black"
                        rows="5"

                    />
                </div>
                <button
                    className="bg-highlight text-background py-2 px-4 rounded-lg hover:bg-secondary hover:text-accent-extralight transition duration-300"
                    type="submit"
                >
                    Update Workout
                </button>
            </form>
        </div>

    )
}

export default EditWorkout;
