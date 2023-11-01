import React, {useState, useEffect} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const EditGoal = (props)=> {
    const {id} = props;
    const[updateGoal, setUpdateGoal] = useState({});
    useEffect(()=> {
        axios.get(``)
        .then((res)=> {
            console.log(res.data);
            setUpdateGoal(res.data);
        })
        .catch((err)=> {
            console.log(err);
            // useNavigate('/errors')
        })
    }, [id])
    const onChangeHandler = (e) => {
        let newStateObject = {...updateGoal};
        newStateObject[e.target.name] = e.target.value
        setUpdateGoal(newStateObject);
    }
    const updateSubmitHandler = (e)=> {
        e.preventDefault();
        axios.put(``, updateGoal,
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
                <label>Goal Title</label>
                <input onChange={onChangeHandler} name="title" value={updateGoal.goalTitle}/>
                <label>Goal End Date</label>
                <input onChange={onChangeHandler} name="date" value={updateGoal.goalEndDate}/>
                <label>Live?</label>
                <input onChange={onChangeHandler} name="live" value={updateGoal.live}/>
                <label>Goal Steps</label>
                <input onChange={onChangeHandler} name = "goalSteps"value={updateGoal.goalSteps}/>
                <label>Completed?</label>
                <input onChange={onChangeHandler} name="completed" value={updateGoal.completed} />
                <button>Submit</button>
            </form>
        </div>
        
    </div>
            
    
    )
}

export default EditGoal;
