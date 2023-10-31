import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Form from '../../components/Form.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';

const Login = (props) => {
  const { userType } = props;
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const loginUser = (user) => {
    axios
      .post(`http://localhost:8000/api/${userType}s/login`, user)
      .then((res) => {
        localStorage.setItem('AccessToken', res.headers['x-authorization']);
        setUser(res.data);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        setErrors([...err.response.data]);
      });
  };

  return (
    <div className={'flex flex-col md:flex-row h-screen bg-background'}>
      <div className={'flex flex-col justify-center items-center w-full md:w-1/2 p-8'}>
        <Form handleSubmit={loginUser} method={'Login'} userType={userType} errorState={[errors, setErrors]} />
      </div>

      <div className={'flex justify-center items-center w-full md:w-1/2 p-8'}>
        <img
          src={'splashscreen-login.avif'}
          className={'h-auto w-full md:max-w-md border-highlight border-4 rounded-2xl'}
          alt={'Woman enjoying yoga.'}
        />
      </div>
    </div>

  );
};

export default Login;
