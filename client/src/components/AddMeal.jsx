import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../contexts/UserContext.jsx';


const AddMeal = (props) => {
    const navigate = useNavigate();
    const [mealTitle, setMealTitle] = useState("");
    const [mealTime, setMealTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [calories, setCalories] = useState("");
    const [notes, setNotes] = useState("");
    const { user } = useContext(UserContext);


    const newSubmitHandler = (e) => {
        e.preventDefault();
        const newMeal = {
            mealTitle,
            mealDate,
            mealTime,
            ingredients,
            calories,
            notes,
        };
        axios.post(`http://localhost:8000/api/meals/${user._id}`, newMeal, {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data);
                navigate('/meal');
            })
            .catch((error) => {
                console.error("Error creating goal:", error);
            });
    }
    return (
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <h1 className="text-primary text-5xl font-bold">Add Meal</h1>
            <div>
                <form
                    onSubmit={newSubmitHandler}
                    noValidate
                    autoComplete="off"
                    className="flex flex-col w-full max-w-md gap-4"
                >
                    <div className="mb-3">
                        <label className="text-primary mr-2">Meal Title</label>
                        <input
                            onChange={(e) => setMealTitle(e.target.value)} name="title"
                            value={mealTitle}
                            className="border-primary border-2 rounded p-2 text-black"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-primary mr-2">Meal Cook/Prep Time</label>
                        <input
                            onChange={(e) => setMealTime(e.target.value)}
                            name="location"
                            value={mealTime}
                            className="border-primary border-2 rounded p-2 text-black"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-primary mr-2">Ingredients</label>
                        <input
                            onChange={(e) => setIngredients(e.target.value)}
                            name="ingredients"
                            value={ingredients}
                            className="border-primary border-2 rounded p-2 text-black"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-primary mr-2">Calories</label>
                        <input
                            onChange={(e) => setCalories(e.target.value)}
                            name="calories"
                            value={calories}
                            className="border-primary border-2 rounded p-2 text-black"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-primary mr-2">Notes</label>
                        <input
                            onChange={(e) => setNotes(e.target.value)}
                            name="notes"
                            value={notes}
                            className="border-primary border-2 rounded p-2 text-black"
                        />
                    </div>
                    <button
                        className="bg-highlight text-background py-2 px-4 rounded-lg hover:bg-secondary hover:text-accent-extralight transition duration-300"
                        type="submit">
                        Add Meal</button>
                </form>
            </div>


        </div>


    )
}

export default AddMeal;
