import React, { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from '../contexts/UserContext.jsx';

const ViewMeal = (props) => {
    const [meal, setMeal] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { mealId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/meals/${user._id}/${mealId}`)
            .then((res) => {
                setMeal(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [user._id, mealId])

    if (!meal) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <div className="flex items-center">
                <label className="text-primary text-lg font-semibold p-2">Meal Title:</label>
                <p>{meal.mealTitle}</p>
            </div>
            <div className="flex items-center">
                <label className="text-primary text-lg font-semibold p-2">Meal Cook/Prep Time:</label>
                <p>{meal.mealTime}</p>
            </div>
            <div className="flex items-center">
                <label className="text-primary text-lg font-semibold p-2">Ingredients:</label>
                <p>{meal.ingredients}</p>
            </div>
            <div className="flex flex-col items-center">
                <label className="text-primary text-lg font-semibold">Calories: </label>
                <p>{meal.calories}</p>
            </div>
            <div className="flex flex-col items-center">
                <label className="text-primary text-lg font-semibold">Notes/Instructions: </label>
                <p>{meal.notes}</p>
            </div>
        </div>

    );
};

export default ViewMeal;
