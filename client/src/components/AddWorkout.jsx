import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const AddWorkout = (props)=> {
    const navigate = useNavigate();
    const[workoutTitle,setWorkoutTitle] = useState("");
    const[workoutDate,setWorkoutDate] = useState("");
    const[workoutTime,setWorkoutTime] = useState("");
    const[live,setLive] = useState("");
    const[selfLead,setSelfLead] = useState("");
    const[notes,setNotes] = useState("");
    const newSubmitHandler = (e) => {
        e.preventDefault();
        const newWorkout = {
            workoutTitle,
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
        <div className="flex flex-col w-full md:w-[100%] lg:w-[100%] xl:w-[100%] p-6 gap-4 border-highlight border-4 justify-center items-center rounded-2xl">
            <h1 className="text-primary text-5xl font-bold">Add Workout</h1>
        <div>
        <form
                onSubmit={newSubmitHandler}
                noValidate
                autoComplete="off"
                className="flex flex-col w-full max-w-md gap-4"
            >
                            <div className="mb-3">
                    <label className="text-primary mr-2">Workout Title</label>

                    <input 
                    onChange={(e) => setWorkoutDate(e.target.value)} 
                    name="title" 
                    value={workoutTitle}
                    className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
            <div className="mb-3">
                    <label className="text-primary mr-2">Workout Date</label>

                    <input 
                    onChange={(e) => setWorkoutDate(e.target.value)} 
                    name="date" 
                    value={workoutDate}
                    className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <div className="mb-3">
                    <label className="text-primary mr-2">Workout Time</label>

                    <input 
                    onChange={(e) => setWorkoutTime(e.target.value)} 
                    name="location" 
                    value={workoutTime}
                    className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <div className="mb-3">
                    <label className="text-primary mr-2">Live?</label>

                    <input 
                    onChange={(e) => setLive(e.target.value)} 
                    name="live" 
                    value={live}
                    className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <div className="mb-3">
                    <label className="text-primary mr-2">Self Lead?</label>

                    <input 
                    onChange={(e) => setSelfLead(e.target.value)} 
                    name="self" 
                    value={selfLead}
                    className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <div className="mb-3">
                    <label className="text-primary mr-2">Itinerary</label>

                    <input 
                    onChange={(e) => setNotes(e.target.value)} 
                    name="notes" 
                    value={notes}
                    className="border-primary border-2 rounded p-2 text-black"
                    />
                </div>
                <button
                    className="bg-highlight text-background py-2 px-4 rounded-lg hover:bg-secondary hover:text-accent-extralight transition duration-300"
                    type="submit"
                >Add Workout</button>
            </form>
        </div>
        
        
    </div>
            
    
    )
}

export default AddWorkout;
