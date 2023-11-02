import React, {useState, useEffect} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const EditWorkout = (props)=> {
    const navigate = useNavigate();
    const {id} = props;
    const[updateWorkout, setUpdateWorkout] = useState({});
    useEffect(()=> {
        axios.get(``)
        .then((res)=> {
            console.log(res.data);
            setUpdateWorkout(res.data);
        })
        .catch((err)=> {
            console.log(err);
            navigate('/errors')
        })
    }, [id])
    const onChangeHandler = (e) => {
        let newStateObject = {...updateWorkout};
        newStateObject[e.target.name] = e.target.value
        setUpdateWorkout(newStateObject);
    }
    const updateSubmitHandler = (e)=> {
        e.preventDefault();
        axios.put(``, updateWorkout,
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
                <label>Workout Date</label>
                <input onChange={onChangeHandler} name="date" value={updateWorkout.workoutDate}/>
                <label>Workout Time</label>
                <input onChange={onChangeHandler} name="time" value={updateWorkout.workoutTime}/>
                <label>Live?</label>
                <input onChange={onChangeHandler} name="live" value={updateWorkout.live}/>
                <label>Self Lead?</label>
                <input onChange={onChangeHandler} name = "selfLead"value={updateWorkout.selfLead}/>
                <label>Itinerary</label>
                <input onChange={onChangeHandler} name="notes" value={updateWorkout.itinerary} />
                <button>Submit</button>
            </form>
        </div>
        
    </div>
            
    
    )
}

export default EditWorkout;
