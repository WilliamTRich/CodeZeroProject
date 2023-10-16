import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Nav } from './Nav';

const OneClient = (props) => {
    const {id} = props;
    const [clientInfo,setClientInfo] = useState({});
    useEffect(()=> {
        axios.get(``)
        .then((res)=> {
            console.log(res.data)
            setClientInfo(res.data);
        })
        .catch((err)=> {
            console.log(err);
            useNavigate('/error')
            
        })
    }, [id])
    return (
        <div>
            <Nav/>
        <h1>{clientInfo.firstName} </h1>
        {/* clientInfo.lastName */}
        </div>
    )
}
export default OneClient;