import React, { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from '../contexts/UserContext.jsx';


const EditGoal = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { goalId } = useParams();
    const [updateGoal, setUpdateGoal] = useState({});

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
        axios.get(`http://localhost:8000/api/goals/${user._id}/${goalId}`)
            .then((res) => {
                const formattedDate = formatDate(new Date(res.data.goalEndDate));
                const updatedGoalData = { ...res.data, goalEndDate: formattedDate };
                setUpdateGoal(updatedGoalData);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [user._id, goalId])

    const onChangeHandler = (e) => {
        let newStateObject = { ...updateGoal };
        if (e.target.name === 'goalEndDate') {
            const selectedDate = new Date(e.target.value);
            const formattedDate = formatDate(selectedDate);
            newStateObject[e.target.name] = formattedDate;
        } else {
            newStateObject[e.target.name] = e.target.value;
        }
        setUpdateGoal(newStateObject);
    };

    const updateSubmitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/goals/${user._id}/${goalId}`, updateGoal)
            .then((res) => {
                console.log(res.data);
                navigate('/goal');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <h1 className="text-primary text-5xl font-bold">Edit Goal</h1>
            <form
                onSubmit={updateSubmitHandler}
                noValidate
                autoComplete="off"
                className="flex flex-col w-full max-w-md gap-4"
            >
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Goal Title: </label>
                    <input
                        onChange={onChangeHandler}
                        name="goalTitle"
                        value={updateGoal.goalTitle || ''}
                        className="border-primary border-2 rounded p-2 text-black flex-1"
                        />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Goal End Date: </label>
                    <input
                        onChange={onChangeHandler}
                        name="goalEndDate"
                        value={updateGoal.goalEndDate || ''}
                        type="date"
                        className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Steps to Achieve Goal: </label>
                    <textarea
                        onChange={onChangeHandler}
                        name="goalSteps"
                        value={updateGoal.goalSteps || ''}
                        type="text"
                        className="border-primary border-2 rounded p-2 text-black flex-1"
                        rows="5"
                    />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Completed?</label>
                    <input
                        type="checkbox"
                        onChange={(e) => setUpdateGoal({ ...updateGoal, completed: e.target.checked })}
                        checked={updateGoal.completed || false}
                        className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <button
                    className="bg-highlight text-background py-2 px-4 rounded-lg hover:bg-secondary hover:text-accent-extralight transition duration-300"
                    type="submit"
                >
                    Update Goal
                </button>
            </form>
        </div>
    );
}

export default EditGoal;
