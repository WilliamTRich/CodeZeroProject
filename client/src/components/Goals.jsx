import React, {useState} from 'react'

const CreateGoal = (props) => {
    const [newGoal, setNewGoal] = useState("");
    const[goal, setGoal] = useState([]);

    const createGoal = (e) => {
        e.preventDefault();
        setGoal([...goal, newGoal])
        setNewGoal("");
    }
    const handleTodoDelete = (delIdx ) => {
        const filterGoals = goal.filter((goal, i) => {
            return i !== delIdx;
        });
        setGoal(filterGoals);
    
    }
    return (
        <div className ="goalTracker">
        <form onSubmit = {createGoal}>
            <div> 
            <input className="border-color: rgb(0 0 0);" type="text" value = {newGoal} onChange={ (e) => setNewGoal(e.target.value) }/>
            </div>
            <div>
            {/* <input type = "submit" value = "Create Goals"></input> */}
            <button className='bg-slate-500'>Create A Goal</button>
            </div>
            <h3>Your Goals</h3>
            {
                goal.map( (goal, i) => {
                return (<ul key = {i}>
                    <li>{goal}</li>
                    <button onClick = { (e)=> {handleTodoDelete(i);}}>Delete</button>
                </ul>);
                })
            }
            
        </form>

        </div>
    )
    
}

export  {CreateGoal};