import React,{useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const AddGoal = ()=> {
    const [goal, setGoal]= useState("");
    const newSubmitHandler = (e)=> {
        e.preventDefault();
        const newGoal = {
            goal,
        };
        axios.post('',
        newGoal, {
            withCredentials:true
        })
        .then((res)=> {
            console.log(res.data);
            navigate('/dashboard');
        })
    }
    return(     
    <div className='addgoal display: inline-block'>
        <div>
            <form className='goalsform ' onSubmit = {newSubmitHandler}>
                <label>New Goal:</label>
                <input className= "border-solid border-2 border-indigo-600" onChange={(e)=> setGoal(e.target.value)} name='goal' value={goal} />
                <button>add</button>
            </form>
        </div>
        
        
        
        
    </div>
            
    
    )
}

export {AddGoal}