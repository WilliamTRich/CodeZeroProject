//Imports
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//Components
import Form from '../../components/Form.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';

const Register = (props) => {
  // eslint-disable-next-line react/prop-types
  const { userType } = props;
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const registerUser = (user) => {
    axios
      .post(`http://localhost:8000/api/${userType}s`, user)
      .then((res) => {
        localStorage.setItem('AccessToken', res.headers['x-authorization']);
        setUser({
          userType: res.data.userType,
          userId: res.data.userId,
        });
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        setErrors([...err.response.data]);
      });
  };

  return (
    <div className={'flex bg-background h-screen w-screen justify-around items-center'}>
      <Form handleSubmit={registerUser} method={'Register'} userType={userType} errorState={[errors, setErrors]} />
      <img
        src={'https://cdn.wallpapersafari.com/63/79/ctZJYf.jpg'}
        className={'h-5/6 w-auto border-highlight border-4 rounded-2xl'}
        alt={'Woman enjoying yoga.'}
      />
    </div>
  );
};

export default Register;
