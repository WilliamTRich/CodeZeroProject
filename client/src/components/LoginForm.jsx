//Imports

//Components
import FormInput from './FormInput.jsx';

const LoginForm = (userType, method) => {
    method = 'Register';
    return (
        <div
            className={
                'flex flex-col h-4/5 w-2/5 gap-8 border-highlight border-4 justify-center items-center rounded-2xl'
            }
        >
            <h1 className={'text-primary text-6xl'}>{method}</h1>
            <form
                action={''}
                className={'flex flex-col items-center gap-5 w-5/6'}
            >
                {method === 'Register' ? (
                    <>
                        <FormInput
                            htmlFor={'firstname'}
                            type={'text'}
                            placeholder={'First Name'}
                        />
                        <FormInput
                            htmlFor={'lastname'}
                            type={'text'}
                            placeholder={'Last Name'}
                        />
                    </>
                ) : (
                    ''
                )}
                <FormInput
                    htmlFor={'email'}
                    type={'text'}
                    placeholder={'Email'}
                />
                <FormInput
                    htmlFor={'password'}
                    type={'password'}
                    placeholder={'Password'}
                />
                {method === 'Register' ? (
                    <>
                        <FormInput
                            htmlFor={'confirmPassword'}
                            type={'password'}
                            placeholder={'Password'}
                        />
                    </>
                ) : (
                    ''
                )}
                <button
                    className={
                        'px-6 py-2 text-3xl bg-highlight text-background border-background border-2 hover:bg-secondary hover:text-primary'
                    }
                >
                    {method}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
