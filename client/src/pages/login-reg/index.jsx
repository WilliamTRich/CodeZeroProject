//Imports
import React from 'react';

//Components
import LoginForm from '../../components/LoginForm.jsx';

const Login = () => {
    return (
        <div
            className={
                'flex bg-background h-screen w-screen justify-around items-center'
            }
        >
            <LoginForm />
            <img
                src={'splashscreen-login.avif'}
                className={'h-4/5 w-auto border-highlight border-4 rounded-2xl'}
                alt={'Woman enjoying yoga.'}
            />
        </div>
    );
};

export default Login;
