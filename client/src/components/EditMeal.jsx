import React, {useState, useEffect} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const EditMeal = (props)=> {
    const navigate = useNavigate();
    const {id} = props;
    const[updateMeal, setUpdateMeal] = useState({});
    useEffect(()=> {
        axios.get(``)
        .then((res)=> {
            console.log(res.data);
            setUpdateMeal(res.data);
        })
        .catch((err)=> {
            console.log(err);
            navigate('/errors')
        })
    }, [id])
    const onChangeHandler = (e) => {
        let newStateObject = {...updateMeal};
        newStateObject[e.target.name] = e.target.value
        setUpdateMeal(newStateObject);
    }
    const updateSubmitHandler = (e)=> {
        e.preventDefault();
        axios.put(``, updateMeal,
        )
        .then((res)=> {
            console.log(res.data);
            // useNavigate('')
        })
        .catch((err)=> {
            console.log(err);
        })
    }
    return(     
    <div className=''>
        <div>
            <form onSubmit = {updateSubmitHandler}>
                <label>Meal Title</label>
                <input onChange={onChangeHandler} name="title" value={updateMeal.mealTitle}/>
                <label>Meal Cook/Prep Time</label>
                <input onChange={onChangeHandler} name="time" value={updateMeal.mealTime}/>
                <label>Ingredients</label>
                <input onChange={onChangeHandler} name="ingredients" value={updateMeal.ingredients}/>
                <label>Calories</label>
                <input onChange={onChangeHandler} name = "calories"value={updateMeal.calories}/>
                <label>Notes</label>
                <input onChange={onChangeHandler} name="notes" value={updateMeal.notes} />
                <button>Submit</button>
            </form>
        </div>
        
    </div>
            
    
    )
}

export default EditMeal;
