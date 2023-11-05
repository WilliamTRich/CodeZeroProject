import React, { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from '../contexts/UserContext.jsx';


const EditMeal = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { mealId } = useParams();
    const [updateMeal, setUpdateMeal] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/meals/${user._id}/${mealId}`)
            .then((res) => {
                console.log(res.data);
                setUpdateMeal(res.data);
            })
            .catch((err) => {
                console.log(err);
                console.log("idk but seomting is going wrong")
            })
    }, [user._id, mealId])

    const onChangeHandler = (e) => {
        let newStateObject = { ...updateMeal };
        newStateObject[e.target.name] = e.target.value
        setUpdateMeal(newStateObject);
    }

    const updateSubmitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/meals/${user._id}/${mealId}`, updateMeal)
            .then((res) => {
                console.log(res.data);
                navigate('/meal');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <h1 className="text-primary text-5xl font-bold">Edit Meal</h1>
            <form
                onSubmit={updateSubmitHandler}
                noValidate
                autoComplete="off"
                className="flex flex-col w-full max-w-md gap-4"
            >
                    <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Meal Title: </label>
                    <input
                        onChange={onChangeHandler}
                        name="mealTitle"
                        value={updateMeal.mealTitle}
                        className="border-primary border-2 rounded p-2 text-black flex-1"
                    />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Meal Cook/Prep Time: </label>
                    <input
                        onChange={onChangeHandler}
                        name="mealTime"
                        value={updateMeal.mealTime}
                        className="border-primary border-2 rounded p-2 text-black flex-1"
                    />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Calories: </label>
                    <input
                        onChange={onChangeHandler}
                        name="calories"
                        value={updateMeal.calories}
                        className="border-primary border-2 rounded p-2 text-black flex-1"
                    />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Ingredients: </label>
                    <textarea
                        onChange={onChangeHandler}
                        name="ingredients"
                        value={updateMeal.ingredients}
                        type="text"
                        className="border-primary border-2 rounded p-2 text-black flex-1"
                        rows="5"
                    />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Instructions: </label>
                    <textarea
                        onChange={onChangeHandler}
                        name="instructions"
                        value={updateMeal.instructions}
                        type="text"
                        className="border-primary border-2 rounded p-2 text-black flex-1"
                        rows="5"
                    />
                </div>
                <div className="mb-3 flex w-full">
                    <label className="w-32 text-primary mr-2">Notes: </label>
                    <textarea
                        onChange={onChangeHandler}
                        name="notes"
                        value={updateMeal.notes}
                        type="text"
                        className="border-primary border-2 rounded p-2 text-black flex-1"
                        rows="5"
                    />
                </div>
                <button
                    className="bg-highlight text-background py-2 px-4 rounded-lg hover:bg-secondary hover:text-accent-extralight transition duration-300"
                    type="submit"
                >
                    Update Meal
                </button>            
                </form>
        </div>

    )
}

export default EditMeal;
