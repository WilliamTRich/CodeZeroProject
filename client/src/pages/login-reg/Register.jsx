//Imports
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//Components
import Form from '../../components/Form.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';

const Register = (props) => {
    // eslint-disable-next-line react/prop-types
    const { userType, method } = props;
    const { user, setUser } = useContext(UserContext);
    const { errors, setErrors } = useState([]);

    const navigate = useNavigate();

    const registerUser = (user, userType) => {
        axios
            .post(`http://localhost:8000/api/${userType}s`, user)
            .then((res) => {
                localStorage.setItem(
                    'AccessToken',
                    res.headers['X-Authorization'],
                );
                setUser({
                    userType: res.data.userType,
                    userId: res.data.userId,
                });
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
                const errorResponse = err.response.data; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                    // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message);
                }
                // Set Errors
                setErrors(errorArr);
            });
    };

    return (
        <div
            className={
                'flex bg-background h-screen w-screen justify-around items-center'
            }
        >
            <Form
                userType={userType}
                method={method}
                onSubmit={registerUser}
                errorState={[errors, setErrors]}
            />
            <img
                src={'splashscreen-login.avif'}
                className={'h-4/5 w-auto border-highlight border-4 rounded-2xl'}
                alt={'Woman enjoying yoga.'}
            />
        </div>
    );
};

export default Register;
