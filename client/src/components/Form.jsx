//Imports
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

//Components
import FormInput from './FormInput.jsx';

const Form = (props) => {
    // eslint-disable-next-line react/prop-types
    const { userType, method, onSubmit, errorState } = props;
    const [errors, setErrors] = errorState;
    const [user, updateUser] = useReducer(
        (user, updates) => ({ ...user, ...updates }),
        {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    );

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(user);
    };

    return (
        <div
            className={
                'flex flex-col h-4/5 w-2/5 gap-4 border-highlight border-4 justify-center items-center rounded-2xl'
            }
        >
            <p>{errors}</p>
            <h1 className={'text-primary text-6xl'}>{method}</h1>
            <form
                onSubmit={handleSubmit}
                className={'flex flex-col items-center gap-5 w-5/6'}
            >
                {method === 'Register' ? (
                    <>
                        <FormInput
                            htmlFor={'firstname'}
                            type={'text'}
                            placeholder={'First Name'}
                            value={[user, updateUser]}
                        />
                        <FormInput
                            htmlFor={'lastname'}
                            type={'text'}
                            placeholder={'Last Name'}
                            value={[user, updateUser]}
                        />
                    </>
                ) : (
                    ''
                )}
                <FormInput
                    htmlFor={'email'}
                    type={'text'}
                    placeholder={'Email'}
                    value={[user, updateUser]}
                />
                <FormInput
                    htmlFor={'password'}
                    type={'password'}
                    placeholder={'Password'}
                    value={[user, updateUser]}
                />
                {method === 'Register' ? (
                    <>
                        <FormInput
                            htmlFor={'confirmPassword'}
                            type={'password'}
                            placeholder={'Confirm Password'}
                            value={[user, updateUser]}
                        />
                    </>
                ) : (
                    ''
                )}
                <button
                    className={
                        'px-6 py-2 text-3xl bg-highlight text-background border-background border-2 hover:bg-secondary hover:text-primary'
                    }
                    type={'submit'}
                >
                    {method}
                </button>
                {method === 'Register' ? (
                    <p className={'text-xl'}>
                        Already have an account?{' '}
                        <a
                            className={
                                'text-blue-500 underline hover:cursor-pointer'
                            }
                            onClick={() => navigate(`/${userType}-login`)}
                        >
                            Login
                        </a>
                    </p>
                ) : (
                    <p className={'text-xl'}>
                        Need an account?{' '}
                        <a
                            className={
                                'text-blue-500 underline hover:cursor-pointer'
                            }
                            onClick={() => navigate(`/${userType}-register`)}
                        >
                            Register
                        </a>
                    </p>
                )}
            </form>
        </div>
    );
};

export default Form;
