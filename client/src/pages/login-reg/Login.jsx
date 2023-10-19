//Imports
import React from 'react';

//Components
import Form from '../../components/Form.jsx';

const Login = (props) => {
    // eslint-disable-next-line react/prop-types
    const { userType, method } = props;
    return (
        <div
            className={
                'flex bg-background h-screen w-screen justify-around items-center'
            }
        >
            <Form userType={userType} method={method} />
            <img
                src={'splashscreen-login.avif'}
                className={'h-4/5 w-auto border-highlight border-4 rounded-2xl'}
                alt={'Woman enjoying yoga.'}
            />
        </div>
    );
};

export default Login;
