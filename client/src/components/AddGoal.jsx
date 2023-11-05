import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import { UserContext } from '../contexts/UserContext.jsx';

const AddGoal = (props) => {
    const navigate = useNavigate();
    const [goalTitle, setGoalTitle] = useState("");
    const [goalEndDate, setGoalEndDate] = useState("");
    const [goalSteps, setGoalSteps] = useState("");
    const [completed, setCompleted] = useState(false);
    const { user } = useContext(UserContext);


    const newSubmitHandler = (e) => {
        e.preventDefault();
    
        const userId= user._id
        let newGoal;

        if (user.userType === "client") {
            console.log("user type is client")
            newGoal = {
                goalTitle,
                goalEndDate,
                goalSteps,
                completed,
                client: user._id, 
            };
        } else if (user.userType === "trainer") {
            console.log("user type is trainer")
            newGoal = {
                goalTitle,
                goalEndDate,
                goalSteps,
                completed,
                trainer: user._id, 
            };
        } else {
            console.error("Invalid userType:", user.userType);
            return; 
        }
    
        axios.post(`http://localhost:8000/api/goals/${userId}`, newGoal, {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data);
                navigate('/goal');
            })
            .catch((error) => {
                console.error("Error creating goal:", error);
            });
    };
    
    
    return (
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <h1 className="text-primary text-5xl font-bold">Add Goal</h1>
            <form
                onSubmit={newSubmitHandler}
                noValidate
                autoComplete="off"
                className="flex flex-col w-full max-w-md gap-4"
            >
                    <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Goal Title: </label>
                    <input
                        onChange={(e) => setGoalTitle(e.target.value)}
                        name="title"
                        value={goalTitle}
                        className="border-primary border-2 rounded p-2 text-black flex-1"
                        />
                </div>
                <div className="mb-3 flex">
                    <label className="w-32 text-primary mr-2">Goal End Date: </label>
                    <input
                        onChange={(e) => setGoalEndDate(e.target.value)}
                        name="date"
                        value={goalEndDate}
                        type="date"
                        className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Steps to Achieve Goal: </label>
                    <textarea
                            onChange={(e) => setGoalSteps(e.target.value)}
                            name="goalSteps"
                            value={goalSteps}
                            type="text"
                            className="flex-1 border-primary border-2 rounded p-2 text-black"
                            rows="5"
                        />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Completed?</label>
                    <input
                        type="checkbox"
                        onChange={(e) => setCompleted(e.target.checked)}
                        name="completed"
                        checked={completed}
                        className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>

                <button
                    className="bg-highlight text-background py-2 px-4 rounded-lg hover:bg-secondary hover:text-accent-extralight transition duration-300"
                    type="submit"
                >
                    Add Goal
                </button>
            </form>
        </div>
    )
}

export default AddGoal;
