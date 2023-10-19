import React , {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GoalsList = (props)=> {
    const [goalList,setGoalList] = useState([]);
    useEffect(()=> {
        axios.get('')
        .then((res)=> {
            console.log(res);
            console.log(res.data);
            setGoalList(res.data);
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [])
    // const deleteHandler = (id)=> {
    //     axios.delete(``)
    //     .then((res)=> {
    //         console.log(res.data);
    //         setGoals(goals.filter(()))
    //     })
    // }
    return(     
    <div className=''>
        <h1 className=' '>Goals</h1>
        {/* <ul className=''>
            <li> Do Yoga in the park Every Sunday</li>
            <li>Lose 5lbs by next Month</li>
            <li>Drink water everyday</li>
        </ul> */}
        {
            goalList?
          // eslint-disable-next-line array-callback-return
            goalList.map((goal,index)=> (
                <ul key={index}>
                    <li>{goal}</li>
                </ul>
            ))
            :null 
        }
        
        
    </div>
            
    
    )
}

export {GoalsList}


