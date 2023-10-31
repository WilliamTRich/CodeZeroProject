import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const AddWorkout = ()=> {
    const navigate = useNavigate();
    const[workoutDate,setWorkoutDate] = useState("");
    const[workoutTime,setWorkoutTime] = useState("");
    const[live,setLive] = useState("");
    const[selfLead,setSelfLead] = useState("");
    const[notes,setNotes] = useState("");
    const newSubmitHandler = (e) => {
        e.preventDefault();
        const newWorkout = {
            workoutDate,
            workoutTime,
            live,
            selfLead,
            notes,
        };
        axios.post(``,
        newWorkout, {
            withCredentials:true
        }
        )
        .then((res)=> {
            console.log(res.data);
            navigate('/dashboard');
        })
    }
    return(     
    <div className=''>
        <h1>Client Name Here</h1>
        <h2>Add Workout</h2>
        <div>
            <form className='addworkout-form' onSubmit={newSubmitHandler}>
            <div className="mb-3">
                    <label>Workout Date</label><br/>
                    <input onChange={(e) => setWorkoutDate(e.target.value)} name="date" value={workoutDate}/>
                </div>
                <div className="mb-3">
                    <label>Workout Time</label><br/>
                    <input onChange={(e) => setWorkoutTime(e.target.value)} name="location" value={workoutTime}/>
                </div>
                <div className="mb-3">
                    <label>Live?</label><br/>
                    <input onChange={(e) => setLive(e.target.value)} name="live" value={live}/>
                </div>
                <div className="mb-3">
                    <label>Self Lead?</label><br/>
                    <input onChange={(e) => setSelfLead(e.target.value)} name="self" value={selfLead}/>
                </div>
                <div className="mb-3">
                    <label>Itinerary</label><br/>
                    <input onChange={(e) => setNotes(e.target.value)} name="notes" value={notes}/>
                </div>
                <button>Add Workout</button>
            </form>
        </div>
        
        
    </div>
            
    
    )
}

export {AddWorkout}