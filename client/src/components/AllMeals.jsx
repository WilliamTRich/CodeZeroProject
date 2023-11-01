import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext.jsx';


const AllMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const { user } = useContext(UserContext);


    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get(`/api/meals/${user._id}`);
                setMeals(response.data);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        fetchMeals();
    }, [user._id]);

    const handleEdit = (mealId) => {
        Navigate('/editmeal')
        console.log('Edit meal id:', mealId);
    };

    const handleDelete = (mealId) => {
        // need to add stuff to delete here
        console.log('Delete meal id:', mealId);
    };

    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Prep/Cook Time</th>
                    <th>Calories</th>
                    <th>View/Edit/Delete Meal</th>
                </tr>
            </thead>
            <tbody>
                {meals.map((meal) => (
                    <tr key={meal._id}>
                        <td>{meal.mealTitle}</td>
                        <td>{meal.mealTime}</td>
                        <td>{meal.calories}</td>
                        <td>
                            <button onClick={() => handleView(meal._id)}>View</button>
                            <button onClick={() => handleEdit(meal._id)}>Edit</button>
                            <button onClick={() => handleDelete(meal._id)}>Delete</button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AllMeals;
