import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext.jsx';
import { useNavigate } from 'react-router-dom';


const AllMeals = (props) => {
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);
    const { user } = useContext(UserContext);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/meals/${user._id}`)
            .then(res => {
                setMeals(res.data)
            })
            .catch(err => console.error(err))
    }, [user._id])

    const handleView = (mealId, user) => {
        navigate(`/viewmeal/${mealId}`)
        console.log('View meal id:', mealId);
    };

    const handleEdit = (mealId) => {
        navigate(`/editmeal/${mealId}`)
        console.log('Edit meal id:', mealId);
    };

    const handleDelete = (mealId) => {
        console.log('Delete meal id:', mealId);
        axios.delete(`http://localhost:8000/api/meals/${mealId}`)
        .then(res => {
            console.log(res)
            removeFromDom(mealId)
        })
        .catch(err => {
            console.log(err)
        })
    };
    
    const removeFromDom = mealId => {
        setMeals(meals.filter(meal => mealId !== meal._id))
    }
    
    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th className="text-center">Title</th>
                    <th className="text-center">Prep/Cook Time</th>
                    <th className="text-center">Calories</th>
                    <th className="text-center">View/Edit/Delete Meal</th>
                </tr>
            </thead>
            <tbody>
                {meals.map((meal) => (
                    <tr key={meal._id}>
                        <td className="text-center">{meal.mealTitle}</td>
                        <td className="text-center">{meal.mealTime}</td>
                        <td className="text-center">{meal.calories}</td>
                        <td className="text-center space-x-2">
                            <button  className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            onClick={() => handleView(meal._id)}>View</button>
                            <button  className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            onClick={() => handleEdit(meal._id)}>Edit</button>
                            <button  className="bg-accent-medium hover:bg-accent-light text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            onClick={() => handleDelete(meal._id)}>Delete</button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AllMeals;
